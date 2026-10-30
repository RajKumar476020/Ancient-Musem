import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ArtifactCatalog } from '@/components/artifacts/ArtifactCatalog';
import { getAllArtifacts, getAllCategories, getAllEras } from '@/lib/artifacts';

export const metadata: Metadata = {
  title: 'Permanent Collection',
  description:
    'Browse 571 authenticated Indian historical artifacts, ancient coins, Hindu deity sculptures, and archaeological seals with multi-attribute filtering.',
};

export default function ArtifactsPage() {
  const artifacts  = getAllArtifacts();
  const categories = getAllCategories();
  const eras       = getAllEras();

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFFFF]">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">

        {/* Breadcrumb */}
        <Breadcrumbs items={[{ label: 'Collection' }]} />

        {/* Apple Large Title Header */}
        <div className="mt-7 mb-10 space-y-4">
          <div className="flex items-center gap-2">
            <span className="glass-pill text-[11px] text-[#007AFF]">
              Permanent Collection · {artifacts.length} Objects
            </span>
          </div>
          <h1 className="text-[34px] sm:text-[46px] lg:text-[54px] font-bold text-[#000000] leading-tight tracking-[-0.035em]">
            Exhibition Catalog
          </h1>
          <p className="text-[16px] text-[#6C6C70] max-w-2xl leading-relaxed">
            Discover {artifacts.length} authenticated historical objects from the third-millennium BCE
            Indus Valley to the Maratha Empire. Search by name, filter by category or era.
          </p>
        </div>

        {/* Catalog */}
        <Suspense
          fallback={
            <div className="py-20 text-center text-[14px] text-[#8E8E93]">
              Loading collection...
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
