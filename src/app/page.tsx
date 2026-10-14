import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import SpotlightBanner from "@/components/home/SpotlightBanner";
import ProductsSection from "@/components/home/ProductsSection";
import LifestyleSection from "@/components/home/LifestyleSection";
import DoseDiagramSection from "@/components/home/DoseDiagramSection";
import FaqSection from "@/components/home/FaqSection";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col bg-[#FBF9F4]">
      {/* 1. Herba Curved Deep Forest Hero Section */}
      <HeroSection />

      {/* 2. Asymmetric Spotlight Banner ("Only the Best Botanicals") */}
      <SpotlightBanner />

      {/* 3. Products Showcase ("Wellness, Naturally Elevated") - 2 Light Sage Cards */}
      <ProductsSection />

      {/* 4. Central 6-Node Circular Dosage Diagram ("Nature Inside Every Dose") */}
      <div id="botanicals">
        <DoseDiagramSection />
      </div>

      {/* 6. Herba Accordion FAQ Section ("Everything You Need to Know") */}
      <FaqSection />
    </div>
  );
}
