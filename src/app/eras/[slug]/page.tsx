import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
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
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const eras = getAllEras();
  return eras.map((era) => ({
    slug: era.slug,
  }));
}

export async function generateMetadata({
  params,
}: EraPageProps): Promise<Metadata> {
  const { slug } = await params;
  const era = getEraBySlug(slug);

  if (!era) {
    return { title: 'Historical Era Not Found' };
  }

  return {
    title: `${era.title} (${era.period}) — Digital Heritage`,
    description: era.shortDescription,
  };
}

export default async function EraDetailPage({ params }: EraPageProps) {
  const { slug } = await params;
  const era = getEraBySlug(slug);

  if (!era) {
    notFound();
  }

  const artifacts = getArtifactsByEra(era.slug);
  const allEras = getAllEras();
  const otherEras = allEras.filter((e) => e.slug !== era.slug);

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F8F5]">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        {/* Breadcrumb Trail */}
        <Breadcrumbs
          items={[
            { label: 'Historical Eras', href: '/#eras' },
            { label: era.title },
          ]}
        />

        {/* Back Link */}
        <div className="my-4">
          <Link
            href="/artifacts"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8A6A43] hover:text-[#6E5333] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>View All Artifacts</span>
          </Link>
        </div>

        {/* Era Header Block */}
        <div className="my-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E7E5DF] text-xs font-semibold text-[#8A6A43]">
            <Calendar className="w-3.5 h-3.5" />
            <span>{era.period}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#242424] tracking-tight">
            {era.title}
          </h1>

          <p className="text-base sm:text-lg text-[#6B6B65] max-w-3xl leading-relaxed">
            {era.shortDescription}
          </p>

          {/* Detailed Historical Context Panel */}
          <div className="p-6 bg-[#FFFFFF] rounded-2xl border border-[#E7E5DF] text-sm text-[#242424] leading-relaxed max-w-4xl mt-6 shadow-xs">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[#8A6A43] mb-2 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>Historical Epoch Context</span>
            </h2>
            <p>{era.historicalContext}</p>
          </div>
        </div>

        {/* Artifacts in this Era */}
        <div className="my-10 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#E7E5DF]">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#242424]">
              Artifacts from this Epoch
            </h2>
            <span className="text-xs font-medium text-[#6B6B65]">
              {artifacts.length} {artifacts.length === 1 ? 'object' : 'objects'} cataloged
            </span>
          </div>

          <ArtifactGrid
            artifacts={artifacts}
            emptyMessage={`No artifacts currently published from the ${era.title}.`}
          />
        </div>

        {/* Explore Other Eras */}
        <section className="mt-20 pt-12 border-t border-[#E7E5DF]">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#242424] mb-6">
            Other Historical Periods
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherEras.slice(0, 3).map((other) => (
              <Link
                key={other.id}
                href={`/eras/${other.slug}`}
                className="group bg-[#FFFFFF] rounded-xl border border-[#E7E5DF] p-6 hover:border-[#8A6A43]/40 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-semibold text-[#8A6A43] uppercase tracking-wider block mb-1">
                    {other.period}
                  </span>
                  <h3 className="font-semibold text-base text-[#242424] group-hover:text-[#8A6A43] transition-colors mb-1.5">
                    {other.title}
                  </h3>
                  <p className="text-xs text-[#6B6B65] line-clamp-2 leading-relaxed">
                    {other.shortDescription}
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-[#E7E5DF] flex items-center justify-between text-xs font-medium text-[#8A6A43]">
                  <span>Explore Era</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
