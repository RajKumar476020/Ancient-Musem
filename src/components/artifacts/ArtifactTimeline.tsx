import React from 'react';
import { ArtifactTimelineMilestone } from '@/types/artifact';
import { Clock } from 'lucide-react';

interface ArtifactTimelineProps {
  milestones: ArtifactTimelineMilestone[];
}

export const ArtifactTimeline: React.FC<ArtifactTimelineProps> = ({ milestones }) => {
  if (!milestones || milestones.length === 0) return null;

  return (
    <div className="bg-[#FFFFFF] rounded-xl border border-[#E7E5DF] p-6 sm:p-8">
      <h3 className="text-lg font-semibold text-[#242424] mb-6 flex items-center gap-2 border-b border-[#E7E5DF] pb-3">
        <Clock className="w-5 h-5 text-[#8A6A43]" />
        <span>Verified Historical Timeline</span>
      </h3>

      <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2.5 sm:before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#E7E5DF]">
        {milestones.map((milestone, idx) => (
          <div key={idx} className="relative group">
            {/* Dot indicator */}
            <div className="absolute -left-[27px] sm:-left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-[#FFFFFF] border-2 border-[#8A6A43] group-hover:bg-[#8A6A43] transition-colors" />

            {/* Date Tag */}
            <span className="inline-block px-2.5 py-0.5 rounded text-xs font-semibold bg-[#F0EFEA] text-[#8A6A43] mb-1.5">
              {milestone.date}
            </span>

            {/* Title */}
            <h4 className="text-base font-semibold text-[#242424] mb-1">
              {milestone.title}
            </h4>

            {/* Description */}
            <p className="text-sm text-[#6B6B65] leading-relaxed">
              {milestone.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
