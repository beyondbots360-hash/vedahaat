"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MessageCircle, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#081B12] text-white pt-16 pb-8 border-t border-white/10 rounded-t-[40px] sm:rounded-t-[56px] mt-12 relative overflow-hidden">
      {/* Background foliage accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-[#4ADE80]">
          <path d="M20,100 Q80,20 180,40 Q150,140 20,100 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Herba Style Newsletter Card with Bottle Cutout */}
        <div className="bg-[#0E2F20] rounded-[32px] p-8 sm:p-12 border border-white/15 shadow-2xl mb-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F59E0B] block">
                Stay In The Wellness Loop
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                Subscribe Our Newsletter
              </h3>
              <p className="text-xs sm:text-sm text-white/70 max-w-lg">
                Receive traditional Ayurvedic wellness tips, dosage advice, and exclusive early access to fresh botanical batches.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white text-xs sm:text-sm placeholder-white/50 focus:outline-none focus:border-[#F59E0B]"
                />
                <button
                  type="button"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#F59E0B] text-[#0E2F20] text-xs sm:text-sm font-extrabold hover:bg-[#EAB308] transition-colors shrink-0"
                >
                  Join Us
                </button>
              </div>
            </div>

            {/* Showcase Cutout */}
            <div className="hidden lg:flex lg:col-span-4 items-center justify-center relative h-52">
              <Image
                src="/images/products/yameny-khalta-combo.jpg"
                alt="VedaHaat Botanical Products"
                width={220}
                height={220}
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* 4 Footer Columns matching Herba reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-14 border-b border-white/10 text-left">
          {/* Col 1: Brand & Logo */}
          <div className="space-y-4">
            <div className="relative h-14 w-48 bg-white/95 rounded-2xl px-3 py-1.5 shadow-md">
              <Image
                src="/images/logo.png"
                alt="VedaHaat Logo"
                fill
                className="object-contain p-1"
              />
            </div>
            <p className="text-xs text-white/70 leading-relaxed max-w-sm">
              Authentic Indian botanical and Ayurvedic health formulations rooted in classical treatises and crafted for modern everyday wellness.
            </p>
            <div className="pt-2">
              <a
                href="https://wa.me/918929515262"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#F59E0B] hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Consultant</span>
              </a>
            </div>
          </div>

          {/* Col 2: Products */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#F59E0B] mb-4">
              Formulations
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75">
              <li>
                <Link href="/products/yameny-khalta" className="hover:text-white transition-colors">
                  4G Avleh Yameny Khalta
                </Link>
              </li>
              <li>
                <Link href="/products/hikmo-sugar-madhumeh-daman" className="hover:text-white transition-colors">
                  Hikmo Sugar & Madhumeh Daman Powder
                </Link>
              </li>
              <li>
                <Link href="/products/yameny-khalta" className="hover:text-white transition-colors">
                  Included: Tila Josh Jawani (15ml)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#F59E0B] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#botanicals" className="hover:text-white transition-colors">
                  Botanicals
                </Link>
              </li>
              <li>
                <Link href="/#faqs" className="hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/admin/login" className="hover:text-white transition-colors">
                  Admin Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Fulfillment */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#F59E0B] mb-4">
              Support & Delivery
            </h4>
            <ul className="space-y-3 text-xs text-white/75">
              <li className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                <a href="tel:+918929515262" className="hover:text-white font-semibold">
                  +91 89295 15262
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                <a href="mailto:support@vedahaat.in" className="hover:text-white">
                  support@vedahaat.in
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                <span>Pan-India Air Express Delivery</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Rights Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} VedaHaat. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
