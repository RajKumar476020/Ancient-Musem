import React from 'react';
import { ArtifactFact } from '@/types/artifact';

interface ArtifactFactsProps {
  facts: ArtifactFact[];
  dateDisplay: string;
  material?: string;
  origin?: string;
  discoverySite?: string;
  currentCollection?: string;
  dimensions?: string;
}

export const ArtifactFacts: React.FC<ArtifactFactsProps> = ({
  facts,
  dateDisplay,
  material,
  origin,
  discoverySite,
  currentCollection,
  dimensions,
}) => {
  // Combine core metadata fields with quick facts, avoiding empty values
  const allSpecifications = [
    { label: 'Estimated Date', value: dateDisplay },
    ...(material ? [{ label: 'Material', value: material }] : []),
    ...(dimensions ? [{ label: 'Dimensions', value: dimensions }] : []),
    ...(origin ? [{ label: 'Place of Origin', value: origin }] : []),
    ...(discoverySite ? [{ label: 'Discovery / Findspot', value: discoverySite }] : []),
    ...(currentCollection ? [{ label: 'Holding Institution', value: currentCollection }] : []),
    ...facts,
  ];

  return (
    <div className="bg-[#FFFFFF] rounded-xl border border-[#E7E5DF] p-6 shadow-sm">
      <h3 className="text-base font-semibold text-[#242424] tracking-tight border-b border-[#E7E5DF] pb-3 mb-4 flex items-center justify-between">
        <span>Object Specifications</span>
        <span className="text-xs uppercase tracking-wider text-[#8A6A43] font-medium">Quick Facts</span>
      </h3>

      <dl className="space-y-3.5 text-sm">
        {allSpecifications.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 py-1 border-b border-[#F0EFEA] last:border-b-0"
          >
            <dt className="text-[#6B6B65] font-medium min-w-[130px] shrink-0">
              {item.label}
            </dt>
            <dd className="text-[#242424] font-semibold text-right sm:text-right">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};
