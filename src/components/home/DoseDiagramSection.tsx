"use client";

import Image from "next/image";
import { Sparkles, Leaf } from "lucide-react";
import { motion } from "framer-motion";

const NODES = [
  {
    title: "Yemeni Sidr Honey",
    subtitle: "Cellular Ojas & Bioactive Antioxidants",
    position: "top-left",
  },
  {
    title: "Ashwagandha KSM-66",
    subtitle: "Premier Adaptogen & Cortisol Balance",
    position: "top-right",
  },
  {
    title: "Shuddha Shilajit",
    subtitle: "80+ Fulvic Trace Minerals & Tissue Tone",
    position: "mid-left",
  },
  {
    title: "Triphala Extract",
    subtitle: "Gentle Colon Detox & Agni Stimulator",
    position: "mid-right",
  },
  {
    title: "Swarna Bhasma 24K",
    subtitle: "Calcined Micro-Gold for Vitality",
    position: "bottom-left",
  },
  {
    title: "Safed Musli Extract",
    subtitle: "Tissue Rejuvenation & Muscle Vigor",
    position: "bottom-right",
  },
];

export default function DoseDiagramSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#091F15] text-white relative overflow-hidden rounded-[40px] sm:rounded-[56px] my-10 max-w-7xl mx-auto px-4 sm:px-8 shadow-2xl">
      {/* Background Watermark Lettering as seen in Herba */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-5">
        <span className="text-[18vw] font-black tracking-widest text-white">VEDAHAAT</span>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Section Pill and Header */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#F59E0B] text-xs font-bold uppercase tracking-wider mb-4">
          <Leaf className="w-3.5 h-3.5 fill-current" />
          <span>Complete Botanical Spectrum</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight mb-4">
          Nature Inside Every Dose
        </h2>
        <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-16">
          Six foundational classical botanicals unified to restore physical stamina, mental clarity, and internal digestive harmony.
        </p>

        {/* 6-Node Circular Callout Diagram with Central Bottle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left 3 Nodes */}
          <div className="lg:col-span-4 space-y-8 sm:space-y-12 text-center lg:text-right">
            {NODES.filter((n) => n.position.includes("left")).map((node) => (
              <motion.div
                key={node.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#F59E0B]/50 transition-colors backdrop-blur-xs"
              >
                <div className="flex items-center justify-center lg:justify-end gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  <h4 className="text-base font-bold text-white">{node.title}</h4>
                </div>
                <p className="text-xs text-white/70">{node.subtitle}</p>
              </motion.div>
            ))}
          </div>

          {/* Center Bottle Showcase */}
          <div className="lg:col-span-4 relative flex items-center justify-center py-6">
            <div className="relative w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-radial from-[#1A5338] to-transparent p-4 flex items-center justify-center">
              <Image
                src="/images/products/yameny-khalta-combo.jpg"
                alt="Central Botanical Formulation"
                width={320}
                height={320}
                className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right 3 Nodes */}
          <div className="lg:col-span-4 space-y-8 sm:space-y-12 text-center lg:text-left">
            {NODES.filter((n) => n.position.includes("right")).map((node) => (
              <motion.div
                key={node.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#F59E0B]/50 transition-colors backdrop-blur-xs"
              >
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  <h4 className="text-base font-bold text-white">{node.title}</h4>
                </div>
                <p className="text-xs text-white/70">{node.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
