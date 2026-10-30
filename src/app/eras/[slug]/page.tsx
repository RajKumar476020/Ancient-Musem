import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ArtifactGrid } from '@/components/artifacts/ArtifactGrid';
import {
  getAllEras,
  getEraBySlug,
  getArtifactsByEra,
} from '@/lib/artifacts';

interface EraPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const eras = getAllEras();
  return eras.map((era) => ({ slug: era.slug }));
}

export async function generateMetadata({ params }: EraPageProps): Promise<Metadata> {
  const { slug } = await params;
  const era = getEraBySlug(slug);
  if (!era) return { title: 'Historical Era Not Found' };
  return {
    title: `${era.title} (${era.period})`,
    description: era.shortDescription,
  };
}

function EraDetailSkeleton() {
  return (
    <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full animate-pulse">
      <div className="h-4 w-32 bg-neutral-200 rounded mb-6" />
      <div className="h-10 w-80 bg-neutral-200 rounded mb-5" />
      <div className="h-5 w-full max-w-lg bg-neutral-200 rounded mb-12" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {[1, 2, 3].map((i) => <div key={i} className="h-72 bg-neutral-200 rounded-[24px]" />)}
      </div>
    </main>
  );
}

async function EraDetailContent({ params }: EraPageProps) {
  const { slug } = await params;
  const era = getEraBySlug(slug);
  if (!era) notFound();

  const artifacts = getArtifactsByEra(era.slug);
  const allEras = getAllEras();
  const otherEras = allEras.filter((e) => e.slug !== era.slug);

  return (
    <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">

      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Historical Eras', href: '/#eras' }, { label: era.title }]} />

      {/* Back */}
      <div className="mt-4 mb-8">
        <Link href="/artifacts" className="glass-pill text-[12px] group text-[#007AFF]">
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
          <span>Back to Collection</span>
        </Link>
      </div>

      {/* Era Header */}
      <div className="mb-12 space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <div className="glass-pill text-[11.5px] text-[#007AFF]">
            <Calendar className="w-3 h-3 text-[#007AFF]" />
            <span>{era.period}</span>
          </div>
          <span className="text-[11.5px] font-semibold text-[#8E8E93] bg-white/80 border border-white/95 px-3 py-1 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,1)]">
            Historical Era
          </span>
        </div>

        <h1 className="text-[34px] sm:text-[46px] lg:text-[54px] font-bold text-[#000000] leading-tight tracking-[-0.035em]">
          {era.title}
        </h1>

        <p className="text-[16px] sm:text-[17px] text-[#6C6C70] max-w-3xl leading-relaxed">
          {era.shortDescription}
        </p>

        {/* Historical Context Box */}
        <div className="mt-6 p-7 sm:p-8 glass-card max-w-4xl">
          <h2 className="text-[13px] font-bold text-[#007AFF] uppercase tracking-wider mb-3">
            Historical & Archaeological Context
          </h2>
          <p className="text-[15.5px] text-[#3C3C43] leading-[1.75]">{era.historicalContext}</p>
        </div>
      </div>

      {/* Artifacts */}
      <div className="mb-16 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-black/5">
          <h2 className="text-[22px] sm:text-[26px] font-bold text-[#000000] tracking-tight">
            Objects from this Era
            <span className="text-[#8E8E93] font-normal ml-2 text-[18px]">({artifacts.length})</span>
          </h2>
          <span className="text-[13px] text-[#8E8E93]">Chronologically authenticated</span>
        </div>

        <ArtifactGrid
          artifacts={artifacts}
          emptyMessage={`No artifacts currently cataloged from the ${era.title}.`}
        />
      </div>

      {/* Other Eras */}
      <section className="pt-14 border-t border-black/5">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="glass-pill text-[10.5px]">Continue Exploring</span>
          </div>
          <h2 className="text-[26px] sm:text-[30px] font-bold text-[#000000] tracking-tight">Adjacent Eras</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {otherEras.slice(0, 3).map((other) => (
            <Link
              key={other.id}
              href={`/eras/${other.slug}`}
              className="group glass-card p-6 flex flex-col justify-between active:scale-[0.985]"
            >
              <div>
                <div className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-[#007AFF] bg-[#007AFF]/10 border border-[#007AFF]/20 px-2.5 py-0.5 rounded-full mb-4">
                  <Calendar className="w-3 h-3" />
                  {other.period}
                </div>
                <h3 className="text-[17px] font-bold text-[#000000] group-hover:text-[#007AFF] transition-colors mb-2 leading-snug tracking-tight">
                  {other.title}
                </h3>
                <p className="text-[13px] text-[#6C6C70] line-clamp-2 leading-relaxed">{other.shortDescription}</p>
              </div>
              <div className="mt-5 pt-4 border-t border-black/5 flex items-center justify-between text-[12.5px] font-semibold text-[#007AFF]">
                <span>Explore</span>
                <span className="w-7 h-7 rounded-full bg-white/90 group-hover:bg-[#007AFF] text-[#007AFF] group-hover:text-white flex items-center justify-center transition-all duration-200 border border-white/95 group-hover:border-[#007AFF] shadow-[inset_0_1px_1px_rgba(255,255,255,1)]">
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default function EraDetailPage({ params }: EraPageProps) {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFFFF]">
      <Header />
      <Suspense fallback={<EraDetailSkeleton />}>
        <EraDetailContent params={params} />
      </Suspense>
      <Footer />
    </div>
  );
}
