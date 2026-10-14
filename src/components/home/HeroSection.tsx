"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0E2F20] text-white pt-10 pb-20 sm:pb-28 lg:pt-16 lg:pb-32 rounded-b-[40px] sm:rounded-b-[56px] shadow-2xl">
      {/* Background Organic Leaf Watermark Foliage */}
      <div className="absolute inset-0 pointer-events-none opacity-15 mix-blend-screen overflow-hidden">
        <svg viewBox="0 0 1000 1000" className="w-full h-full fill-[#4ADE80]">
          <path d="M100,500 Q300,100 800,200 Q700,700 200,800 Z" />
          <path d="M200,300 Q600,200 900,600 Q600,900 100,600 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Herba Headline & Dual Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Small Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#F59E0B] text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
              <Leaf className="w-3.5 h-3.5 fill-current" />
              <span>100% Organic Botanical Science</span>
            </div>

            {/* Massive Bold Headline matching Reference Image */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-extrabold tracking-tight leading-[1.08] text-white">
              Nature, <br />
              <span className="text-[#F59E0B]">Perfected Daily</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-lg font-normal">
              Experience authentic Ayurvedic and herbal formulations crafted from wild Sidr honey, Himalayan Shilajit, and classical Rasayana herbs for sustained vitality.
            </p>

            {/* Dual Buttons matching Herba Reference */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Link
                href="#products"
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#F59E0B] text-[#0E2F20] text-base font-extrabold shadow-lg hover:bg-[#EAB308] hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
              >
                <span>Explore Now</span>
                <ArrowRight className="w-4 h-4 text-[#0E2F20] group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#botanicals"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white border border-white/25 text-base font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur-xs"
              >
                <span>Discover Botanicals</span>
              </Link>
            </div>

            {/* Trust Mini Badges Strip */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-white/75">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
                <span>Doctor Formulated</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#F59E0B]" />
                <span>Lab Verified Purity</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Leaf className="w-4 h-4 text-[#F59E0B]" />
                <span>Zero Preservatives</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Banner Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6 relative flex items-center justify-center"
          >
            {/* Glowing Aura behind banner */}
            <div className="absolute w-80 sm:w-[480px] h-64 sm:h-80 rounded-full bg-[#1A5338]/90 blur-3xl -z-10" />

            {/* Banner Showcase Frame */}
            <div className="relative w-full max-w-lg lg:max-w-xl rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-black/30 group">
              <Image
                src="/images/hero/hero-banner.jpg"
                alt="VedaHaat 4G Avleh Yameny Khalta & Tila Josh Jawani"
                width={800}
                height={550}
                priority
                className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
