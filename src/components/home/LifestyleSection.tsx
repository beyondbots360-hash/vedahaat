"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, ShieldCheck, Sparkles, Star } from "lucide-react";
import { motion } from "framer-motion";

const STATS = [
  { label: "Natural Bioavailability", percentage: "98%" },
  { label: "Customer Vitality Satisfaction", percentage: "95%" },
  { label: "Active Herb Purity", percentage: "100%" },
];

export default function LifestyleSection() {
  return (
    <section id="lifestyle" className="py-20 sm:py-28 bg-[#FBF9F4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Lifestyle Person Visual with Leaf accents */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative flex items-center justify-center"
          >
            {/* Curved frame card */}
            <div className="relative w-full max-w-md aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white bg-[#EBF2ED]">
              <Image
                src="/images/hero/hero-products.png"
                alt="Crafted for Natural Living"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Review Card */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-white rounded-2xl p-4 shadow-xl border border-[#EAE2D2] flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#0E2F20] text-[#F59E0B] flex items-center justify-center font-bold text-lg">
                4.9★
              </div>
              <div>
                <p className="text-xs font-bold text-[#0E2F20]">Proven Vitality</p>
                <p className="text-[10px] text-[#7E8D82]">Based on 880+ Verified Users</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Herba "Crafted for Natural Living" with Progress Bars */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Stars row */}
            <div className="flex items-center gap-1.5 text-[#F59E0B]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
              <span className="text-xs font-bold text-[#0E2F20] ml-2">5-Star Formulation Standards</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif text-[#0E2F20] tracking-tight leading-tight">
              Crafted for Natural Living
            </h2>

            <p className="text-sm sm:text-base text-[#526056] leading-relaxed">
              We combine the deep restorative power of traditional Ayurvedic Rasayana science with stringent modern extraction techniques to ensure each dose easily assimilates into your body.
            </p>

            {/* Feature Icon Badges Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-white rounded-2xl p-3.5 border border-[#EAE2D2] shadow-2xs">
                <div className="w-9 h-9 rounded-full bg-[#EBF2ED] text-[#0E2F20] flex items-center justify-center shrink-0">
                  <Leaf className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0E2F20]">Cold Processed</h4>
                  <p className="text-[11px] text-[#7E8D82]">Preserves active raw honey enzymes</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white rounded-2xl p-3.5 border border-[#EAE2D2] shadow-2xs">
                <div className="w-9 h-9 rounded-full bg-[#EBF2ED] text-[#0E2F20] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0E2F20]">Heavy Metal Free</h4>
                  <p className="text-[11px] text-[#7E8D82]">Rigorously tested by independent labs</p>
                </div>
              </div>
            </div>

            {/* Percentage Progress Bars as seen in Herba */}
            <div className="space-y-4 pt-4 border-t border-[#EAE2D2]">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="flex justify-between text-xs font-bold text-[#0E2F20] mb-1.5">
                    <span>{stat.label}</span>
                    <span className="text-[#F59E0B] font-extrabold">{stat.percentage}</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-[#EBF2ED] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: stat.percentage }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full rounded-full bg-[#0E2F20]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
