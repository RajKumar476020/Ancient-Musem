import React from 'react';
import Link from 'next/link';
import { ArrowRight, Layers, Coins, CircleDot, Sparkles, Stamp, Flame, Landmark } from 'lucide-react';
import { Category } from '@/types/category';

interface CategoryBrowseProps {
  categories: Category[];
}

export const CategoryBrowse: React.FC<CategoryBrowseProps> = ({ categories }) => {
  // Map icons to categories
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'CircleDot':
        return <CircleDot className="w-5 h-5 text-[#8A6A43]" />;
      case 'Coins':
        return <Coins className="w-5 h-5 text-[#8A6A43]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#8A6A43]" />;
      case 'Stamp':
        return <Stamp className="w-5 h-5 text-[#8A6A43]" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-[#8A6A43]" />;
      case 'Landmark':
        return <Landmark className="w-5 h-5 text-[#8A6A43]" />;
      default:
        return <Layers className="w-5 h-5 text-[#8A6A43]" />;
    }
  };

  return (
    <section id="categories" className="py-20 bg-[#F8F8F5] border-b border-[#E7E5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-semibold text-[#8A6A43] uppercase tracking-widest block mb-2">
              Curated Collections
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#242424] tracking-tight">
              Browse by Category
            </h2>
          </div>
          <p className="text-sm text-[#6B6B65] mt-2 sm:mt-0 max-w-md">
            Organized across coinages, sacred iconography, seals, and monumental stone carvings.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/categories/${cat.slug}`}
              className="group bg-[#FFFFFF] rounded-xl border border-[#E7E5DF] p-6 hover:border-[#8A6A43]/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="p-3 bg-[#F0EFEA] rounded-lg inline-block mb-4 group-hover:bg-[#8A6A43]/10 transition-colors">
                  {getIcon(cat.iconName)}
                </div>

                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-lg font-semibold text-[#242424] group-hover:text-[#8A6A43] transition-colors">
                    {cat.title}
                  </h3>
                  <span className="text-xs font-medium text-[#6B6B65] bg-[#F0EFEA] px-2 py-0.5 rounded-full">
                    {cat.itemCountEstimate} {cat.itemCountEstimate === 1 ? 'object' : 'objects'}
                  </span>
                </div>

                <p className="text-sm text-[#6B6B65] leading-relaxed line-clamp-2">
                  {cat.shortDescription}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#E7E5DF]/70 flex items-center justify-between text-xs font-semibold text-[#8A6A43] group-hover:text-[#6E5333]">
                <span>Explore Category</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
