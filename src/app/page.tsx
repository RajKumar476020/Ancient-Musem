import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { CategoryBrowse } from '@/components/home/CategoryBrowse';
import { EraBrowse } from '@/components/home/EraBrowse';
import { ArtifactGrid } from '@/components/artifacts/ArtifactGrid';
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

  // Featured artifact for the hero visual
  const heroArtifact =
    getArtifactBySlug('chola-nataraja-bronze') || allArtifacts[0];

  // 6 Curated Featured Artifacts across coins, sculptures, and archaeological seals
  const featuredSlugs = [
    'chola-nataraja-bronze',
    'chandragupta-ii-archer-gold-dinar',
    'ashoka-lion-capital-sarnath',
    'indus-valley-dancing-girl',
    'gupta-standing-vishnu-sculpture',
    'mughal-jahangir-zodiac-rupee',
  ];

  const featuredArtifacts = featuredSlugs
    .map((slug) => getArtifactBySlug(slug))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F8F5]">
      <Header />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero featuredHeroArtifact={heroArtifact} />

        {/* 2. Featured Artifacts Grid */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-semibold text-[#8A6A43] uppercase tracking-widest block mb-2">
                Curatorial Selection
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#242424] tracking-tight">
                Featured Artifacts
              </h2>
            </div>
            <Link
              href="/artifacts"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#8A6A43] hover:text-[#6E5333] transition-colors mt-3 sm:mt-0"
            >
              <span>View All 20 Objects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <ArtifactGrid artifacts={featuredArtifacts} />
        </section>

        {/* 3. Browse by Category */}
        <CategoryBrowse categories={categories} />

        {/* 4. Explore Historical Eras */}
        <EraBrowse eras={eras} />

        {/* 5. Curatorial Standards & Educational Callout */}
        <section className="py-20 bg-[#F0EFEA] border-t border-[#E7E5DF]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFFFFF] rounded-full border border-[#E7E5DF] text-xs font-semibold text-[#8A6A43]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Rigorous Research Standards</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-semibold text-[#242424] tracking-tight">
              An Academic Digital Archive of Ancient India
            </h2>

            <p className="text-base text-[#6B6B65] leading-relaxed">
              Every artifact in our collection is backed by authenticated archaeological reports, museum accession records, and verified public-domain imagery. We present factual history with intellectual integrity, separating established evidence from scholarly uncertainties.
            </p>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#242424] text-white rounded-lg text-sm font-semibold hover:bg-[#3A3A34] transition-colors"
              >
                <span>Read Curatorial Methodology</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
