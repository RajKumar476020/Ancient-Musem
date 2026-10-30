import React from 'react';
import Link from 'next/link';
import { Artifact } from '@/types/artifact';
import { RecommendationWithContext } from '@/lib/recommendations';
import { ArtifactCard } from './ArtifactCard';
import { ArrowRight } from 'lucide-react';

interface RelatedArtifactsProps {
  artifacts?: Artifact[];
  recommendations?: RecommendationWithContext[];
}

export const RelatedArtifacts: React.FC<RelatedArtifactsProps> = ({
  artifacts,
  recommendations,
}) => {
  const items = recommendations
    ? recommendations.map((r) => ({ artifact: r.artifact, contextTag: r.contextTag }))
    : (artifacts ?? []).map((a) => ({ artifact: a, contextTag: undefined }));

  if (items.length === 0) return null;

  return (
    <section className="pt-16 sm:pt-20 border-t border-black/5">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="glass-pill text-[11px] text-[#007AFF]">
              You May Also Explore
            </span>
          </div>
          <h2 className="text-[28px] sm:text-[34px] font-bold text-[#000000] leading-tight tracking-[-0.03em]">
            Related Artifacts
          </h2>
        </div>
        <p className="text-[14px] text-[#6C6C70] max-w-sm">
          Selected by iconographic lineage, dynastic continuity, and material tradition.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {items.slice(0, 3).map(({ artifact, contextTag }) => (
          <ArtifactCard
            key={artifact.id}
            artifact={artifact}
            contextTag={contextTag}
          />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/artifacts"
          className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#007AFF] hover:underline transition-colors group"
        >
          <span>Browse the complete collection</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
};
