import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Artifact } from '@/types/artifact';

interface ArtifactCardProps {
  artifact: Artifact;
  priority?: boolean;
  contextTag?: string;
}

export const ArtifactCard: React.FC<ArtifactCardProps> = ({
  artifact,
  priority = false,
  contextTag,
}) => {
  const primaryImage =
    artifact.images.find((img) => img.isPrimary) ?? artifact.images[0];

  return (
    <article className="group relative glass-card overflow-hidden flex flex-col active:scale-[0.985]">

      {/* iOS 26 Glass Vitrine / Pedestal Box */}
      <Link
        href={`/artifacts/${artifact.slug}`}
        className="relative block w-full overflow-hidden artifact-pedestal border-b border-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF] focus-visible:ring-inset"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="aspect-[4/3] relative">
          <Image
            src={primaryImage.src}
            alt={primaryImage.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain p-5 transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            priority={priority}
          />
        </div>

        {/* Category Apple Glass Capsule */}
        {artifact.categorySlug && (
          <div className="absolute top-3 left-3">
            <span className="glass-pill text-[10.5px] px-2.5 py-1 bg-white/85 capitalize text-[#007AFF]">
              {artifact.categorySlug.replace(/-/g, ' ')}
            </span>
          </div>
        )}
      </Link>

      {/* Apple SF Content Section */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div className="space-y-2">

          {/* Context Tag (Recommendations) */}
          {contextTag && (
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10.5px] font-semibold bg-[#007AFF]/10 text-[#007AFF] border border-[#007AFF]/20">
              {contextTag}
            </span>
          )}

          {/* Date & Dynasty */}
          <div className="flex flex-wrap items-center gap-1.5 text-[11.5px] text-[#8E8E93]">
            {artifact.dynasty && (
              <span className="font-semibold text-[#3C3C43]">
                {artifact.dynasty}
              </span>
            )}
            {artifact.dynasty && (
              <span className="text-black/20">·</span>
            )}
            <span className="font-mono text-[#6C6C70]">{artifact.dateDisplay}</span>
          </div>

          {/* Title */}
          <h3 className="text-[15.5px] sm:text-[16.5px] font-semibold text-[#000000] group-hover:text-[#007AFF] transition-colors leading-snug line-clamp-2 tracking-tight">
            <Link
              href={`/artifacts/${artifact.slug}`}
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF] rounded-sm"
            >
              {artifact.title}
            </Link>
          </h3>

          {/* Summary */}
          <p className="text-[13px] text-[#6C6C70] line-clamp-2 leading-relaxed">
            {artifact.summary}
          </p>
        </div>

        {/* Footer Link */}
        <div className="mt-4 pt-3.5 border-t border-black/5 flex items-center justify-between">
          <span className="text-[12px] font-semibold text-[#007AFF]">
            View details
          </span>
          <span className="w-7 h-7 rounded-full bg-white/90 group-hover:bg-[#007AFF] text-[#007AFF] group-hover:text-white flex items-center justify-center transition-all duration-200 border border-white/95 group-hover:border-[#007AFF] shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_2px_4px_rgba(0,0,0,0.06)]">
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </article>
  );
};
