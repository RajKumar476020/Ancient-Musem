import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, ShieldCheck, Image as ImageIcon } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { CategoryBrowse } from '@/components/home/CategoryBrowse';
import { EraBrowse } from '@/components/home/EraBrowse';
import {
  getAllArtifacts,
  getAllCategories,
  getAllEras,
  getArtifactBySlug,
} from '@/lib/artifacts';

export default function HomePage() {
  const allArtifacts = getAllArtifacts();
  const categories = getAllCategories();
  const eras = getAllEras();

  // Featured artifact for hero
  const heroArtifact =
    getArtifactBySlug('chola-nataraja-bronze') || allArtifacts[0];

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFFFF]">
      <Header />

      <main className="flex-1">
        {/* iOS 26 Hero Showcase */}
        <Hero
          featuredHeroArtifact={heroArtifact}
          totalArtifacts={allArtifacts.length}
        />

        {/* Categories Section */}
        <CategoryBrowse categories={categories} />

        {/* Eras Section */}
        <EraBrowse eras={eras} />

        {/* ── Curatorial Standards with Liquid Glass Pillars ─────── */}
        <section className="py-20 sm:py-28 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="glass-pill text-[11px]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#007AFF]" />
                    Scholarly Integrity
                  </span>
                </div>
                <h2 className="text-[32px] sm:text-[40px] font-bold text-[#000000] leading-tight tracking-[-0.03em]">
                  Curatorial Standards & Academic Ethics
                </h2>
                <p className="text-[16px] text-[#6C6C70] mt-2 max-w-[560px] leading-relaxed">
                  Every historical record in our archive is anchored in authenticated museum accession catalogs, peer-reviewed archaeological reports, and verified open-access photography.
                </p>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#007AFF] hover:underline transition-all shrink-0 group"
              >
                <span>Read curatorial methodology</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Three Liquid Glass Pillars in identical 3-column grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: BookOpen,
                  badge: 'Museum Accession',
                  title: 'Museum Accession Records',
                  desc: 'Verified against official catalog numbers from the National Museum New Delhi, British Museum, The Met, and the Archaeological Survey of India.',
                },
                {
                  icon: ShieldCheck,
                  badge: 'Stratigraphic Field',
                  title: 'Stratigraphic Field Memoirs',
                  desc: 'Grounded in stratigraphic excavation memoirs and numismatic monographs, rigorously separating empirical evidence from scholarly hypotheses.',
                },
                {
                  icon: ImageIcon,
                  badge: 'CC0 Open Access',
                  title: 'Open Access & CC0 Licensing',
                  desc: '100% verified public domain and Creative Commons photography, with visible credit attribution, institutional repository links, and zero watermarks.',
                },
              ].map(({ icon: Icon, badge, title, desc }) => (
                <Link
                  key={title}
                  href="/about"
                  className="group relative glass-card p-6 sm:p-7 flex flex-col justify-between h-full min-h-[270px] overflow-hidden active:scale-[0.985]"
                >
                  <div>
                    {/* Apple Squircle Icon & Badge Capsule */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-12 h-12 rounded-[18px] bg-[#007AFF]/10 border border-[#007AFF]/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_4px_12px_rgba(0,0,0,0.04)]">
                        <Icon className="w-5 h-5 text-[#007AFF]" />
                      </div>
                      <span className="text-[11.5px] font-semibold text-[#6C6C70] bg-white/80 border border-white/90 shadow-[inset_0_1px_1px_rgba(255,255,255,1)] px-3 py-1 rounded-full">
                        {badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-[18px] font-bold text-[#000000] group-hover:text-[#007AFF] transition-colors mb-2 leading-snug tracking-tight">
                      {title}
                    </h3>

                    {/* Description */}
                    <p className="text-[13.5px] text-[#6C6C70] leading-relaxed line-clamp-3 min-h-[60px]">
                      {desc}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between">
                    <span className="text-[12.5px] font-semibold text-[#007AFF]">
                      Learn more
                    </span>
                    <span className="w-7 h-7 rounded-full bg-[#007AFF]/10 border border-[#007AFF]/20 text-[#007AFF] group-hover:bg-[#007AFF] group-hover:text-white flex items-center justify-center transition-all duration-200 group-hover:scale-110 shadow-[inset_0_1px_1px_rgba(255,255,255,1)]">
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
