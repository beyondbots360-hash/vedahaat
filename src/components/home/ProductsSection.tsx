"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Gift, Sparkles, Star, ShieldCheck } from "lucide-react";
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
    <section id="products" className="py-20 sm:py-24 bg-[#FBF9F4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F0EA] border border-[#CFDFD3] text-[#1B4332] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C59A3F]" />
            <span>Targeted Botanical Systems</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1B4332] tracking-tight">
            Our Flagship Formulations
          </h2>
          <p className="text-xs sm:text-sm font-semibold tracking-[0.16em] text-[#7E8D82] uppercase mt-2">
            Three Pure Ayurvedic Systems for Vitality, Digestion & Glucose Harmony
          </p>
        </div>

        {/* 3 Core Product Cards Grid */}
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
                className={`group bg-white rounded-3xl p-6 sm:p-7 border border-[#EAE2D2] shadow-sm hover:shadow-2xl hover:border-[#C59A3F]/50 transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
                  isOutOfStock ? "border-amber-200/80" : ""
                }`}
              >
                {/* Out of Stock Badge */}
                {isOutOfStock && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600 text-white text-[11px] font-bold shadow-sm uppercase tracking-wider">
                      Out of Stock
                    </span>
                  </div>
                )}

                {/* Special Combo Badge for Yameny Khalta */}
                {isYameny && !isOutOfStock && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#C59A3F] to-[#B3872E] text-white text-[11px] font-bold shadow-sm uppercase tracking-wider">
                      <Gift className="w-3.5 h-3.5" />
                      <span>FREE Lava 31 Gold</span>
                    </span>
                  </div>
                )}

                <div>
                  {/* Image Container with Subtle Combo Display */}
                  <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden bg-[#FBF9F4] border border-[#EAE2D2] mb-6 flex items-center justify-center p-3">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className={`object-contain p-2 transition-transform duration-500 ${
                        isOutOfStock ? "opacity-60 grayscale-[30%]" : "group-hover:scale-105"
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div className="text-center px-1">
                    <div className="mb-2 flex items-center justify-center gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#A98028]">
                        {product.category}
                      </span>
                      {isOutOfStock && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded-full">
                          Sold Out
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-[#1B4332] tracking-tight mb-2">
                      {product.name}
                    </h3>

                    {/* Star Rating Strip */}
                    <div className="flex items-center justify-center gap-1.5 mb-3">
                      <div className="flex text-[#C59A3F]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-xs font-bold text-[#1B4332]">{product.rating}</span>
                      <span className="text-xs text-[#7E8D82]">({product.reviewCount}+ reviews)</span>
                    </div>

                    {isYameny && (
                      <div className="inline-flex items-center gap-1.5 text-xs text-[#1B4332] font-semibold bg-[#E8F0EA] px-3 py-1 rounded-full border border-[#CFDFD3] mb-3">
                        <Sparkles className="w-3.5 h-3.5 text-[#C59A3F]" />
                        <span>Includes Full-Size Lava 31 Gold Oil (Worth ₹1,899) FREE</span>
                      </div>
                    )}

                    <p className="text-sm text-[#526056] leading-relaxed line-clamp-3 mb-6 font-normal">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Price and Action Buttons */}
                <div className="pt-4 border-t border-[#F2ECE1]">
                  <div className="flex items-center justify-between mb-4 px-1">
                    <div>
                      <span className="text-xs text-[#7E8D82] block font-medium">Special Online Price</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-serif font-bold text-[#1B4332]">
                          {product.price}
                        </span>
                        <span className="text-xs text-[#7E8D82] line-through">
                          {product.originalPrice}
                        </span>
                      </div>
                    </div>
                    {product.discount && !isOutOfStock && (
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#E8F0EA] text-[#2D6A4F] border border-[#CFDFD3]">
                        {product.discount}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
                    <Link
                      href={`/products/${product.slug}`}
                      className="w-full sm:w-1/2 inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-full bg-[#FBF9F4] border border-[#E5DCBE] text-[#1B4332] text-xs font-bold hover:bg-[#F2ECE1] transition-all duration-300"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C59A3F]" />
                    </Link>

                    {isOutOfStock ? (
                      <button
                        type="button"
                        disabled
                        className="w-full sm:w-1/2 inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-full bg-[#EAE3D4] text-[#7E8D82] text-xs font-bold cursor-not-allowed border border-[#E5DCBE]"
                      >
                        <span>Out of Stock</span>
                      </button>
                    ) : (
                      <Link
                        href={`/checkout?product=${product.slug}&qty=1`}
                        className="w-full sm:w-1/2 inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-full bg-[#1B4332] text-white text-xs font-bold shadow-sm hover:bg-[#132E22] hover:shadow-md transition-all duration-300 group/btn"
                      >
                        <span>Order Now • {product.price}</span>
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
