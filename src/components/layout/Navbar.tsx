"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Leaf, Menu, X, ArrowRight, Phone, ShieldCheck, Sparkles } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* 1. Herba-style Top Announcement Bar */}
      <div className="bg-[#132E22] text-[#F4EFE6] text-[11px] sm:text-xs py-2 px-4 border-b border-[#1B4332]/60">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-medium">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C59A3F] animate-pulse" />
            <span className="tracking-wide">
              🌿 100% Authentic Indian Botanical Formulations • Free Pan-India Express Delivery
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[#D8CFBC] text-[11px]">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-[#C59A3F]" />
              Doctor Formulated
            </span>
            <span>•</span>
            <a href="tel:+918929515262" className="hover:text-white transition-colors">
              Support: +91 89295 15262
            </a>
          </div>
        </div>
      </div>

      {/* 2. Floating Frosted Glass Navbar */}
      <header className="sticky top-0 z-50 bg-[#FBF9F4]/90 backdrop-blur-md border-b border-[#EAE2D2] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-22">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-16 w-48 sm:w-52 transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src="/images/logo.png"
                  alt="VedaHaat Logo - Tradition. Wellness. Everyday."
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-9">
              <Link
                href="/"
                className="text-sm font-semibold text-[#1B4332] relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#1B4332] after:rounded-full"
              >
                Home
              </Link>
              <Link
                href="/#products"
                className="text-sm font-medium text-[#526056] hover:text-[#1B4332] transition-colors"
              >
                Our Formulations
              </Link>
              <Link
                href="/#ingredients"
                className="text-sm font-medium text-[#526056] hover:text-[#1B4332] transition-colors"
              >
                Botanicals
              </Link>
              <Link
                href="/#why-choose"
                className="text-sm font-medium text-[#526056] hover:text-[#1B4332] transition-colors"
              >
                Our Principles
              </Link>
              <Link
                href="/#footer"
                className="text-sm font-medium text-[#526056] hover:text-[#1B4332] transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Right Action Button & Contact */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+918929515262"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#1B4332] hover:text-[#A98028] transition-colors bg-white px-3.5 py-2 rounded-full border border-[#E5DCBE] shadow-2xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#2D6A4F]" />
                <span>+91 89295 15262</span>
              </a>
              <Link
                href="/#products"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1B4332] text-white text-sm font-semibold shadow-md hover:bg-[#132E22] hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                <Leaf className="w-4 h-4 text-[#C59A3F]" />
                <span>Shop Now</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                type="button"
                className="p-2 rounded-xl text-[#1B4332] hover:bg-[#F2ECE1] transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FBF9F4] border-b border-[#EAE2D2] px-6 pt-4 pb-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-[#1B4332] py-1 border-b border-[#EAE2D2]"
              >
                Home
              </Link>
              <Link
                href="/#products"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#526056] hover:text-[#1B4332] py-1 border-b border-[#EAE2D2]"
              >
                Our Formulations
              </Link>
              <Link
                href="/#ingredients"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#526056] hover:text-[#1B4332] py-1 border-b border-[#EAE2D2]"
              >
                Botanicals
              </Link>
              <Link
                href="/#why-choose"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#526056] hover:text-[#1B4332] py-1 border-b border-[#EAE2D2]"
              >
                Our Principles
              </Link>
              <Link
                href="/#footer"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#526056] hover:text-[#1B4332] py-1 border-b border-[#EAE2D2]"
              >
                Contact
              </Link>
              <a
                href="tel:+918929515262"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 text-base font-bold text-[#1B4332] py-1"
              >
                <Phone className="w-4 h-4 text-[#2D6A4F]" />
                <span>Call: +91 89295 15262</span>
              </a>
            </nav>
            <div className="pt-2">
              <Link
                href="/#products"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#1B4332] text-white text-sm font-semibold shadow-md"
              >
                <Leaf className="w-4 h-4 text-[#C59A3F]" />
                <span>Shop Formulations</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
