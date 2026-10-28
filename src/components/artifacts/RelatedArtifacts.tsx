import React from 'react';
import { Artifact } from '@/types/artifact';
import { ArtifactCard } from './ArtifactCard';
import { Sparkles } from 'lucide-react';

interface RelatedArtifactsProps {
  artifacts: Artifact[];
}

export const RelatedArtifacts: React.FC<RelatedArtifactsProps> = ({ artifacts }) => {
  if (artifacts.length === 0) return null;

  return (
    <section className="pt-12 border-t border-[#E7E5DF]">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="w-5 h-5 text-[#8A6A43]" />
        <h2 className="text-xl sm:text-2xl font-semibold text-[#242424] tracking-tight">
          Related Historical Artifacts
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {artifacts.slice(0, 3).map((art) => (
          <ArtifactCard key={art.id} artifact={art} />
        ))}
      </div>
    </section>
  );
};
