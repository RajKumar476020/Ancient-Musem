import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { Era } from '@/types/era';

interface EraBrowseProps {
  eras: Era[];
}

export const EraBrowse: React.FC<EraBrowseProps> = ({ eras }) => {
  return (
    <section id="eras" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="glass-pill text-[11px]">
                <Clock className="w-3.5 h-3.5 text-[#007AFF]" />
                Chronological Journey
              </span>
            </div>
            <h2 className="text-[32px] sm:text-[40px] font-bold text-[#000000] leading-tight tracking-[-0.03em]">
              Historical Eras
            </h2>
            <p className="text-[16px] text-[#6C6C70] mt-2 max-w-[560px] leading-relaxed">
              Spanning five millennia — from the Bronze Age Indus Valley to classical Gupta and imperial Mughal reigns.
            </p>
          </div>

          <Link
            href="/artifacts"
            className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#007AFF] hover:underline transition-all shrink-0 group"
          >
            <span>Explore chronological timeline</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* iOS 26 Liquid Glass Era Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eras.map((era, index) => {
            const num = String(index + 1).padStart(2, '0');
            return (
              <Link
                key={era.id}
                href={`/eras/${era.slug}`}
                className="group glass-card p-6 sm:p-7 flex flex-col justify-between h-full min-h-[270px] active:scale-[0.985]"
              >
                <div>
                  {/* Era Number & Period Pill */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-[18px] bg-[#007AFF]/10 border border-[#007AFF]/20 flex items-center justify-center font-mono font-bold text-[#007AFF] text-[15px] shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_4px_12px_rgba(0,0,0,0.04)]">
                      {num}
                    </div>
                    <span className="text-[11.5px] font-mono font-semibold text-[#6C6C70] bg-white/80 border border-white/90 shadow-[inset_0_1px_1px_rgba(255,255,255,1)] px-3 py-1 rounded-full text-right leading-tight max-w-[140px]">
                      {era.period}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[18px] font-bold text-[#000000] group-hover:text-[#007AFF] transition-colors mb-2 leading-snug tracking-tight">
                    {era.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13.5px] text-[#6C6C70] leading-relaxed line-clamp-3 min-h-[60px]">
                    {era.shortDescription}
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between">
                  <span className="text-[12.5px] font-semibold text-[#007AFF]">
                    Explore era
                  </span>
                  <span className="w-7 h-7 rounded-full bg-[#007AFF]/10 border border-[#007AFF]/20 text-[#007AFF] group-hover:bg-[#007AFF] group-hover:text-white flex items-center justify-center transition-all duration-200 group-hover:scale-110 shadow-[inset_0_1px_1px_rgba(255,255,255,1)]">
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
