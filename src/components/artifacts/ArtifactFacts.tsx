import React from 'react';
import { ArtifactFact } from '@/types/artifact';
import { FileText } from 'lucide-react';

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
  const allSpecifications: ArtifactFact[] = [
    { label: 'Date', value: dateDisplay },
    ...(material     ? [{ label: 'Material', value: material }]             : []),
    ...(dimensions   ? [{ label: 'Dimensions', value: dimensions }]         : []),
    ...(origin       ? [{ label: 'Origin / Region', value: origin }]        : []),
    ...(discoverySite? [{ label: 'Discovery Site', value: discoverySite }]  : []),
    ...(currentCollection ? [{ label: 'Collection', value: currentCollection }] : []),
    ...facts,
  ];

  return (
    <div className="glass-card rounded-[24px] overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-black/5">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-[#007AFF]" />
          <h3 className="text-[14.5px] font-bold text-[#000000] tracking-tight">
            Physical Specifications
          </h3>
        </div>
        <span className="glass-pill text-[10.5px] text-[#007AFF]">
          Verified
        </span>
      </div>

      {/* Specs List */}
      <dl className="divide-y divide-black/5">
        {allSpecifications.map((item, index) => (
          <div
            key={index}
            className="px-5 py-3.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 hover:bg-white/80 transition-colors"
          >
            <dt className="text-[11.5px] font-semibold text-[#8E8E93] uppercase tracking-[0.05em] shrink-0 min-w-[120px]">
              {item.label}
            </dt>
            <dd className="text-[13.5px] text-[#000000] font-medium sm:text-right leading-snug">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};
