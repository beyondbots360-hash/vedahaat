-- =============================================
-- VedaHaat Database Schema
-- Supabase Project: rlhghyibmygpiqazonsg
-- =============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =============================================
-- 1. Products Table
-- =============================================
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  subtitle TEXT,
  category TEXT,
  dosha TEXT,
  price NUMERIC NOT NULL DEFAULT 0,
  original_price NUMERIC NOT NULL DEFAULT 0,
  discount TEXT,
  rating NUMERIC DEFAULT 4.9,
  review_count INTEGER DEFAULT 0,
  image TEXT,
  image_url TEXT,
  badge TEXT,
  description TEXT DEFAULT '',
  short_description TEXT DEFAULT '',
  long_description TEXT,
  in_stock BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug);

-- =============================================
-- 2. Product Benefits Table
-- =============================================
CREATE TABLE IF NOT EXISTS product_benefits (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  icon_name TEXT DEFAULT 'Zap',
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  sort_order INTEGER DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_product_benefits_product_id ON product_benefits(product_id);

-- =============================================
-- 3. Product Ingredients Table
-- =============================================
CREATE TABLE IF NOT EXISTS product_ingredients (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  sanskrit_name TEXT,
  property TEXT,
  sort_order INTEGER DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_product_ingredients_product_id ON product_ingredients(product_id);

-- =============================================
-- 4. Product Usage Steps Table
-- =============================================
CREATE TABLE IF NOT EXISTS product_usage_steps (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  step INTEGER DEFAULT 1,
  title TEXT NOT NULL,
  instruction TEXT NOT NULL,
  tip TEXT,
  sort_order INTEGER DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_product_usage_steps_product_id ON product_usage_steps(product_id);

-- =============================================
-- 5. Product FAQs Table
-- =============================================
CREATE TABLE IF NOT EXISTS product_faqs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  sort_order INTEGER DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_product_faqs_product_id ON product_faqs(product_id);

-- =============================================
-- 6. Orders Table
-- =============================================
CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_number TEXT,
  razorpay_order_id TEXT,
  razorpay_payment_id TEXT,
  status TEXT DEFAULT 'paid',
  customer_name TEXT,
  customer_phone TEXT,
  customer_email TEXT,
  address_line TEXT,
  landmark TEXT,
  city TEXT,
  state TEXT,
  pincode TEXT,
  product_name TEXT,
  product_slug TEXT,
  quantity INTEGER DEFAULT 1,
  total_amount NUMERIC DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_orders_order_number ON orders(order_number);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders(created_at DESC);

-- =============================================
-- Row Level Security (RLS)
-- =============================================

-- Enable RLS on all tables
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_benefits ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_ingredients ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_usage_steps ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Products: Public can read, service_role can write
CREATE POLICY "Products are viewable by everyone" ON products FOR SELECT USING (true);
CREATE POLICY "Products are editable by service role" ON products FOR ALL USING (auth.role() = 'service_role');

-- Product child tables: Public can read, service_role can write
CREATE POLICY "Benefits are viewable by everyone" ON product_benefits FOR SELECT USING (true);
CREATE POLICY "Benefits are editable by service role" ON product_benefits FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Ingredients are viewable by everyone" ON product_ingredients FOR SELECT USING (true);
CREATE POLICY "Ingredients are editable by service role" ON product_ingredients FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Usage steps are viewable by everyone" ON product_usage_steps FOR SELECT USING (true);
CREATE POLICY "Usage steps are editable by service role" ON product_usage_steps FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "FAQs are viewable by everyone" ON product_faqs FOR SELECT USING (true);
CREATE POLICY "FAQs are editable by service role" ON product_faqs FOR ALL USING (auth.role() = 'service_role');

-- Orders: Only service_role can read and write
CREATE POLICY "Orders are manageable by service role" ON orders FOR ALL USING (auth.role() = 'service_role');
