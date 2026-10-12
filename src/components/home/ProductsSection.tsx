"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Gift, Sparkles, Star } from "lucide-react";
import { PRODUCTS, ProductDetail } from "@/data/products";
import { motion } from "framer-motion";

interface RawDbProduct {
  slug: string;
  price: number;
  original_price: number;
  description: string;
  in_stock: boolean;
}

export default function ProductsSection() {
  const [products, setProducts] = useState<ProductDetail[]>(PRODUCTS);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        if (data?.success && Array.isArray(data.products)) {
          setProducts((prev) =>
            prev.map((staticItem) => {
              const dbItem = data.products.find((p: RawDbProduct) => p.slug === staticItem.slug);
              if (dbItem) {
                const discount =
                  dbItem.original_price > dbItem.price
                    ? `Save ${Math.round(((dbItem.original_price - dbItem.price) / dbItem.original_price) * 100)}%`
                    : "";
                return {
                  ...staticItem,
                  price: `₹${Number(dbItem.price).toLocaleString("en-IN")}`,
                  originalPrice: `₹${Number(dbItem.original_price).toLocaleString("en-IN")}`,
                  discount,
                  description: dbItem.description || staticItem.description,
                  inStock: dbItem.in_stock !== undefined ? Boolean(dbItem.in_stock) : staticItem.inStock,
                };
              }
              return staticItem;
            })
          );
        }
      })
      .catch((err) => console.error("Failed to fetch live products:", err));
  }, []);

  return (
    <section id="products" className="py-20 sm:py-28 bg-[#FBF9F4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading matching Herba "Wellness, Naturally Elevated" */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF2ED] text-[#0E2F20] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>Targeted Botanical Systems</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-[#0E2F20] tracking-tight">
            Wellness, Naturally Elevated
          </h2>
          <p className="text-sm text-[#526056] mt-2">
            Targeted herbal formulations designed for vitality, digestion, and glycemic stability.
          </p>
        </div>

        {/* 3 Herba-style Light Sage/Mint Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => {
            const isYameny = product.slug === "yameny-khalta";
            const isOutOfStock = product.inStock === false;

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={isOutOfStock ? {} : { y: -8 }}
                className="bg-[#EBF2ED] rounded-[32px] p-6 sm:p-7 border border-[#D7E5DC] shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative group"
              >
                {/* Special Combo Badge */}
                {isYameny && !isOutOfStock && (
                  <div className="absolute top-5 right-5 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F59E0B] text-[#0E2F20] text-[11px] font-bold shadow-sm uppercase tracking-wider">
                      <Gift className="w-3.5 h-3.5" />
                      <span>FREE Lava 31 Gold</span>
                    </span>
                  </div>
                )}

                <div>
                  {/* Top Category and Title */}
                  <div className="text-left mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#A98028] block mb-1">
                      {product.category}
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-[#0E2F20] tracking-tight">
                      {product.name}
                    </h3>
                  </div>

                  {/* Clean Framed Image Container */}
                  <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden bg-white/80 border border-[#D7E5DC] mb-6 flex items-center justify-center p-3">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className={`object-contain p-2 transition-transform duration-500 ${
                        isOutOfStock ? "opacity-60 grayscale-[30%]" : "group-hover:scale-105"
                      }`}
                    />
                  </div>

                  {/* Rating and Short Description */}
                  <div className="text-left mb-6">
                    <div className="flex items-center gap-1.5 mb-2">
                      <div className="flex text-[#F59E0B]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-xs font-bold text-[#0E2F20]">{product.rating}</span>
                      <span className="text-xs text-[#7E8D82]">({product.reviewCount}+)</span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#526056] line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Herba Action Pill Bar: Price + Order Button */}
                <div className="pt-4 border-t border-[#D7E5DC]/80 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] text-[#7E8D82] uppercase font-bold block">Price</span>
                    <span className="text-xl font-bold text-[#0E2F20]">{product.price}</span>
                  </div>

                  {isOutOfStock ? (
                    <button
                      disabled
                      className="px-5 py-2.5 rounded-full bg-[#D7E5DC] text-[#7E8D82] text-xs font-bold cursor-not-allowed"
                    >
                      Sold Out
                    </button>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/products/${product.slug}`}
                        className="px-4 py-2.5 rounded-full bg-white text-[#0E2F20] text-xs font-bold hover:bg-[#F2ECE1] transition-colors shadow-2xs"
                      >
                        Details
                      </Link>
                      <Link
                        href={`/checkout?product=${product.slug}&qty=1`}
                        className="px-5 py-2.5 rounded-full bg-[#0E2F20] text-white text-xs font-bold hover:bg-[#F59E0B] hover:text-[#0E2F20] shadow-sm transition-all duration-200"
                      >
                        Buy Now
                      </Link>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
