"use client";

import { useState } from "react";
import Image from "next/image";
import { ProductDetail } from "@/data/products";
import { ShippingData } from "./ShippingForm";
import {
  ShieldCheck,
  Truck,
  Lock,
  Loader2,
  Sparkles,
  MessageCircle,
  AlertCircle,
  CreditCard,
  Banknote,
} from "lucide-react";

interface OrderSummaryCardProps {
  product: ProductDetail;
  quantity: number;
  onQuantityChange: (qty: number) => void;
  onProceedToPay: () => void;
  isLoading: boolean;
  shippingData?: ShippingData;
}

export default function OrderSummaryCard({
  product,
  quantity,
  onQuantityChange,
  onProceedToPay,
  isLoading,
  shippingData,
}: OrderSummaryCardProps) {
  const [paymentMethod, setPaymentMethod] = useState<"online" | "cod">("online");
  const unitPrice = parseInt(product.price.replace(/[^0-9]/g, ""), 10);
  const total = unitPrice * quantity;

  const isOutOfStock = product.inStock === false;

  const customerName = shippingData?.fullName?.trim() || "";
  const customerPhone = shippingData?.phone?.trim() || "";
  const customerAddress = shippingData?.addressLine?.trim() || "";
  const customerCity = shippingData?.city?.trim() || "";
  const customerPincode = shippingData?.pincode?.trim() || "";
  const customerState = shippingData?.state?.trim() || "";

  const hasAddress = customerAddress.length > 0;
  const addressText = hasAddress
    ? `🏠 *Delivery Address:* ${customerAddress}${customerCity ? `, ${customerCity}` : ""}${customerState ? `, ${customerState}` : ""}${customerPincode ? ` - ${customerPincode}` : ""}\n\n`
    : "";

  const codWhatsappMessage = encodeURIComponent(
    `Hello VedaHaat! I want to place a *Cash on Delivery (COD)* order.\n\n` +
    `📦 *Product:* ${product.name}\n` +
    `🔢 *Quantity:* ${quantity}\n` +
    `💰 *Product Amount:* ₹${total.toLocaleString("en-IN")}\n` +
    `⚠️ *Notice:* Cash on delivery charges extra.\n\n` +
    (customerName ? `👤 *Customer Name:* ${customerName}\n` : "") +
    (customerPhone ? `📞 *Phone:* ${customerPhone}\n` : "") +
    addressText +
    `Please confirm my COD order and let me know the total delivery charges.`
  );

  const codWhatsappUrl = `https://wa.me/918881990439?text=${codWhatsappMessage}`;

  return (
    <div className="bg-[#FAF7F0] p-6 sm:p-7 rounded-3xl border border-[#E8E1CE] shadow-md space-y-6 sticky top-28">
      <div className="flex items-center justify-between border-b border-[#E5DFCE] pb-3.5">
        <h2 className="text-lg font-serif font-bold text-[#174A3A]">
          Order Summary
        </h2>
        {isOutOfStock && (
          <span className="text-xs font-bold text-red-700 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full uppercase">
            Out of Stock
          </span>
        )}
      </div>

      {/* Product Snapshot */}
      <div className="flex items-center gap-4">
        <div className="relative w-20 h-20 rounded-2xl bg-white border border-[#E8E1CE] shrink-0 p-2 overflow-hidden flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className={`object-contain p-1.5 ${isOutOfStock ? "opacity-60 grayscale-[30%]" : ""}`}
          />
        </div>

        <div className="min-w-0 flex-grow">
          <h3 className="font-serif font-bold text-base text-[#174A3A] truncate">
            {product.name}
          </h3>
          <p className="text-xs text-[#5C665F] truncate">{product.subtitle}</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="font-serif font-bold text-sm text-[#174A3A]">
              {product.price}
            </span>
            <span className="text-xs text-[#8A958D] line-through">
              {product.originalPrice}
            </span>
            {product.discount && !isOutOfStock && (
              <span className="text-[10px] font-bold text-[#3B7A57] bg-[#EBF2EC] px-2 py-0.5 rounded-full">
                {product.discount}
              </span>
            )}
            {isOutOfStock && (
              <span className="text-[10px] font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded-full border border-red-200">
                Unavailable
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Included Free Gift Line Item for Yameny Khalta */}
      {product.slug === "yameny-khalta" && !isOutOfStock && (
        <div className="p-3 rounded-2xl bg-[#D6A83F]/10 border border-[#D6A83F]/30 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="relative w-10 h-10 rounded-lg bg-white border border-[#D6A83F]/30 overflow-hidden shrink-0">
              <Image
                src="/images/products/yameny-khalta-combo.jpg"
                alt="Free Tila Josh Jawani (15ml)"
                fill
                className="object-contain p-1"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#11382C] bg-[#D6A83F]/30 px-1.5 py-0.2 rounded">
                  Included Free
                </span>
              </div>
              <span className="text-xs font-serif font-bold text-[#174A3A] block">
                Tila Josh Jawani (15ml) ({quantity} {quantity > 1 ? "Bottles" : "Bottle"})
              </span>
            </div>
          </div>
          <div className="text-right shrink-0">
            <span className="text-xs font-bold text-[#2E6B47]">FREE</span>
            <span className="text-[10px] text-[#8A958D] line-through block">₹{1499 * quantity}</span>
          </div>
        </div>
      )}

      {/* Quantity Selector */}
      <div className={`flex items-center justify-between py-3 border-y border-[#E8E1CE] text-sm ${isOutOfStock ? "opacity-50 pointer-events-none" : ""}`}>
        <span className="font-semibold text-[#252A26]">Quantity</span>
        <div className="inline-flex items-center rounded-full border border-[#DCD5C3] bg-white p-1 shadow-2xs">
          <button
            type="button"
            onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
            disabled={quantity <= 1 || isLoading || isOutOfStock}
            className="w-7 h-7 rounded-full flex items-center justify-center text-[#174A3A] hover:bg-[#EFE8D8] font-bold transition-colors disabled:opacity-40"
          >
            -
          </button>
          <span className="w-8 text-center font-bold text-sm text-[#252A26]">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => onQuantityChange(quantity + 1)}
            disabled={isLoading || isOutOfStock}
            className="w-7 h-7 rounded-full flex items-center justify-center text-[#174A3A] hover:bg-[#EFE8D8] font-bold transition-colors disabled:opacity-40"
          >
            +
          </button>
        </div>
      </div>

      {/* Price Calculations */}
      <div className="space-y-2.5 text-xs text-[#5C665F]">
        <div className="flex justify-between">
          <span>Subtotal ({quantity} item{quantity > 1 ? "s" : ""})</span>
          <span className="font-semibold text-[#252A26]">₹{total.toLocaleString("en-IN")}</span>
        </div>
        <div className="flex justify-between">
          <span className="flex items-center gap-1">
            <Truck className="w-3.5 h-3.5 text-[#3B7A57]" />
            <span>Express Delivery Across India</span>
          </span>
          <span className="font-bold text-[#3B7A57] uppercase tracking-wider">FREE</span>
        </div>
        <div className="flex justify-between">
          <span>Taxes & GST (Included)</span>
          <span className="font-semibold text-[#252A26]">₹0</span>
        </div>
      </div>

      {/* Total Amount Box */}
      <div className={`p-4 rounded-2xl flex items-center justify-between ${isOutOfStock ? "bg-stone-700 text-white" : "bg-[#174A3A] text-white"}`}>
        <div>
          <p className="text-xs text-[#C7D4CA]">Total Payable</p>
          <p className="text-2xl font-serif font-bold text-[#D6A83F]">
            ₹{total.toLocaleString("en-IN")}
          </p>
        </div>
        <div className="text-right text-[11px] text-[#A6C0AF]">
          <span>{isOutOfStock ? "Orders paused" : "All taxes included"}</span>
        </div>
      </div>

      {/* Payment Method Selector */}
      {!isOutOfStock && (
        <div className="space-y-2.5">
          <label className="text-xs font-bold uppercase tracking-wider text-[#174A3A] block">
            Select Payment Method
          </label>

          <div className="grid grid-cols-1 gap-2.5">
            {/* Option 1: Pay Online */}
            <button
              type="button"
              onClick={() => setPaymentMethod("online")}
              className={`p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between gap-3 cursor-pointer ${
                paymentMethod === "online"
                  ? "bg-white border-[#174A3A] ring-2 ring-[#174A3A]/20 shadow-xs"
                  : "bg-white/60 border-[#E8E1CE] hover:border-[#174A3A]/40"
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                    paymentMethod === "online"
                      ? "bg-[#174A3A] text-white"
                      : "bg-[#EFE8D8] text-[#174A3A]"
                  }`}
                >
                  <CreditCard className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xs sm:text-sm text-[#174A3A]">
                      Pay Online
                    </span>
                    <span className="text-[10px] font-bold text-[#2E6B47] bg-[#EBF2EC] border border-[#D3E4D7] px-2 py-0.5 rounded-full uppercase">
                      Free Delivery
                    </span>
                  </div>
                  <p className="text-[11px] text-[#5C665F] truncate">
                    Instant UPI (GPay, PhonePe), Cards & NetBanking
                  </p>
                </div>
              </div>
              <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                  paymentMethod === "online" ? "border-[#174A3A] bg-[#174A3A]" : "border-[#C5BDAA]"
                }`}
              >
                {paymentMethod === "online" && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
              </div>
            </button>

            {/* Option 2: Cash on Delivery */}
            <button
              type="button"
              onClick={() => setPaymentMethod("cod")}
              className={`p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between gap-3 cursor-pointer ${
                paymentMethod === "cod"
                  ? "bg-white border-[#D97706] ring-2 ring-[#D97706]/20 shadow-xs"
                  : "bg-white/60 border-[#E8E1CE] hover:border-[#D97706]/40"
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                    paymentMethod === "cod"
                      ? "bg-[#D97706] text-white"
                      : "bg-[#FDF3E3] text-[#D97706]"
                  }`}
                >
                  <Banknote className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xs sm:text-sm text-[#174A3A]">
                      Cash on Delivery
                    </span>
                    <span className="text-[10px] font-bold text-[#B45309] bg-[#FEF3C7] border border-[#FDE68A] px-2 py-0.5 rounded-full uppercase">
                      Charges Extra
                    </span>
                  </div>
                  <p className="text-[11px] text-[#5C665F] truncate">
                    Confirm & order directly on WhatsApp
                  </p>
                </div>
              </div>
              <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                  paymentMethod === "cod" ? "border-[#D97706] bg-[#D97706]" : "border-[#C5BDAA]"
                }`}
              >
                {paymentMethod === "cod" && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Dynamic Action Button based on Payment Method */}
      <div>
        {isOutOfStock ? (
          <button
            type="button"
            disabled
            className="w-full py-4 px-6 rounded-full bg-[#E5DFCE] text-[#7A857D] font-bold text-sm sm:text-base border border-[#DCD5C3] cursor-not-allowed shadow-none"
          >
            <span>Product Out of Stock • Orders Paused</span>
          </button>
        ) : paymentMethod === "online" ? (
          <button
            type="button"
            onClick={onProceedToPay}
            disabled={isLoading}
            className="w-full py-4 px-6 rounded-full bg-[#174A3A] hover:bg-[#10362A] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin text-[#D6A83F]" />
                <span>Initiating Secure Payment...</span>
              </>
            ) : (
              <>
                <Lock className="w-4 h-4 text-[#D6A83F]" />
                <span>Pay via Razorpay • ₹{total.toLocaleString("en-IN")}</span>
              </>
            )}
          </button>
        ) : (
          <div className="space-y-3">
            <a
              href={codWhatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-4 px-6 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-2.5 cursor-pointer text-center"
            >
              <MessageCircle className="w-5 h-5 fill-white shrink-0" />
              <span>Place COD Order via WhatsApp</span>
            </a>

            {/* Note: Cash on delivery charges extra */}
            <div className="p-3.5 rounded-2xl bg-[#FEF3C7] border border-[#FDE68A] flex items-start gap-2.5 text-xs text-[#92400E]">
              <AlertCircle className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <p className="font-bold text-[#78350F]">Cash on delivery charges extra</p>
                <p className="text-[11px] text-[#92400E] mt-0.5">
                  Our customer care executive will verify your address and confirm the exact COD courier handling charges on WhatsApp before dispatch.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Payment Security / Support Badges */}
      {paymentMethod === "online" ? (
        <div className="space-y-2 pt-1 border-t border-[#E8E1CE] text-[11px] text-[#6E7A70]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#3B7A57] shrink-0" />
            <span>256-Bit SSL Encrypted & Razorpay Verified Gateway</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#D6A83F] shrink-0" />
            <span>Instant UPI (GPay, PhonePe, Paytm), Cards, NetBanking</span>
          </div>
        </div>
      ) : (
        <div className="space-y-2 pt-1 border-t border-[#E8E1CE] text-[11px] text-[#6E7A70]">
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-[#3B7A57] shrink-0" />
            <span>Express Courier Dispatch across India with Live Tracking</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
            <span>WhatsApp Helpline: +91 88819 90439</span>
          </div>
        </div>
      )}
    </div>
  );
}
