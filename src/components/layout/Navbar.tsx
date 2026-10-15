"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { SOCIAL_LINKS, InstagramIcon, FacebookIcon } from "@/components/icons/SocialIcons";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0E2F20] text-white border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-22">
          {/* Logo with clean white backdrop badge */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-14 w-44 sm:w-48 bg-white/95 rounded-2xl px-3 py-1.5 shadow-md transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src="/images/logo.png"
                alt="VedaHaat - Tradition. Wellness. Everyday."
                fill
                priority
                className="object-contain p-1"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links (Herba style) */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link
              href="/"
              className="text-[#F59E0B] font-semibold transition-colors flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
              Home
            </Link>
            <Link
              href="/#products"
              className="text-white/80 hover:text-white transition-colors"
            >
              Products
            </Link>
            <Link
              href="/#botanicals"
              className="text-white/80 hover:text-white transition-colors"
            >
              Botanicals
            </Link>
            <Link
              href="/#faqs"
              className="text-white/80 hover:text-white transition-colors"
            >
              FAQs
            </Link>
          </nav>

          {/* Right Action Button Strip */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+918881990439"
              className="inline-flex items-center gap-2 text-xs font-semibold text-white/90 hover:text-[#F59E0B] transition-colors bg-white/10 px-3.5 py-2 rounded-full border border-white/15"
            >
              <Phone className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>+91 88819 90439</span>
            </a>
            {/* Bright Yellow Herba CTA Pill */}
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#F59E0B] text-[#0E2F20] text-sm font-bold shadow-md hover:bg-[#EAB308] hover:shadow-lg transition-all duration-300 hover:scale-[1.03]"
            >
              <span>Shop Now</span>
              <ArrowRight className="w-4 h-4 text-[#0E2F20]" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-xl text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A2217] border-b border-white/10 px-6 pt-4 pb-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3 text-sm">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white font-bold py-1 border-b border-white/10"
            >
              Home
            </Link>
            <Link
              href="/#products"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/80 hover:text-white py-1 border-b border-white/10"
            >
              Products
            </Link>
            <Link
              href="/#botanicals"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/80 hover:text-white py-1 border-b border-white/10"
            >
              Botanicals
            </Link>
            <Link
              href="/#faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/80 hover:text-white py-1 border-b border-white/10"
            >
              FAQs
            </Link>
            <a
              href="tel:+918881990439"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 text-white/90 py-1"
            >
              <Phone className="w-4 h-4 text-[#F59E0B]" />
              <span>Call: +91 88819 90439</span>
            </a>
          </nav>
          <div className="pt-2 space-y-4">
            <Link
              href="/#products"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#F59E0B] text-[#0E2F20] text-sm font-bold shadow-md"
            >
              <span>Shop Now</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>

            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-white/70">
              <span className="font-semibold text-white/80">Follow VedaHaat:</span>
              <div className="flex items-center gap-2">
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Follow on Instagram"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#E1306C] hover:text-white flex items-center justify-center text-white/80 transition-all duration-300"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Follow on Facebook"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#1877F2] hover:text-white flex items-center justify-center text-white/80 transition-all duration-300"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
