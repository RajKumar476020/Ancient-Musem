import React from 'react';
import Link from 'next/link';
import { ArrowRight, Coins, CircleDot, Sparkles, Stamp, Flame, Landmark, Layers } from 'lucide-react';
import { Category } from '@/types/category';

interface CategoryBrowseProps {
  categories: Category[];
}

const categoryAccents: Record<string, { bg: string; color: string }> = {
  'ancient-coins':        { bg: 'rgba(0, 122, 255, 0.08)', color: '#007AFF' },
  'medieval-coins':       { bg: 'rgba(88, 86, 214, 0.08)', color: '#5856D6' },
  'hindu-deity-sculptures': { bg: 'rgba(162, 132, 94, 0.12)', color: '#936B3B' },
  'archaeological-seals': { bg: 'rgba(52, 199, 89, 0.08)', color: '#34C759' },
  'terracotta-figurines': { bg: 'rgba(255, 149, 0, 0.08)', color: '#FF9500' },
  'stone-sculptures':     { bg: 'rgba(142, 142, 147, 0.1)', color: '#636366' },
};

export const CategoryBrowse: React.FC<CategoryBrowseProps> = ({ categories }) => {
  const getIcon = (iconName: string, color: string) => {
    const cls = `w-5 h-5`;
    const style = { color };
    switch (iconName) {
      case 'CircleDot': return <CircleDot className={cls} style={style} />;
      case 'Coins':     return <Coins className={cls} style={style} />;
      case 'Sparkles':  return <Sparkles className={cls} style={style} />;
      case 'Stamp':     return <Stamp className={cls} style={style} />;
      case 'Flame':     return <Flame className={cls} style={style} />;
      case 'Landmark':  return <Landmark className={cls} style={style} />;
      default:          return <Layers className={cls} style={style} />;
    }
  };

  return (
    <section id="categories" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="glass-pill text-[11px]">
                Browse by Category
              </span>
            </div>
            <h2 className="text-[32px] sm:text-[40px] font-bold text-[#000000] leading-tight tracking-[-0.03em]">
              Exhibition Galleries
            </h2>
            <p className="text-[16px] text-[#6C6C70] mt-2 max-w-[560px] leading-relaxed">
              Six curated departments spanning ancient coinage, sacred sculpture, seals, and terracotta specimens.
            </p>
          </div>

          <Link
            href="/artifacts"
            className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#007AFF] hover:underline transition-all shrink-0 group"
          >
            <span>View all 571 objects</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* iOS 26 Liquid Glass Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const accent = categoryAccents[cat.slug] ?? { bg: 'rgba(0, 122, 255, 0.08)', color: '#007AFF' };
            return (
              <Link
                key={cat.id}
                href={`/categories/${cat.slug}`}
                className="group relative glass-card p-6 sm:p-7 flex flex-col justify-between h-full min-h-[270px] overflow-hidden active:scale-[0.985]"
              >
                <div>
                  {/* Apple Squircle Icon & Count Capsule */}
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-[18px] flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_4px_12px_rgba(0,0,0,0.04)] border border-white/95"
                      style={{ background: accent.bg }}
                    >
                      {getIcon(cat.iconName, accent.color)}
                    </div>
                    <span className="text-[11.5px] font-semibold text-[#6C6C70] bg-white/80 border border-white/90 shadow-[inset_0_1px_1px_rgba(255,255,255,1)] px-3 py-1 rounded-full">
                      {cat.itemCountEstimate} objects
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[18px] font-bold text-[#000000] group-hover:text-[#007AFF] transition-colors mb-2 leading-snug tracking-tight">
                    {cat.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13.5px] text-[#6C6C70] leading-relaxed line-clamp-3 min-h-[60px]">
                    {cat.shortDescription}
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between">
                  <span className="text-[12.5px] font-semibold text-[#007AFF]">
                    Explore gallery
                  </span>
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-200 group-hover:scale-110 shadow-[inset_0_1px_1px_rgba(255,255,255,1)]"
                    style={{
                      background: accent.bg,
                      borderColor: `${accent.color}35`,
                      color: accent.color,
                    }}
                  >
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
