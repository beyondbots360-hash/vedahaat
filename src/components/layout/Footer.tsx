import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MessageCircle, MapPin, Leaf, ShieldCheck, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#132E22] text-[#F4EFE6] pt-16 pb-8 border-t border-[#1B4332]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter / Trust Strip */}
        <div className="pb-12 mb-12 border-b border-[#254A39] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C59A3F] block mb-1">
              Join the VedaHaat Circle
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              Traditional Indian Wellness In Your Inbox
            </h3>
            <p className="text-xs sm:text-sm text-[#A5B5AB] mt-1">
              Receive classical Ayurvedic routines, dietary guidance, and exclusive batch discounts.
            </p>
          </div>
          <div className="lg:col-span-5 flex items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 rounded-full bg-[#1B4332] border border-[#2D6A4F] text-white text-xs sm:text-sm placeholder-[#7E8D82] focus:outline-none focus:border-[#C59A3F]"
            />
            <button
              type="button"
              className="px-6 py-3 rounded-full bg-[#C59A3F] text-[#132E22] text-xs sm:text-sm font-bold hover:bg-[#D4AF37] transition-colors shrink-0"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* 4 Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-14 border-b border-[#254A39]">
          {/* Col 1: Brand */}
          <div className="space-y-5">
            <div className="relative h-16 w-52 bg-white/95 rounded-2xl p-2 border border-[#C59A3F]/30">
              <Image
                src="/images/logo.png"
                alt="VedaHaat Logo"
                fill
                className="object-contain p-1"
              />
            </div>
            <p className="text-xs sm:text-sm text-[#A5B5AB] leading-relaxed max-w-sm">
              Your trusted destination for carefully selected Ayurvedic and herbal formulations inspired by ancient classical Indian treatises.
            </p>
            {/* WhatsApp Quick Trigger */}
            <div className="pt-1">
              <a
                href="https://wa.me/918929515262"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#C59A3F] hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Chat with Ayurvedic Consultant</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-base font-serif font-bold text-[#C59A3F] tracking-wide mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <Link href="/" className="text-[#A5B5AB] hover:text-white transition-colors font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#products" className="text-[#A5B5AB] hover:text-white transition-colors font-medium">
                  Our Formulations
                </Link>
              </li>
              <li>
                <Link href="/#ingredients" className="text-[#A5B5AB] hover:text-white transition-colors font-medium">
                  Botanical Herbs
                </Link>
              </li>
              <li>
                <Link href="/#why-choose" className="text-[#A5B5AB] hover:text-white transition-colors font-medium">
                  Our Principles
                </Link>
              </li>
              <li>
                <Link href="/#footer" className="text-[#A5B5AB] hover:text-white transition-colors font-medium">
                  Contact & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Us */}
          <div>
            <h3 className="text-base font-serif font-bold text-[#C59A3F] tracking-wide mb-5">
              Customer Support
            </h3>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              <li className="flex items-center gap-3 text-[#A5B5AB]">
                <Phone className="w-4 h-4 text-[#C59A3F] shrink-0" />
                <a href="tel:+918929515262" className="hover:text-white transition-colors font-medium">
                  +91 89295 15262
                </a>
              </li>
              <li className="flex items-center gap-3 text-[#A5B5AB]">
                <Mail className="w-4 h-4 text-[#C59A3F] shrink-0" />
                <a href="mailto:support@vedahaat.in" className="hover:text-white transition-colors">
                  support@vedahaat.in
                </a>
              </li>
              <li className="flex items-center gap-3 text-[#A5B5AB]">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href="https://wa.me/918929515262"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors font-medium"
                >
                  WhatsApp: +91 89295 15262
                </a>
              </li>
              <li className="flex items-center gap-3 text-[#A5B5AB]">
                <MapPin className="w-4 h-4 text-[#C59A3F] shrink-0" />
                <span>Pan-India Fulfillment</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Our Heritage Promise */}
          <div>
            <h3 className="text-base font-serif font-bold text-[#C59A3F] tracking-wide mb-5">
              Our Purity Pledge
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#1B4332] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-[#C59A3F]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white">
                    100% Shuddha Formulations
                  </h4>
                  <p className="text-[11px] text-[#A5B5AB]">Zero adulterants or artificial binders</p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#254A39]">
                <p className="text-base font-bold text-white tracking-wide">
                  स्वस्थ भारत, बेहतर कल
                </p>
                <p className="text-[10px] font-semibold text-[#C59A3F] uppercase tracking-wider mt-0.5">
                  A Healthier India, A Brighter Tomorrow
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7E8D82]">
          <p>© {new Date().getFullYear()} VedaHaat. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[#A5B5AB]">
            <Link href="/" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
