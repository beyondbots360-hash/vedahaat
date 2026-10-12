"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, ShieldCheck, Sparkles, CheckCircle, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#FBF9F4] pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Subtle Background Botanical Leaves */}
      <div className="absolute top-0 left-0 w-72 h-72 pointer-events-none opacity-30 mix-blend-multiply -translate-x-12 -translate-y-12">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-[#2D6A4F]/25">
          <path d="M40,120 Q80,20 160,30 Q140,110 40,120 Z" />
          <path d="M45,115 Q95,65 155,35" stroke="#1B4332" strokeWidth="2" fill="none" opacity="0.4" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Herba Style Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F0EA] border border-[#CFDFD3] text-[#1B4332] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#C59A3F]" />
              <span>Sacred Herbal Science • Modern Purity</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight leading-[1.12]">
              <span className="text-[#1B4332] block font-normal">
                Nourish Your Body
              </span>
              <span className="text-[#A98028] block font-normal mt-1">
                With Ancient Botanical Wisdom.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[#526056] leading-relaxed max-w-lg font-normal">
              Pure Ayurvedic and herbal formulations crafted from wildcrafted Sidr Honey, Himalayan Shilajit, and classical Rasayana herbs for sustained everyday wellness.
            </p>

            {/* Dual CTA Button Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="#products"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1B4332] text-white text-base font-semibold shadow-md hover:bg-[#132E22] hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                <span>Explore Formulations</span>
                <ArrowRight className="w-4 h-4 text-[#C59A3F] group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#ingredients"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white text-[#1B4332] border border-[#E5DCBE] text-base font-semibold shadow-2xs hover:bg-[#F4EFE6] transition-all duration-300"
              >
                <span>View Botanical Herbs</span>
              </Link>
            </div>

            {/* Herba Floating Trust Badges Strip */}
            <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5DCBE] shadow-2xs text-xs font-semibold text-[#1B4332]">
                <Leaf className="w-3.5 h-3.5 text-[#2D6A4F]" />
                <span>100% Wildcrafted</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5DCBE] shadow-2xs text-xs font-semibold text-[#1B4332]">
                <Award className="w-3.5 h-3.5 text-[#C59A3F]" />
                <span>Doctor Approved</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5DCBE] shadow-2xs text-xs font-semibold text-[#1B4332]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2D6A4F]" />
                <span>Zero Preservatives</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6 relative"
          >
            {/* Script Tag Calligraphy Accent */}
            <div className="absolute -top-6 sm:-top-8 right-4 sm:right-10 z-20 text-right pointer-events-none">
              <span className="font-serif italic text-xl sm:text-2xl text-[#1B4332] tracking-wide block drop-shadow-xs">
                Sacred Purity
              </span>
              <span className="font-serif italic text-base sm:text-lg text-[#526056] -mt-1 block">
                of Indian Ayurveda
              </span>
              <span className="font-serif italic text-base sm:text-lg text-[#A98028] -mt-1 block">
                in Every Home
              </span>
            </div>

            {/* Main Product Showcase Card */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden shadow-2xl border border-[#EAE2D2] bg-white group">
              <Image
                src="/images/hero/hero-products.png"
                alt="VedaHaat Flagship Ayurvedic Collection - Yameny Khalta, Lava 31 Gold, Shivshakti Churna"
                fill
                priority
                className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              {/* Subtle ambient light gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1B4332]/5 via-transparent to-[#C59A3F]/10 pointer-events-none" />
            </div>

            {/* Floating Herba Botanical Stamp */}
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 pointer-events-none z-20"
            >
              <div className="bg-white shadow-xl border border-[#E5DCBE] rounded-2xl px-4 py-2.5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E8F0EA] flex items-center justify-center shrink-0">
                  <Leaf className="w-5 h-5 text-[#2D6A4F]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1B4332]">Authentic Formulations</p>
                  <p className="text-[10px] text-[#7E8D82]">Tested for Purity</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
