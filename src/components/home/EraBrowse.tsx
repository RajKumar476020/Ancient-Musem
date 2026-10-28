import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { Era } from '@/types/era';

interface EraBrowseProps {
  eras: Era[];
}

export const EraBrowse: React.FC<EraBrowseProps> = ({ eras }) => {
  return (
    <section id="eras" className="py-20 bg-[#FFFFFF] border-b border-[#E7E5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-semibold text-[#8A6A43] uppercase tracking-widest block mb-2">
              Chronological Spectrum
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#242424] tracking-tight">
              Explore Historical Eras
            </h2>
          </div>
          <p className="text-sm text-[#6B6B65] mt-2 sm:mt-0 max-w-md">
            Journey from the 3rd millennium BCE Indus bronze age to the 17th-century Maratha sovereignty.
          </p>
        </div>

        {/* Timeline Horizontal / Stacked Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eras.map((era) => (
            <Link
              key={era.id}
              href={`/eras/${era.slug}`}
              className="group bg-[#F8F8F5] rounded-xl border border-[#E7E5DF] p-6 hover:border-[#8A6A43]/40 hover:bg-[#FFFFFF] hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E7E5DF] text-xs font-semibold text-[#8A6A43] mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{era.period}</span>
                </div>

                <h3 className="text-lg font-semibold text-[#242424] group-hover:text-[#8A6A43] transition-colors mb-2">
                  {era.title}
                </h3>

                <p className="text-sm text-[#6B6B65] leading-relaxed line-clamp-3">
                  {era.shortDescription}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#E7E5DF]/70 flex items-center justify-between text-xs font-semibold text-[#8A6A43] group-hover:text-[#6E5333]">
                <span>View Era Artifacts</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
