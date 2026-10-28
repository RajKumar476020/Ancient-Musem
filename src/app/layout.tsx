import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://historical-artifacts-museum.vercel.app'),
  title: {
    template: "%s | The Historical Artifacts Museum",
    default: "The Historical Artifacts Museum — Digital Heritage Collection",
  },
  description:
    "Explore authentic historical artifacts, ancient coins, Hindu deity sculptures, and archaeological treasures from Indian history with verified provenance and academic references.",
  keywords: [
    "Indian history",
    "historical artifacts",
    "ancient coins",
    "Hindu deity sculptures",
    "Indus Valley Civilization",
    "archaeology",
    "Gupta dynasty",
    "Chola bronzes",
  ],
  authors: [{ name: "The Historical Artifacts Museum Editorial Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "The Historical Artifacts Museum",
    title: "The Historical Artifacts Museum — Digital Heritage Collection",
    description:
      "A curated digital museum of historical objects, ancient coinage, sacred sculpture, and archaeological treasures from Indian history.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-[#F8F8F5] text-[#242424]">
        {children}
      </body>
    </html>
  );
}
