import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { Artifact } from '@/types/artifact';

interface HeroProps {
  featuredHeroArtifact: Artifact;
  totalArtifacts?: number;
}

export const Hero: React.FC<HeroProps> = ({
  featuredHeroArtifact,
  totalArtifacts = 571,
}) => {
  const heroImage =
    featuredHeroArtifact.images.find((i) => i.isPrimary) ??
    featuredHeroArtifact.images[0];

  return (
    <section className="relative overflow-hidden pt-6 pb-16 sm:pb-24 lg:pb-28">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center min-h-[560px] lg:min-h-[640px]">

          {/* ─── Left: Apple SF Pro Text Column (col-span-7) ───────────── */}
          <div className="flex flex-col justify-center lg:col-span-7 order-2 lg:order-1 pt-4 lg:pt-0">

            {/* iOS 26 Refraction Eyebrow Pill */}
            <div className="flex items-center gap-2 mb-5">
              <div className="glass-pill">
                <Sparkles className="w-3.5 h-3.5 text-[#007AFF]" />
                <span>Ancient Musem Digital Heritage Collection</span>
              </div>
            </div>

            {/* Apple Large Title */}
            <h1 className="text-[38px] sm:text-[54px] lg:text-[62px] font-bold text-[#000000] leading-[1.05] tracking-[-0.035em] mb-6">
              Five Millennia of<br />
              <span className="text-[#007AFF]">
                Sovereign Heritage.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-[17px] sm:text-[18px] text-[#6C6C70] leading-relaxed max-w-[520px] mb-8 font-normal tracking-normal">
              Explore {totalArtifacts} authenticated masterworks — from Bronze Age
              Indus Valley seals and ancient dynastic coinage to sacred Chola bronzes
              and Mughal imperial regalia.
            </p>

            {/* iOS 26 Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3.5 mb-10">
              <Link
                href="/artifacts"
                className="glass-btn-primary group"
              >
                <span>Explore All {totalArtifacts} Artifacts</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/#categories"
                className="glass-btn-secondary"
              >
                <span>Browse Galleries</span>
              </Link>
            </div>

            {/* iOS 26 Floating Glass Stats Dock */}
            <div className="inline-flex flex-wrap items-center gap-4 sm:gap-8 p-3 sm:px-6 sm:py-3.5 rounded-2xl sm:rounded-full bg-white/80 backdrop-blur-2xl border border-white/95 shadow-[inset_0_1px_2px_rgba(255,255,255,1),0_10px_28px_-6px_rgba(0,0,0,0.06)] w-fit">
              <div>
                <div className="text-[20px] font-bold text-[#000000] leading-none tracking-tight">{totalArtifacts}</div>
                <div className="text-[10.5px] text-[#8E8E93] mt-1 uppercase tracking-wider font-semibold">Objects</div>
              </div>
              <div className="w-px h-6 bg-black/10" />
              <div>
                <div className="text-[20px] font-bold text-[#000000] leading-none tracking-tight">4,500+</div>
                <div className="text-[10.5px] text-[#8E8E93] mt-1 uppercase tracking-wider font-semibold">Years</div>
              </div>
              <div className="w-px h-6 bg-black/10" />
              <div>
                <div className="text-[20px] font-bold text-[#007AFF] leading-none tracking-tight">100%</div>
                <div className="text-[10.5px] text-[#8E8E93] mt-1 uppercase tracking-wider font-semibold">Open Access</div>
              </div>
            </div>
          </div>

          {/* ─── Right: Apple Showcase Vitrine in Liquid Glass (col-span-5) ─ */}
          <div className="relative flex items-center justify-center lg:col-span-5 order-1 lg:order-2">
            {/* Ambient Refraction Glow Behind Box */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-[#007AFF]/15 via-transparent to-[#A2845E]/10 rounded-[36px] blur-3xl pointer-events-none" />

            {/* iOS 26 Liquid Glass Vitrine Box */}
            <div className="relative z-10 w-full max-w-[440px] glass-card p-4 sm:p-5 rounded-[28px]">

              {/* Pedestal Container */}
              <Link
                href={`/artifacts/${featuredHeroArtifact.slug}`}
                className="group block relative rounded-[22px] overflow-hidden artifact-pedestal border border-white/95 shadow-[inset_0_1px_2px_rgba(255,255,255,1)]"
                aria-label={`View ${featuredHeroArtifact.title}`}
              >
                <div className="relative aspect-[4/3] sm:aspect-[1/1] w-full">
                  <Image
                    src={heroImage.src}
                    alt={heroImage.alt}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
                    className="object-contain p-6 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />

                  {/* iOS Spotlight Pill */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="glass-pill text-[10.5px] bg-white/90">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#007AFF]" />
                      Masterwork Spotlight
                    </span>
                  </div>

                  {/* Zoom Hint Pill */}
                  <div className="absolute bottom-3.5 right-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="glass-pill text-[10.5px] bg-white/95 text-[#000000]">
                      <ArrowUpRight className="w-3 h-3 text-[#007AFF]" />
                      Inspect Object
                    </span>
                  </div>
                </div>
              </Link>

              {/* Artifact Metadata */}
              <div className="mt-4 px-1 grid grid-cols-[1fr_auto] items-center gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    {featuredHeroArtifact.dynasty && (
                      <span className="text-[11px] font-semibold text-[#007AFF] bg-[#007AFF]/10 px-2 py-0.5 rounded-md">
                        {featuredHeroArtifact.dynasty}
                      </span>
                    )}
                    <span className="text-[11px] text-[#8E8E93] font-mono">
                      {featuredHeroArtifact.dateDisplay}
                    </span>
                  </div>
                  <h2 className="text-[16px] font-semibold text-[#000000] leading-snug line-clamp-1">
                    <Link
                      href={`/artifacts/${featuredHeroArtifact.slug}`}
                      className="hover:text-[#007AFF] transition-colors"
                    >
                      {featuredHeroArtifact.title}
                    </Link>
                  </h2>
                </div>

                <Link
                  href={`/artifacts/${featuredHeroArtifact.slug}`}
                  className="shrink-0 w-8 h-8 rounded-full bg-white/90 hover:bg-[#007AFF] text-[#007AFF] hover:text-white border border-white/95 shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_2px_6px_rgba(0,0,0,0.06)] flex items-center justify-center transition-all duration-200 active:scale-90"
                  aria-label="View detail"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
