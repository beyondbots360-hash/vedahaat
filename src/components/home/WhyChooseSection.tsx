"use client";

import { Leaf, Award, ShieldCheck, Truck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const PILLARS = [
  {
    number: "01",
    title: "Wildcrafted Botanicals",
    description: "Sourced sustainably from native bio-regions across India and ancient Sidr groves for peak phytochemical potency.",
    badge: "Origin Traceability",
  },
  {
    number: "02",
    title: "Classical Samhita Ratios",
    description: "Formulated adhering strictly to traditional Ayurvedic treatises (Charaka & Sushruta) combined with modern hygiene standards.",
    badge: "100% Classical",
  },
  {
    number: "03",
    title: "Tested for Safety & Purity",
    description: "Every batch is rigorously tested for heavy metals, microbial safety, and adulterants. Zero artificial colors or fillers.",
    badge: "Standardized Grade",
  },
  {
    number: "04",
    title: "Discreet Express Delivery",
    description: "Secure, tamper-evident packaging dispatched via priority air couriers across all Indian PIN codes with live tracking.",
    badge: "Fast Dispatch",
  },
];

export default function WhyChooseSection() {
  return (
    <section id="why-choose" className="py-20 sm:py-24 bg-[#FBF9F4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F0EA] border border-[#CFDFD3] text-[#1B4332] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C59A3F]" />
            <span>The VedaHaat Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1B4332] tracking-tight">
            Our Core Principles
          </h2>
          <p className="text-xs sm:text-sm font-semibold tracking-[0.16em] text-[#7E8D82] uppercase mt-2">
            Ancient Science. Modern Purity. Uncompromising Integrity.
          </p>
        </div>

        {/* 4 Feature Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PILLARS.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-7 border border-[#EAE2D2] shadow-xs hover:shadow-xl hover:border-[#C59A3F]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Large Number & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl sm:text-4xl font-serif font-bold text-[#E5DCBE] group-hover:text-[#C59A3F] transition-colors">
                    {item.number}
                  </span>
                  <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#E8F0EA] text-[#1B4332]">
                    {item.badge}
                  </span>
                </div>

                {/* Feature Title */}
                <h3 className="text-xl font-serif font-bold text-[#1B4332] mb-3 tracking-tight group-hover:text-[#2D6A4F] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#526056] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F2ECE1] flex items-center gap-2 text-xs font-semibold text-[#1B4332]">
                <Leaf className="w-3.5 h-3.5 text-[#2D6A4F]" />
                <span>Ayurvedic Assured</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
