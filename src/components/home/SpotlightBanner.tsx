"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const BOTANICAL_POINTS = [
  "Amla & Jamun Seed Extracts",
  "Gurmar (Sugar Destroyer)",
  "Vijaysar & Karela Glycosides",
  "Zero Chemical Preservatives",
];

export default function SpotlightBanner() {
  return (
    <section className="py-16 sm:py-24 bg-[#FBF9F4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Left Card: Dark Emerald Asymmetric Card with Lifestyle Couple Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 bg-[#0E2F20] text-white rounded-[36px] p-8 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[460px]"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1B5238] rounded-full blur-3xl -z-0 opacity-60" />

            <div className="relative z-10">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#F59E0B] block mb-2">
                Flagship Glycemic Care
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
                Hikmo Sugar & Madhumeh Daman
              </h3>
              <p className="text-xs sm:text-sm text-white/75 max-w-sm mb-6 leading-relaxed">
                Live a healthier life with natural glycemic control. Rejuvenate pancreatic vitality and manage frequent urination naturally.
              </p>

              {/* 3 Quick Stats */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/15">
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-[#F59E0B]">4.8★</p>
                  <p className="text-[10px] text-white/70 uppercase">Customer Rating</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-[#F59E0B]">100%</p>
                  <p className="text-[10px] text-white/70 uppercase">Ayurvedic Herbs</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-[#F59E0B]">DAILY</p>
                  <p className="text-[10px] text-white/70 uppercase">Sugar Balance</p>
                </div>
              </div>
            </div>

            {/* Showcase Image inside Card */}
            <div className="relative w-full h-56 sm:h-64 mt-4 rounded-2xl overflow-hidden flex items-center justify-center z-10 bg-white/5 border border-white/10">
              <Image
                src="/images/products/hikmo-lifestyle-couple.png"
                alt="Live a Healthier Life with Hikmo Sugar & Madhumeh Daman"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column: "The Power of Natural Ingredients" Checklist */}
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
              The Power of Natural Ingredients
            </h2>

            <p className="text-sm sm:text-base text-[#526056] leading-relaxed">
              We reject artificial additives and chemical binders. Every batch of Hikmo Sugar and Madhumeh Daman is powered by traditional bitter and astringent botanicals verified for steady glycemic absorption.
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
                href="/products/hikmo-sugar-madhumeh-daman"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0E2F20] text-white text-sm font-bold shadow-md hover:bg-[#154630] hover:scale-[1.02] transition-all duration-300"
              >
                <span>Explore Hikmo Sugar Combo</span>
                <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
