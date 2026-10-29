import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Layers } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ArtifactGrid } from '@/components/artifacts/ArtifactGrid';
import {
  getAllCategories,
  getCategoryBySlug,
  getArtifactsByCategory,
} from '@/lib/artifacts';

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return { title: 'Category Not Found' };
  }

  return {
    title: `${category.title} — Digital Heritage Collection`,
    description: category.shortDescription,
  };
}

function CategoryDetailSkeleton() {
  return (
    <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full animate-pulse">
      <div className="h-4 w-32 bg-[#E7E5DF] rounded mb-6" />
      <div className="h-10 w-72 bg-[#E7E5DF] rounded mb-4" />
      <div className="h-6 w-full max-w-xl bg-[#E7E5DF] rounded mb-12" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-80 bg-[#E7E5DF] rounded-2xl" />
        ))}
      </div>
    </main>
  );
}

async function CategoryDetailContent({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const artifacts = getArtifactsByCategory(category.slug);
  const allCategories = getAllCategories();
  const otherCategories = allCategories.filter((c) => c.slug !== category.slug);

  return (
    <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
      {/* Breadcrumb Trail */}
      <Breadcrumbs
        items={[
          { label: 'Categories', href: '/#categories' },
          { label: category.title },
        ]}
      />

      {/* Back Link */}
      <div className="my-4">
        <Link
          href="/artifacts"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8A6A43] hover:text-[#6E5333] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Artifacts</span>
        </Link>
      </div>

      {/* Category Hero Block */}
      <header className="mb-12 border-b border-[#E7E5DF] pb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E7E5DF] text-xs font-semibold text-[#8A6A43] mb-4">
          <Layers className="w-3.5 h-3.5" />
          <span>Curatorial Department</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#242424] tracking-tight mb-4">
          {category.title}
        </h1>
        <p className="text-base sm:text-lg text-[#6B6B65] max-w-3xl leading-relaxed">
          {category.shortDescription}
        </p>
      </header>

      {/* Artifacts Grid */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-[#242424]">
            Department Holdings ({artifacts.length})
          </h2>
          <span className="text-xs text-[#6B6B65]">
            Showing authenticated items
          </span>
        </div>
        <ArtifactGrid
          artifacts={artifacts}
          emptyMessage={`No artifacts currently cataloged in the ${category.title} collection.`}
        />
      </section>

      {/* Explore Other Categories */}
      <section className="pt-10 border-t border-[#E7E5DF]">
        <h2 className="text-lg font-semibold text-[#242424] mb-6">
          Explore Other Departments
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {otherCategories.map((other) => (
            <Link
              key={other.slug}
              href={`/categories/${other.slug}`}
              className="group bg-[#FFFFFF] rounded-xl border border-[#E7E5DF] p-6 hover:border-[#8A6A43]/40 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="font-semibold text-base text-[#242424] group-hover:text-[#8A6A43] transition-colors mb-1.5">
                  {other.title}
                </h3>
                <p className="text-xs text-[#6B6B65] line-clamp-2 leading-relaxed">
                  {other.shortDescription}
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-[#E7E5DF] flex items-center justify-between text-xs font-medium text-[#8A6A43]">
                <span>{other.itemCountEstimate} objects</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default function CategoryDetailPage({ params }: CategoryPageProps) {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F8F5]">
      <Header />
      <Suspense fallback={<CategoryDetailSkeleton />}>
        <CategoryDetailContent params={params} />
      </Suspense>
      <Footer />
    </div>
  );
}
