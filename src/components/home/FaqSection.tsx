"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, MessageCircle, Sparkles, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "Is Tila Josh Jawani (15ml) really included free with 4G Avleh Yameny Khalta?",
    a: "Yes! Every single jar of 4G Avleh Yameny Khalta ordered through VedaHaat includes a full-size complimentary 15ml bottle of Tila Josh Jawani Ayurvedic Vitality Oil at zero additional cost.",
  },
  {
    q: "How do 4G Avleh and Tila Josh Jawani work together?",
    a: "They form a complete synergistic routine: 4G Avleh delivers internal vitality through Sidr honey and classical Rasayana herbs, while Tila Josh Jawani is massaged externally to ease muscular fatigue and support localized circulation.",
  },
  {
    q: "How does Hikmo Sugar & Madhumeh Daman Powder support healthy blood sugar?",
    a: "It harnesses classical Tikta (bitter) and Kashaya (astringent) botanicals—including pure Amla, Jamun seed, Gurmar, and Vijaysar—to help prevent post-meal glucose spikes, support natural insulin sensitivity, and ease frequent urination (polyurea).",
  },
  {
    q: "Can I take Hikmo Sugar & Madhumeh Daman Powder alongside regular medicines?",
    a: "Yes. Simply maintain a 45-60 minute gap between taking the Ayurvedic powder and your regular doctor-prescribed medications. Always monitor your blood sugar routinely.",
  },
  {
    q: "How are the products packaged for shipping?",
    a: "All orders are dispatched in discreet, plain, tamper-evident courier boxes with zero sensitive product naming on the exterior shipping label for total privacy.",
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 sm:py-28 bg-[#FBF9F4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Herba "Everything You Need to Know" + Support Card */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF2ED] text-[#0E2F20] text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Answers & Support</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif text-[#0E2F20] tracking-tight leading-tight">
              Everything You Need to Know
            </h2>

            <p className="text-sm text-[#526056] leading-relaxed">
              Find answers regarding our formulation sourcing, daily dosage routines, discreet shipping, and complimentary bundle offers.
            </p>

            {/* Dark Promo Box as shown in Herba Reference */}
            <div className="bg-[#0E2F20] text-white rounded-3xl p-6 sm:p-7 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-[#F59E0B]">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Need Personalized Help?</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                Our Ayurvedic specialists are available on WhatsApp to answer your lifestyle and dosage questions.
              </p>
              <a
                href="https://wa.me/918881990439"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F59E0B] text-[#0E2F20] text-xs font-bold hover:bg-[#EAB308] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with an Expert</span>
              </a>
            </div>
          </div>

          {/* Right Column: Herba Rounded Light Sage Accordion Pills */}
          <div className="lg:col-span-7 space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={faq.q}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-[#EBF2ED] border-[#D7E5DC] shadow-sm"
                      : "bg-white border-[#EAE2D2] hover:border-[#D7E5DC]"
                  }`}
                >
                  <button
                    onClick={() => toggle(idx)}
                    type="button"
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-bold text-[#0E2F20]"
                  >
                    <span>{faq.q}</span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? "bg-[#0E2F20] text-white rotate-180" : "bg-[#EBF2ED] text-[#0E2F20]"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#526056] leading-relaxed border-t border-[#D7E5DC]/60">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
