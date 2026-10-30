import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond, Cinzel } from "next/font/google";
import { TabBar } from "@/components/layout/TabBar";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://historical-artifacts-museum.vercel.app'),
  title: {
    template: "%s | Ancient Musem",
    default: "Ancient Musem — World Digital Museum of Ancient Historical Artifacts",
  },
  description:
    "Ancient Musem is the premier digital archive of ancient historical artifacts, ancient coins, monumental sculptures, Harappan seals, and sacred antiquities. Explore 571 authenticated records with verified museum provenance.",
  keywords: [
    "Ancient Musem",
    "Ancient Museum",
    "Ancient Musem digital collection",
    "Ancient Musem artifacts",
    "Ancient Musem coins",
    "ancient historical artifacts",
    "ancient artifacts museum",
    "ancient civilization artifacts",
    "ancient Indian history",
    "ancient coins",
    "Hindu deity sculptures",
    "Indus Valley Civilization",
    "archaeology",
    "Gupta dynasty",
    "Chola bronzes",
    "digital museum",
  ],
  authors: [{ name: "Ancient Musem Curatorial Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Ancient Musem",
    title: "Ancient Musem — Digital Heritage & Ancient Artifacts Archive",
    description:
      "Ancient Musem: Explore 571 authenticated ancient historical artifacts, dynastic coins, and sacred sculptures with academic provenance.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ancient Musem — Digital Museum of Ancient Artifacts",
    description:
      "Ancient Musem: Explore 571 authenticated ancient historical artifacts, dynastic coins, and sacred sculptures.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${cormorant.variable} ${cinzel.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-[#FFFFFF] text-[#000000] relative selection:bg-[#007AFF]/20">
        {/* iOS 26 Ambient Refraction Mesh */}
        <div className="ambient-glow-layer" aria-hidden="true">
          <div className="ambient-orb-1" />
          <div className="ambient-orb-2" />
          <div className="ambient-orb-3" />
        </div>

        {/* Main Application Shell with Bottom Tab Bar Clearance */}
        <div className="relative z-10 flex flex-col min-h-screen pb-20 sm:pb-24">
          {children}
        </div>

        {/* iOS 26 Floating Liquid Glass Tab Bar */}
        <TabBar />
      </body>
    </html>
  );
}
