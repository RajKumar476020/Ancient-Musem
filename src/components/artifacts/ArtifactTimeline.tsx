import React from 'react';
import { ArtifactTimelineMilestone } from '@/types/artifact';
import { History } from 'lucide-react';

interface ArtifactTimelineProps {
  milestones: ArtifactTimelineMilestone[];
}

export const ArtifactTimeline: React.FC<ArtifactTimelineProps> = ({ milestones }) => {
  if (!milestones || milestones.length === 0) return null;

  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-2.5 mb-7">
        <History className="w-5 h-5 text-[#007AFF]" />
        <h3 className="text-[19px] font-bold text-[#000000] tracking-tight">
          Historical Chronology
        </h3>
      </div>

      {/* Timeline */}
      <div className="relative pl-7 space-y-7 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-[1.5px] before:bg-black/10">
        {milestones.map((milestone, idx) => (
          <div key={idx} className="relative group">
            {/* Dot */}
            <div className="absolute -left-[28px] top-1 w-3.5 h-3.5 rounded-full bg-[#FFFFFF] border-2 border-[#007AFF] group-hover:bg-[#007AFF] transition-colors shadow-[0_0_0_3px_rgba(0,122,255,0.15)]" />

            {/* Date */}
            <span className="inline-block px-3 py-0.5 rounded-full text-[11.5px] font-mono font-semibold bg-[#007AFF]/10 text-[#007AFF] border border-[#007AFF]/20 mb-2">
              {milestone.date}
            </span>

            {/* Title */}
            <h4 className="text-[15.5px] font-bold text-[#000000] group-hover:text-[#007AFF] transition-colors mb-1.5 leading-snug tracking-tight">
              {milestone.title}
            </h4>

            {/* Description */}
            <p className="text-[14px] text-[#6C6C70] leading-relaxed">
              {milestone.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
