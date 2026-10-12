import HeroSection from "@/components/home/HeroSection";
import ProductsSection from "@/components/home/ProductsSection";
import IngredientsSection from "@/components/home/IngredientsSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import CtaBanner from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Herba Editorial Hero Section */}
      <HeroSection />

      {/* 2. Flagship Botanical Formulations Section */}
      <ProductsSection />

      {/* 3. New Herba Sacred Ingredients Showcase Section */}
      <IngredientsSection />

      {/* 4. The VedaHaat Standard: Core Ayurvedic Principles */}
      <WhyChooseSection />

      {/* 5. Direct Order CTA Banner */}
      <CtaBanner />
    </div>
  );
}
