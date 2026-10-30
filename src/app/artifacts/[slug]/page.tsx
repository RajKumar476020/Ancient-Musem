import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  Calendar,
  BookOpen,
  ShieldCheck,
  ExternalLink,
  Lightbulb,
} from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ArtifactGallery } from '@/components/artifacts/ArtifactGallery';
import { ArtifactFacts } from '@/components/artifacts/ArtifactFacts';
import { ArtifactTimeline } from '@/components/artifacts/ArtifactTimeline';
import { RelatedArtifacts } from '@/components/artifacts/RelatedArtifacts';
import {
  getAllArtifacts,
  getArtifactBySlug,
  getCategoryBySlug,
  getEraBySlug,
  getRecommendedArtifactsWithContext,
} from '@/lib/artifacts';

interface ArtifactPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const artifacts = getAllArtifacts();
  return artifacts.map((art) => ({ slug: art.slug }));
}

export async function generateMetadata({ params }: ArtifactPageProps): Promise<Metadata> {
  const { slug } = await params;
  const artifact = getArtifactBySlug(slug);
  if (!artifact) return { title: 'Artifact Not Found' };
  const primaryImage = artifact.images.find((i) => i.isPrimary) ?? artifact.images[0];
  return {
    title: `${artifact.title} (${artifact.dateDisplay})`,
    description: artifact.summary,
    openGraph: {
      title: `${artifact.title} | Ancient Musem`,
      description: artifact.summary,
      type: 'article',
      images: [{ url: primaryImage.src, alt: primaryImage.alt }],
    },
  };
}

function ArtifactDetailSkeleton() {
  return (
    <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full animate-pulse">
      <div className="h-4 w-48 bg-neutral-200 rounded mb-8" />
      <div className="h-10 w-3/4 max-w-xl bg-neutral-200 rounded mb-4" />
      <div className="h-6 w-full max-w-2xl bg-neutral-200 rounded mb-14" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        <div className="lg:col-span-5 space-y-5">
          <div className="aspect-[4/3] w-full bg-neutral-200 rounded-[24px]" />
          <div className="h-56 bg-neutral-200 rounded-[24px]" />
        </div>
        <div className="lg:col-span-7 space-y-5">
          <div className="h-44 bg-neutral-200 rounded-[24px]" />
          <div className="h-64 bg-neutral-200 rounded-[24px]" />
        </div>
      </div>
    </main>
  );
}

async function ArtifactDetailContent({ params }: ArtifactPageProps) {
  const { slug } = await params;
  const artifact = getArtifactBySlug(slug);
  if (!artifact) notFound();

  const category = getCategoryBySlug(artifact.categorySlug);
  const era = getEraBySlug(artifact.eraSlug);
  const recommendations = getRecommendedArtifactsWithContext(artifact, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${artifact.title} — Ancient Musem`,
    description: artifact.summary,
    image: artifact.images.map((img) => img.src),
    datePublished: artifact.lastReviewed,
    author: { '@type': 'Organization', name: 'Ancient Musem' },
    publisher: { '@type': 'Organization', name: 'Ancient Musem' },
    about: { '@type': 'Thing', name: artifact.title, description: artifact.description },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">

        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Collection', href: '/artifacts' },
            ...(category ? [{ label: category.title, href: `/categories/${category.slug}` }] : []),
            { label: artifact.title },
          ]}
        />

        {/* Back Link Pill */}
        <div className="mt-4 mb-8">
          <Link
            href="/artifacts"
            className="glass-pill text-[12px] group text-[#007AFF]"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
            <span>Back to Collection</span>
          </Link>
        </div>

        {/* ── Apple Large Title Header ─────────────────────────────── */}
        <header className="mb-12 space-y-4">

          {/* Tags Row */}
          <div className="flex flex-wrap items-center gap-2">
            {era && (
              <Link
                href={`/eras/${era.slug}`}
                className="glass-pill text-[11.5px] text-[#007AFF] hover:border-[#007AFF]/40 transition-colors"
              >
                <Calendar className="w-3 h-3 text-[#007AFF]" />
                <span>{era.title}</span>
              </Link>
            )}
            {artifact.dynasty && (
              <span className="glass-pill text-[11.5px] text-[#3C3C43]">
                {artifact.dynasty}
              </span>
            )}
            {category && (
              <Link
                href={`/categories/${category.slug}`}
                className="glass-pill text-[11.5px] text-[#6C6C70] hover:text-[#007AFF] transition-colors"
              >
                {category.title}
              </Link>
            )}
            <span className="text-[11.5px] font-mono text-[#8E8E93] px-3 py-1 rounded-full bg-white/80 border border-white/95 shadow-[inset_0_1px_1px_rgba(255,255,255,1)]">
              {artifact.dateDisplay}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-[34px] sm:text-[46px] lg:text-[54px] font-bold text-[#000000] leading-[1.08] tracking-[-0.035em]">
            {artifact.title}
          </h1>

          {/* Apple SF Subheadline */}
          <p className="text-[17px] sm:text-[19px] text-[#6C6C70] max-w-3xl leading-[1.6] font-normal">
            {artifact.summary}
          </p>
        </header>

        {/* ── Two-Column Layout ────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Left: Gallery + Facts (sticky on desktop) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <ArtifactGallery images={artifact.images} artifactTitle={artifact.title} />
            <ArtifactFacts
              facts={artifact.quickFacts}
              dateDisplay={artifact.dateDisplay}
              material={artifact.material}
              origin={artifact.origin}
              discoverySite={artifact.discoverySite}
              currentCollection={artifact.currentCollection}
              dimensions={artifact.dimensions}
            />
          </div>

          {/* Right: Article Content */}
          <div className="lg:col-span-7 space-y-0">

            {/* Historical Overview */}
            <div className="pb-10 mb-10 border-b border-black/5">
              <div className="flex items-center gap-2.5 mb-5">
                <BookOpen className="w-5 h-5 text-[#007AFF]" />
                <h2 className="text-[21px] font-bold text-[#000000] tracking-tight">
                  Historical Context & Significance
                </h2>
              </div>
              <div className="text-[#3C3C43] text-[16px] leading-[1.75] space-y-4">
                <p>{artifact.description}</p>
              </div>
            </div>

            {/* Article Sections */}
            {artifact.sections.map((section, idx) => (
              <div key={idx} className="pb-10 mb-10 border-b border-black/5 last:border-0 last:mb-0 last:pb-0">
                <h2 className="text-[21px] font-bold text-[#000000] mb-4 leading-snug tracking-tight">
                  {section.heading}
                </h2>
                <div className="text-[#3C3C43] text-[16px] leading-[1.75] space-y-4">
                  <p>{section.body}</p>
                </div>
              </div>
            ))}

            {/* Timeline */}
            {artifact.timeline && artifact.timeline.length > 0 && (
              <div className="pt-10 mt-10 border-t border-black/5">
                <ArtifactTimeline milestones={artifact.timeline} />
              </div>
            )}

            {/* Curator Notes in iOS 26 Liquid Glass Box */}
            {artifact.interestingFacts && artifact.interestingFacts.length > 0 && (
              <div className="mt-10 p-7 glass-card border-white/95">
                <div className="flex items-center gap-2.5 mb-5">
                  <Lightbulb className="w-5 h-5 text-[#007AFF]" />
                  <h3 className="text-[18px] font-bold text-[#000000] tracking-tight">
                    Curator&apos;s Field Notes
                  </h3>
                </div>
                <ul className="space-y-3">
                  {artifact.interestingFacts.map((fact, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[15px] text-[#3C3C43]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#007AFF] mt-[0.6em] shrink-0" />
                      <span className="leading-relaxed">{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Citations & Sources in Liquid Glass Box */}
            <div className="mt-10 pt-10 border-t border-black/5">
              <div className="flex items-center gap-2.5 mb-5">
                <ShieldCheck className="w-4.5 h-4.5 text-[#007AFF]" />
                <h3 className="text-[18px] font-bold text-[#000000] tracking-tight">
                  Scholarly Citations & Sources
                </h3>
              </div>
              <ul className="divide-y divide-black/5">
                {artifact.sources.map((src, idx) => (
                  <li key={idx} className="py-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <span className="text-[14.5px] font-medium text-[#000000]">
                      {src.title}
                      <span className="text-[#8E8E93] font-normal"> — {src.publisher}</span>
                    </span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#007AFF] hover:underline shrink-0 transition-colors"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Related Artifacts */}
        <div className="mt-20">
          <RelatedArtifacts recommendations={recommendations} />
        </div>
      </main>
    </>
  );
}

export default function ArtifactDetailPage({ params }: ArtifactPageProps) {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFFFF]">
      <Header />
      <Suspense fallback={<ArtifactDetailSkeleton />}>
        <ArtifactDetailContent params={params} />
      </Suspense>
      <Footer />
    </div>
  );
}
