import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ArtifactCatalog } from '@/components/artifacts/ArtifactCatalog';
import { getAllArtifacts, getAllCategories, getAllEras } from '@/lib/artifacts';

export const metadata: Metadata = {
  title: 'Explore Historical Artifacts',
  description:
    'Browse the complete collection of 20 authenticated Indian historical artifacts, ancient coins, Hindu deity sculptures, and archaeological seals with multi-attribute filtering.',
};

export default function ArtifactsPage() {
  const artifacts = getAllArtifacts();
  const categories = getAllCategories();
  const eras = getAllEras();

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F8F5]">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        {/* Breadcrumb Trail */}
        <Breadcrumbs items={[{ label: 'Explore Collection' }]} />

        {/* Page Heading */}
        <div className="my-8 space-y-2">
          <span className="text-xs font-semibold text-[#8A6A43] uppercase tracking-widest block">
            The Complete Archive
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#242424] tracking-tight">
            Explore Artifacts
          </h1>
          <p className="text-base text-[#6B6B65] max-w-2xl font-normal leading-relaxed">
            Discover authenticated historical objects from the Indus Valley Civilization to the Maratha Empire. Use keyword search or filter by category and historical era.
          </p>
        </div>

        {/* Interactive Catalog Island wrapped in Suspense for useSearchParams */}
        <Suspense
          fallback={
            <div className="py-20 text-center text-sm text-[#6B6B65]">
              Loading museum catalog...
            </div>
          }
        >
          <ArtifactCatalog
            initialArtifacts={artifacts}
            categories={categories}
            eras={eras}
          />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
