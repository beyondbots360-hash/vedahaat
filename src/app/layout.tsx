import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/layout/FloatingContact";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif-display",
  display: "swap",
});

const manrope = Manrope({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://vedahaat.in"),
  title: "VedaHaat | Tradition. Wellness. Everyday.",
  description:
    "Discover carefully selected Ayurvedic and herbal wellness products inspired by India's ancient traditions. Featuring 4G Avleh Yameny Khalta with Sidr Honey and Hikmo Sugar & Madhumeh Daman Powder.",
  keywords: [
    "VedaHaat",
    "Ayurveda",
    "Traditional Wellness",
    "4G Avleh",
    "Yameny Khalta",
    "Tila Josh Jawani",
    "Hikmo Sugar",
    "Madhumeh Daman",
    "Herbal Medicine",
    "Natural Health",
  ],
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${manrope.variable}`} suppressHydrationWarning>
      <body
        className="bg-[#F8F5EC] text-[#252A26] font-sans antialiased min-h-screen flex flex-col selection:bg-[#D6A83F]/30 selection:text-[#174A3A]"
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
