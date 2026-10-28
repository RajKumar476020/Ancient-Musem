import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import { Artifact } from '@/types/artifact';

interface HeroProps {
  featuredHeroArtifact: Artifact;
}

export const Hero: React.FC<HeroProps> = ({ featuredHeroArtifact }) => {
  const heroImage =
    featuredHeroArtifact.images.find((i) => i.isPrimary) ??
    featuredHeroArtifact.images[0];

  return (
    <section className="relative overflow-hidden bg-[#FFFFFF] border-b border-[#E7E5DF] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0EFEA] border border-[#E7E5DF] text-xs font-semibold text-[#8A6A43] tracking-wide uppercase">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Indian Heritage Archive</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#242424] tracking-tight leading-[1.12]">
              Discover the Stories Behind History&apos;s Greatest Artifacts.
            </h1>

            <p className="text-base sm:text-lg text-[#6B6B65] max-w-2xl leading-relaxed font-normal">
              An editorial digital museum curating ancient and medieval Indian coins, sacred deity sculptures, and bronze age archaeological treasures with verified academic provenance.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/artifacts"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#242424] text-white rounded-lg text-sm font-semibold hover:bg-[#3A3A34] transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-[#8A6A43]"
              >
                <span>Explore All 20 Artifacts</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/#eras"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#F8F8F5] text-[#242424] hover:bg-[#F0EFEA] rounded-lg text-sm font-semibold border border-[#E7E5DF] transition-colors focus-visible:ring-2 focus-visible:ring-[#8A6A43]"
              >
                <Compass className="w-4 h-4 text-[#8A6A43]" />
                <span>Browse Historical Eras</span>
              </Link>
            </div>

            {/* Micro stats banner */}
            <div className="pt-8 border-t border-[#E7E5DF] grid grid-cols-3 gap-6 max-w-lg text-xs sm:text-sm">
              <div>
                <span className="block text-xl sm:text-2xl font-bold text-[#242424]">20</span>
                <span className="text-[#6B6B65]">Curated Objects</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-bold text-[#242424]">7</span>
                <span className="text-[#6B6B65]">Historical Eras</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-bold text-[#242424]">100%</span>
                <span className="text-[#6B6B65]">Open Access Citations</span>
              </div>
            </div>
          </div>

          {/* Right Featured Artifact Column */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none bg-[#F8F8F5] rounded-2xl border border-[#E7E5DF] p-4 sm:p-6 shadow-sm group">
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#FFFFFF] border border-[#E7E5DF]/70">
                <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Highlight caption card */}
              <div className="mt-4 pt-3 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-[#8A6A43] uppercase tracking-wider block">
                    Featured Masterpiece
                  </span>
                  <Link
                    href={`/artifacts/${featuredHeroArtifact.slug}`}
                    className="font-semibold text-base text-[#242424] hover:text-[#8A6A43] transition-colors"
                  >
                    {featuredHeroArtifact.title}
                  </Link>
                  <p className="text-xs text-[#6B6B65] mt-0.5">
                    {featuredHeroArtifact.dateDisplay} • {featuredHeroArtifact.dynasty || featuredHeroArtifact.civilization}
                  </p>
                </div>
                <Link
                  href={`/artifacts/${featuredHeroArtifact.slug}`}
                  aria-label={`View ${featuredHeroArtifact.title}`}
                  className="p-2.5 bg-[#FFFFFF] hover:bg-[#242424] hover:text-white rounded-lg border border-[#E7E5DF] text-[#242424] transition-colors shadow-xs"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
