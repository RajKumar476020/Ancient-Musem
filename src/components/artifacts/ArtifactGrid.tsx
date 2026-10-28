import React from 'react';
import { Artifact } from '@/types/artifact';
import { ArtifactCard } from './ArtifactCard';

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
      <div className="py-16 text-center bg-[#FFFFFF] rounded-xl border border-[#E7E5DF] p-8 max-w-xl mx-auto">
        <p className="text-base text-[#242424] font-medium mb-2">{emptyMessage}</p>
        <p className="text-sm text-[#6B6B65]">
          Try broadening your search keywords or resetting category and historical era filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
