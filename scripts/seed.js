// Database Seed Script for VedaHaat
// Run with: node scripts/seed.js

const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Read environment variables directly from .env.local
const envPath = path.resolve(__dirname, '../.env.local');
let supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
let serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const [key, ...values] = trimmed.split('=');
      const val = values.join('=').trim().replace(/^["']|["']$/g, '');
      if (key === 'NEXT_PUBLIC_SUPABASE_URL') supabaseUrl = val;
      if (key === 'SUPABASE_SERVICE_ROLE_KEY') serviceRoleKey = val;
    }
  });
}

if (!supabaseUrl || !serviceRoleKey) {
  supabaseUrl = 'https://rlhghyibmygpiqazonsg.supabase.co';
  console.log('Using default Supabase URL...');
}

const supabase = createClient(supabaseUrl, serviceRoleKey);

const SEED_PRODUCTS = [
  {
    slug: "yameny-khalta",
    name: "4G Avleh Yameny Khalta with Sidr Honey",
    subtitle: "Traditional Royal Majoon Formula (Includes FREE Tila Josh Jawani 15ml)",
    category: "Rasayana & Vitality Tonic",
    dosha: "Balances Vata & Pitta",
    price: 1499,
    original_price: 1999,
    discount: "Save 25%",
    rating: 4.9,
    review_count: 382,
    image: "/images/products/yameny-khalta-combo.jpg",
    badge: "Includes FREE Tila Josh Jawani",
    short_description: "A classical royal Sidr honey & herbal Rasayana formulation designed for sustained vitality, strength, and stamina. Every order includes a complimentary full-size Tila Josh Jawani 15ml Ayurvedic Vitality Oil.",
    long_description: "4G Avleh Yameny Khalta (Majoon) is an authentic royal restorative formulation crafted with wild-harvested Sidr Honey and revered Ayurvedic Rasayana herbs including Ashwagandha, Safed Musli, and dry fruits. Inspired by ancient royal wellness recipes, it naturally replenishes internal vitality, counters chronic fatigue, and restores stamina. In this exclusive combo, every jar is paired with a complimentary 15ml bottle of Tila Josh Jawani Ayurvedic Massage Oil, delivering a complete internal and external vitality routine.",
    in_stock: true,
    benefits: [
      { icon_name: "Zap", title: "Sustained Natural Stamina & Strength", description: "Replenishes cellular Ojas and energy levels naturally without artificial stimulants, caffeine spikes, or crashes.", sort_order: 1 },
      { icon_name: "Flame", title: "Includes FREE Tila Josh Jawani (15ml)", description: "Enjoy internal nourishment through 4G Avleh alongside targeted external vigor with the complimentary Tila Josh Jawani oil.", sort_order: 2 },
      { icon_name: "ShieldCheck", title: "Immunity & Tissue Rejuvenation", description: "Rich in Sidr honey antioxidants and traditional restorative herbs that strengthen natural immunity and cellular resilience.", sort_order: 3 },
      { icon_name: "Sparkles", title: "Ancient Raja Maharaja Recipe", description: "Prepared following time-tested royal treatises to relieve physical fatigue and promote vitality in everyday life.", sort_order: 4 }
    ],
    ingredients: [
      { name: "Yemeni Sidr Honey", sanskrit_name: "Madhu (Sidr)", property: "World's most revered medicinal honey, exceptionally rich in bio-active flavonoids, minerals, and live enzymes.", sort_order: 1 },
      { name: "Ashwagandha", sanskrit_name: "Withania Somnifera", property: "Premier adaptogen that regulates cortisol, counters daily stress, and enhances stamina and muscular endurance.", sort_order: 2 },
      { name: "Safed Musli", sanskrit_name: "Chlorophytum Borivilianum", property: "Revered Rasayana herb prized in classical texts for tissue replenishment, vitality, and physical vigor.", sort_order: 3 },
      { name: "Royal Jelly", sanskrit_name: "Raj Madhu", property: "Natural nutrient powerhouse packed with B-complex vitamins, amino acids, and essential trace minerals.", sort_order: 4 },
      { name: "Botanical Extracts in Tila Josh Jawani", sanskrit_name: "Tailam & Rasayana Dravyas", property: "Specialized traditional oils formulated for external application to ease muscular fatigue and support localized circulation.", sort_order: 5 },
      { name: "Saffron & Dried Nuts", sanskrit_name: "Kesar & Vatada", property: "Precious spices and cold-pressed botanical fats for sustained tissue fuel, radiance, and mood balance.", sort_order: 6 }
    ],
    usage_steps: [
      { step: 1, title: "Morning Routine (4G Avleh Yameny Khalta)", instruction: "Take 1 tablespoon (approx. 10g-15g) of 4G Avleh Yameny Khalta followed by a cup of warm milk or lukewarm water.", tip: "Best taken in the morning with breakfast to sustain all-day vigor and physical stamina.", sort_order: 1 },
      { step: 2, title: "Night Routine (Tila Josh Jawani Oil)", instruction: "Dispense 5 to 7 drops of the complimentary Tila Josh Jawani Oil onto palms and massage gently until fully absorbed.", tip: "Apply once daily at bedtime to ease muscular tension and support localized blood flow.", sort_order: 2 },
      { step: 3, title: "Consistent 45-60 Day Course", instruction: "Use both formulations consistently together to experience the synergistic benefits of internal and external Ayurveda.", tip: "Store 4G Avleh at room temperature (do not refrigerate). Keep Tila Josh Jawani bottle tightly capped.", sort_order: 3 }
    ],
    faqs: [
      { question: "Is Tila Josh Jawani really included free with 4G Avleh?", answer: "Yes! Under our exclusive vitality segment, every order of 4G Avleh Yameny Khalta includes a full-size complimentary 15ml bottle of Tila Josh Jawani at no additional charge.", sort_order: 1 },
      { question: "How do 4G Avleh and Tila Josh Jawani work together?", answer: "They provide complete synergistic care: 4G Avleh delivers internal vitality through Sidr honey, Ashwagandha, and Safed Musli, while Tila Josh Jawani acts externally through specialized botanical oils to promote tone and circulation.", sort_order: 2 },
      { question: "How long does one combo pack last?", answer: "With the recommended daily dosage of 1 tablespoon of 4G Avleh and 5-7 drops of Tila Josh Jawani, one combo provides approximately a 30-day supply.", sort_order: 3 },
      { question: "Are there any side effects?", answer: "No. 4G Avleh and Tila Josh Jawani are formulated from 100% pure Ayurvedic botanicals and wild Sidr honey with zero harmful chemicals, steroids, or synthetic additives.", sort_order: 4 },
      { question: "Is the packaging discreet for home delivery?", answer: "Yes. All orders are packed in plain, tamper-proof, discreet outer boxes with zero sensitive product naming on the delivery label.", sort_order: 5 },
      { question: "Can I pay online securely?", answer: "Yes, we offer 256-bit encrypted online checkout via Razorpay with fast dispatch, as well as assistance on WhatsApp.", sort_order: 6 }
    ]
  },
  {
    slug: "hikmo-sugar-madhumeh-daman",
    name: "Hikmo Sugar & Madhumeh Daman Powder",
    subtitle: "Ayurvedic Blood Sugar & Metabolic Glycemic Support Combo",
    category: "Madhumeha & Glucose Care",
    dosha: "Balances Kapha & Pitta",
    price: 1499,
    original_price: 1899,
    discount: "Save 21%",
    rating: 4.8,
    review_count: 264,
    image: "/images/products/hikmo-madhumeh-combo.jpg",
    badge: "100% Herbal Diabetes Care",
    short_description: "A classical synergistic dual formulation combining Hikmo Sugar (100g) with Madhumeh Daman Powder to support healthy blood glucose levels, manage polyurea, and rejuvenate pancreatic vitality.",
    long_description: "The Hikmo Sugar & Madhumeh Daman Powder combo is a specialized Ayurvedic regimen formulated to support healthy carbohydrate metabolism, regulate fasting and post-meal glucose spikes, and alleviate polyurea (frequent urination). Harnessing revered Tikta (bitter) and Kashaya (astringent) botanicals—including pure Amla, Jamun seed, Gurmar (Gymnema Sylvestre), Karela, Methi, and Vijaysar—it aids the body's natural insulin sensitivity, curtails sweet cravings, and counters glycemic fatigue without harsh side effects.",
    in_stock: true,
    benefits: [
      { icon_name: "Activity", title: "Regulates Blood Glucose Spikes", description: "Synergistic bitter-tonic botanicals help prevent post-meal sugar surges and promote steady daily glycemic balance.", sort_order: 1 },
      { icon_name: "ShieldCheck", title: "Relief from Polyurea & Frequent Urination", description: "Targeted herbs strengthen renal and bladder tone, easing the discomfort of frequent daytime and nighttime urination.", sort_order: 2 },
      { icon_name: "Flame", title: "Pancreatic & Beta-Cell Nourishment", description: "Enriched with Vijaysar, Karela, and Gurmar to naturally rejuvenate pancreatic beta-cells and metabolic efficiency.", sort_order: 3 },
      { icon_name: "Zap", title: "Curtails Sugar & Carb Cravings", description: "Gurmar ('The Sugar Destroyer') naturally desensitizes sweet taste receptors, curbing unhealthy cravings and glycemic fatigue.", sort_order: 4 }
    ],
    ingredients: [
      { name: "Amla (Indian Gooseberry)", sanskrit_name: "Amalaki (Phyllanthus Emblica)", property: "Rich natural source of bioavailable Vitamin C and chromium that protects pancreatic tissues and enhances insulin response.", sort_order: 1 },
      { name: "Jamun Seed", sanskrit_name: "Syzygium Cumini", property: "Contains Jamboline glycoside which prevents the excessive conversion of dietary starch into glucose.", sort_order: 2 },
      { name: "Gurmar (Gymnema Sylvestre)", sanskrit_name: "Meshashringi", property: "Revered as the 'Sugar Destroyer'; suppresses intestinal sugar absorption and supports optimal beta-cell function.", sort_order: 3 },
      { name: "Karela (Bitter Gourd)", sanskrit_name: "Momordica Charantia", property: "Contains Charantin and Polypeptide-p, natural plant principles that facilitate cellular glucose utilization.", sort_order: 4 },
      { name: "Vijaysar", sanskrit_name: "Pterocarpus Marsupium", property: "Ancient Rasayana wood celebrated in classical Samhitas for pancreatic beta-cell rejuvenation and healthy lipid metabolism.", sort_order: 5 },
      { name: "Methi (Fenugreek)", sanskrit_name: "Trigonella Foenum-Graecum", property: "High in galactomannan soluble fiber which slows carbohydrate breakdown and improves systemic glucose sensitivity.", sort_order: 6 }
    ],
    usage_steps: [
      { step: 1, title: "Morning Dose", instruction: "Take 1 level teaspoon of the powder mixture stirred into half a glass of lukewarm water 30 minutes before breakfast.", tip: "Consistent timing before morning meals gives the strongest glycemic stabilization.", sort_order: 1 },
      { step: 2, title: "Evening Dose", instruction: "Take 1 level teaspoon stirred into lukewarm water 30 minutes before evening dinner.", tip: "Helps regulate post-dinner blood sugar levels and reduces nocturnal urination.", sort_order: 2 },
      { step: 3, title: "Monitor Your Progress", instruction: "Continue daily alongside a wholesome diet and regular hydration. Track blood glucose levels periodically.", tip: "A consistent 60 to 90 day course produces optimal long-term metabolic stability.", sort_order: 3 }
    ],
    faqs: [
      { question: "Can I take this combo alongside my allopathic diabetes medicines?", answer: "Yes. Maintain a 45-60 minute gap between taking the Ayurvedic powder and your prescribed allopathic medicines. Always monitor your blood sugar regularly and consult your healthcare practitioner.", sort_order: 1 },
      { question: "What does the combo include?", answer: "Each combo pack includes one container of Hikmo Sugar (100g) and one bottle of Madhumeh Daman Powder for comprehensive daily blood sugar management.", sort_order: 2 },
      { question: "Are there any added sugars or artificial additives?", answer: "No. Both formulations are 100% pure botanical extracts and dried herbal powders with zero added sugar, artificial sweeteners, chemicals, or preservatives.", sort_order: 3 },
      { question: "How soon can I expect to notice improvements?", answer: "Many customers report reduced cravings, decreased urinary frequency, and better daytime energy within 10 to 14 days of regular use.", sort_order: 4 },
      { question: "How long does one combo set last?", answer: "With the recommended dosage of 1 teaspoon twice daily, the combo set provides approximately a 30-day supply.", sort_order: 5 },
      { question: "How is it packaged and shipped?", answer: "Packaged in secure, tamper-evident food-grade containers with moisture-locking seals to preserve botanical potency during transit.", sort_order: 6 }
    ]
  }
];

async function seed() {
  console.log(`Seeding VedaHaat database in Supabase for 2 active formulations...`);

  // First, clean up obsolete products from database
  const activeSlugs = SEED_PRODUCTS.map(p => p.slug);
  const { data: existingProducts, error: fetchErr } = await supabase.from('products').select('id, slug');
  if (existingProducts && existingProducts.length > 0) {
    for (const ep of existingProducts) {
      if (!activeSlugs.includes(ep.slug)) {
        console.log(`Removing obsolete product: ${ep.slug} (${ep.id})`);
        await supabase.from('products').delete().eq('id', ep.id);
      }
    }
  }

  for (const item of SEED_PRODUCTS) {
    // 1. Upsert product
    const productPayload = {
      slug: item.slug,
      name: item.name,
      subtitle: item.subtitle,
      category: item.category,
      dosha: item.dosha,
      price: item.price,
      original_price: item.original_price,
      discount: item.discount,
      rating: item.rating,
      review_count: item.review_count,
      image: item.image,
      image_url: item.image,
      badge: item.badge,
      description: item.short_description,
      short_description: item.short_description,
      long_description: item.long_description,
      in_stock: item.in_stock,
      updated_at: new Date().toISOString()
    };

    const { data: product, error: prodErr } = await supabase
      .from('products')
      .upsert(productPayload, { onConflict: 'slug' })
      .select('id')
      .single();

    if (prodErr || !product) {
      console.error(`Error saving product ${item.slug}:`, prodErr);
      continue;
    }

    const productId = product.id;
    console.log(`Synced product: ${item.name} (${productId})`);

    // 2. Clear old relational rows
    await supabase.from('product_benefits').delete().eq('product_id', productId);
    await supabase.from('product_ingredients').delete().eq('product_id', productId);
    await supabase.from('product_usage_steps').delete().eq('product_id', productId);
    await supabase.from('product_faqs').delete().eq('product_id', productId);

    // 3. Insert fresh relational rows
    if (item.benefits?.length) {
      await supabase.from('product_benefits').insert(item.benefits.map(b => ({ ...b, product_id: productId })));
    }
    if (item.ingredients?.length) {
      await supabase.from('product_ingredients').insert(item.ingredients.map(i => ({ ...i, product_id: productId })));
    }
    if (item.usage_steps?.length) {
      await supabase.from('product_usage_steps').insert(item.usage_steps.map(u => ({ ...u, product_id: productId })));
    }
    if (item.faqs?.length) {
      await supabase.from('product_faqs').insert(item.faqs.map(f => ({ ...f, product_id: productId })));
    }
    console.log(`Synced content for ${item.name}`);
  }

  console.log('Seeding completed successfully! Catalog now features 2 active formulations.');
}

seed().catch(console.error);
