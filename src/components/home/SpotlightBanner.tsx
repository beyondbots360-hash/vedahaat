"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ShieldCheck, Sparkles, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

const BOTANICAL_POINTS = [
  "100% Wild Harvested Herbs",
  "Standardized Active Extracts",
  "Zero Chemical Preservatives",
  "Heavy Metal Tested & Certified",
];

export default function SpotlightBanner() {
  return (
    <section className="py-16 sm:py-24 bg-[#FBF9F4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Left Card: Dark Emerald Asymmetric Card with Bottle cutout */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 bg-[#0E2F20] text-white rounded-[36px] p-8 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[440px]"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1B5238] rounded-full blur-3xl -z-0 opacity-60" />

            <div className="relative z-10">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#F59E0B] block mb-2">
                Premier Formulation
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
                Yameny Khalta with Sidr Honey
              </h3>
              <p className="text-xs sm:text-sm text-white/75 max-w-sm mb-6 leading-relaxed">
                Centuries-old royal wellness recipe combining pure Sidr honey with Ashwagandha, Safed Musli, and Swarna Bhasma.
              </p>

              {/* 3 Quick Stats */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/15">
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-[#F59E0B]">4.9★</p>
                  <p className="text-[10px] text-white/70 uppercase">Customer Rating</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-[#F59E0B]">100%</p>
                  <p className="text-[10px] text-white/70 uppercase">Pure Madhu</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-[#F59E0B]">FREE</p>
                  <p className="text-[10px] text-white/70 uppercase">Lava 31 Gold</p>
                </div>
              </div>
            </div>

            {/* Showcase Image inside Card */}
            <div className="relative w-full h-48 sm:h-56 mt-4 flex items-center justify-center z-10">
              <Image
                src="/images/products/yameny-khalta-combo.jpg"
                alt="Yameny Khalta Bottle"
                fill
                className="object-contain drop-shadow-xl"
              />
            </div>
          </motion.div>

          {/* Right Column: "Only the Best Botanicals" Checklist */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6 lg:pl-6 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF2ED] text-[#0E2F20] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Standard of Excellence</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0E2F20] tracking-tight leading-tight">
              Only the Best Botanicals
            </h2>

            <p className="text-sm sm:text-base text-[#526056] leading-relaxed">
              We reject fillers, synthetics, and diluted extracts. Each ingredient is selected based on classical Ayurvedic treatises and verified via modern scientific testing.
            </p>

            {/* Checklist items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {BOTANICAL_POINTS.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#0E2F20] text-[#F59E0B] flex items-center justify-center shrink-0 shadow-xs">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold text-[#1C241F]">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/products/yameny-khalta"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0E2F20] text-white text-sm font-bold shadow-md hover:bg-[#154630] hover:scale-[1.02] transition-all duration-300"
              >
                <span>Discover the Synergy</span>
                <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
