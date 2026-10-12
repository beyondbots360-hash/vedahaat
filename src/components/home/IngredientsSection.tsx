"use client";

import Image from "next/image";
import { Sparkles, ShieldCheck, Leaf, HeartPulse } from "lucide-react";
import { motion } from "framer-motion";

const BOTANICAL_INGREDIENTS = [
  {
    name: "Yemeni Sidr Honey",
    botanical: "Madhu (Ziziphus Spina-Christi)",
    role: "Cellular Ojas & Deep Rejuvenation",
    description: "Revered royal nectar harvested from ancient Sidr trees. Packed with natural flavonoids, live enzymes, and protective antioxidants to fuel daytime vitality.",
    category: "Vitality Elixir",
    tag: "Sidr Bio-Active",
  },
  {
    name: "Shuddha Shilajit",
    botanical: "Asphaltum Punjabianum",
    role: "Physical Stamina & Micronutrient Transport",
    description: "Purified Himalayan mineral pitch enriched with 80+ trace minerals and fulvic acid to optimize cellular energy synthesis and physical endurance.",
    category: "Rasayana Tonic",
    tag: "Himalayan Grade",
  },
  {
    name: "Triphala Organic Blend",
    botanical: "Amalaki, Haritaki & Bibhitaki",
    role: "Gentle Colon Detox & Agni Stimulation",
    description: "Classical three-fruit gut cleanser that gently clears accumulated metabolic toxins (Ama) without causing cramping, preserving digestive equilibrium.",
    category: "Digestive Balance",
    tag: "Non-Habit Forming",
  },
  {
    name: "Gurmar & Jamun Seed",
    botanical: "Gymnema Sylvestre & Syzygium Cumini",
    role: "Healthy Glucose Balance & Beta-Cell Care",
    description: "The time-tested 'Sugar Destroyer' combination that curtails sweet cravings, supports healthy insulin sensitivity, and counteracts midday energy dips.",
    category: "Metabolic Wellness",
    tag: "Glycemic Harmony",
  },
];

export default function IngredientsSection() {
  return (
    <section id="ingredients" className="py-20 sm:py-24 bg-[#F5EFE6]/60 relative overflow-hidden border-y border-[#EAE2D2]">
      {/* Subtle organic background foliage watermark */}
      <div className="absolute -top-12 right-0 w-80 h-80 pointer-events-none opacity-20">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-[#2D6A4F]">
          <path d="M20,100 Q80,20 180,40 Q150,140 20,100 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F0EA] border border-[#CFDFD3] text-[#1B4332] text-xs font-bold uppercase tracking-wider mb-4">
            <Leaf className="w-3.5 h-3.5 text-[#2D6A4F]" />
            <span>Rooted in Classical Samhitas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1B4332] tracking-tight">
            Sacred Botanical Ingredients
          </h2>
          <p className="text-sm sm:text-base text-[#526056] mt-3 leading-relaxed">
            Every VedaHaat formula is crafted exclusively from unadulterated, wildcrafted herbs harvested in reverence with nature and standardized for biological efficacy.
          </p>
        </div>

        {/* 4 Herb Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {BOTANICAL_INGREDIENTS.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#EBE3D3] shadow-xs hover:shadow-xl hover:border-[#C59A3F]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Category & Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#A98028]">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#F4EFE6] text-[#1B4332] border border-[#E5DCBE]">
                    {item.tag}
                  </span>
                </div>

                {/* Herb Name */}
                <h3 className="text-xl font-serif font-bold text-[#1B4332] group-hover:text-[#2D6A4F] transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs italic text-[#7E8D82] mt-0.5 mb-3 font-serif">
                  {item.botanical}
                </p>

                {/* Role badge */}
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B4332] bg-[#E8F0EA] px-2.5 py-1 rounded-lg mb-4">
                  <Sparkles className="w-3 h-3 text-[#C59A3F]" />
                  <span>{item.role}</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#526056] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Purity Guarantee */}
              <div className="pt-5 mt-6 border-t border-[#F2ECE1] flex items-center justify-between text-[11px] text-[#7E8D82]">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2D6A4F]" />
                  100% Shuddha Grade
                </span>
                <span className="font-semibold text-[#1B4332]">Zero Additives</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
