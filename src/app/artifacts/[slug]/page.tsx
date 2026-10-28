import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  Calendar,
  Landmark,
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
  getRelatedArtifacts,
} from '@/lib/artifacts';

interface ArtifactPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Pre-render all 20 artifacts at build time for instant static delivery.
 */
export async function generateStaticParams() {
  const artifacts = getAllArtifacts();
  return artifacts.map((art) => ({
    slug: art.slug,
  }));
}

/**
 * Generate rich SEO and Open Graph metadata for each artifact.
 */
export async function generateMetadata({
  params,
}: ArtifactPageProps): Promise<Metadata> {
  const { slug } = await params;
  const artifact = getArtifactBySlug(slug);

  if (!artifact) {
    return {
      title: 'Artifact Not Found',
    };
  }

  const primaryImage =
    artifact.images.find((i) => i.isPrimary) ?? artifact.images[0];

  return {
    title: `${artifact.title} (${artifact.dateDisplay})`,
    description: artifact.summary,
    openGraph: {
      title: `${artifact.title} | The Historical Artifacts Museum`,
      description: artifact.summary,
      type: 'article',
      images: [
        {
          url: primaryImage.src,
          alt: primaryImage.alt,
        },
      ],
    },
  };
}

export default async function ArtifactDetailPage({ params }: ArtifactPageProps) {
  const { slug } = await params;
  const artifact = getArtifactBySlug(slug);

  if (!artifact) {
    notFound();
  }

  const category = getCategoryBySlug(artifact.categorySlug);
  const era = getEraBySlug(artifact.eraSlug);
  const relatedArtifacts = getRelatedArtifacts(artifact, 3);

  // Construct JSON-LD Schema for rich snippet search results
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: artifact.title,
    description: artifact.summary,
    image: artifact.images.map((img) => img.src),
    datePublished: artifact.lastReviewed,
    author: {
      '@type': 'Organization',
      name: 'The Historical Artifacts Museum',
    },
    publisher: {
      '@type': 'Organization',
      name: 'The Historical Artifacts Museum',
    },
    about: {
      '@type': 'Thing',
      name: artifact.title,
      description: artifact.description,
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F8F5]">
      <Header />

      {/* Structured JSON-LD Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { label: 'Artifacts', href: '/artifacts' },
            ...(category
              ? [{ label: category.title, href: `/categories/${category.slug}` }]
              : []),
            { label: artifact.title },
          ]}
        />

        {/* Back Link */}
        <div className="my-4">
          <Link
            href="/artifacts"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8A6A43] hover:text-[#6E5333] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Collection</span>
          </Link>
        </div>

        {/* Header Block: Title, Dynasty, Date & Summary */}
        <header className="mb-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2.5 text-xs">
            {era && (
              <Link
                href={`/eras/${era.slug}`}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E7E5DF] text-[#8A6A43] font-semibold hover:border-[#8A6A43] transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>{era.title}</span>
              </Link>
            )}
            {artifact.dynasty && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#F0EFEA] text-[#242424] font-medium">
                <Landmark className="w-3.5 h-3.5 text-[#8A6A43]" />
                <span>{artifact.dynasty}</span>
              </span>
            )}
            <span className="text-[#6B6B65] font-medium ml-1">
              Date: {artifact.dateDisplay}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#242424] tracking-tight leading-tight">
            {artifact.title}
          </h1>

          <p className="text-base sm:text-lg text-[#6B6B65] max-w-3xl leading-relaxed">
            {artifact.summary}
          </p>
        </header>

        {/* Two-Column Layout: Visual & Facts (Left/Top) vs Detailed Editorial Article (Right/Main) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column (Sticky Gallery & Specifications on desktop) */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            {/* Visual Gallery with Lightbox */}
            <ArtifactGallery
              images={artifact.images}
              artifactTitle={artifact.title}
            />

            {/* Quick Facts & Specifications Table */}
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

          {/* Right Column (Long-form Reading Column: max-w ~760px) */}
          <div className="lg:col-span-7 space-y-10">
            {/* Historical Overview */}
            <section className="bg-[#FFFFFF] rounded-2xl border border-[#E7E5DF] p-6 sm:p-8 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#242424] tracking-tight mb-4 flex items-center gap-2 border-b border-[#E7E5DF] pb-3">
                <BookOpen className="w-5 h-5 text-[#8A6A43]" />
                <span>Historical Overview</span>
              </h2>
              <div className="article-prose text-[#242424] text-base leading-relaxed">
                <p>{artifact.description}</p>
              </div>
            </section>

            {/* Detailed Editorial Sections */}
            {artifact.sections.map((section, idx) => (
              <section
                key={idx}
                className="bg-[#FFFFFF] rounded-2xl border border-[#E7E5DF] p-6 sm:p-8 shadow-xs"
              >
                <h2 className="text-xl sm:text-2xl font-semibold text-[#242424] tracking-tight mb-4 border-b border-[#E7E5DF] pb-3">
                  {section.heading}
                </h2>
                <div className="article-prose text-[#242424] text-base leading-relaxed space-y-4">
                  <p>{section.body}</p>
                </div>
              </section>
            ))}

            {/* Verified Historical Timeline (if available) */}
            {artifact.timeline && artifact.timeline.length > 0 && (
              <ArtifactTimeline milestones={artifact.timeline} />
            )}

            {/* Interesting Sourced Facts Callout */}
            {artifact.interestingFacts && artifact.interestingFacts.length > 0 && (
              <div className="bg-[#F4EFEA] rounded-2xl border border-[#E7E5DF] p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-[#242424] mb-4 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-[#8A6A43]" />
                  <span>Curator&apos;s Notes &amp; Facts</span>
                </h3>
                <ul className="space-y-3">
                  {artifact.interestingFacts.map((fact, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#242424]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8A6A43] mt-2 shrink-0" />
                      <span className="leading-relaxed">{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Academic Sources & Verified References */}
            <section className="bg-[#FFFFFF] rounded-2xl border border-[#E7E5DF] p-6 sm:p-8">
              <h3 className="text-base font-semibold text-[#242424] uppercase tracking-wider mb-4 flex items-center gap-2 border-b border-[#E7E5DF] pb-3">
                <ShieldCheck className="w-4 h-4 text-[#8A6A43]" />
                <span>Academic Sources &amp; References</span>
              </h3>
              <ul className="space-y-3 text-sm">
                {artifact.sources.map((src, idx) => (
                  <li key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 py-1 border-b border-[#F0EFEA] last:border-b-0">
                    <span className="font-medium text-[#242424]">
                      {src.title} — <span className="text-[#6B6B65] font-normal">{src.publisher}</span>
                    </span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#8A6A43] hover:text-[#6E5333] underline shrink-0 mt-0.5"
                    >
                      <span>View Reference</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {/* Related Artifacts Footer Section */}
        <div className="mt-20">
          <RelatedArtifacts artifacts={relatedArtifacts} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
