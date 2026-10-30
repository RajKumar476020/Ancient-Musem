import React from 'react';
import { Artifact } from '@/types/artifact';
import { ArtifactCard } from './ArtifactCard';
import { Search } from 'lucide-react';

interface ArtifactGridProps {
  artifacts: Artifact[];
  emptyMessage?: string;
}

export const ArtifactGrid: React.FC<ArtifactGridProps> = ({
  artifacts,
  emptyMessage = 'No historical artifacts match your selected criteria.',
}) => {
  if (artifacts.length === 0) {
    return (
      <div className="py-20 text-center glass-card p-8 max-w-lg mx-auto rounded-[24px]">
        <div className="w-12 h-12 rounded-[18px] bg-[#007AFF]/10 flex items-center justify-center mx-auto mb-4 border border-[#007AFF]/20">
          <Search className="w-5 h-5 text-[#007AFF]" />
        </div>
        <p className="text-[16px] font-bold text-[#000000] mb-2">{emptyMessage}</p>
        <p className="text-[13.5px] text-[#6C6C70] leading-relaxed">
          Try expanding your query or clearing active filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
      {artifacts.map((artifact, index) => (
        <ArtifactCard
          key={artifact.id}
          artifact={artifact}
          priority={index < 3}
        />
      ))}
    </div>
  );
};
