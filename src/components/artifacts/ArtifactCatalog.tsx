'use client';

import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search, X, RotateCcw, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { Artifact } from '@/types/artifact';
import { Category } from '@/types/category';
import { Era } from '@/types/era';
import { filterAndSearchArtifacts, FilterOptions } from '@/lib/search';
import { ArtifactGrid } from './ArtifactGrid';

interface ArtifactCatalogProps {
  initialArtifacts: Artifact[];
  categories: Category[];
  eras: Era[];
}

export const ArtifactCatalog: React.FC<ArtifactCatalogProps> = ({
  initialArtifacts,
  categories,
  eras,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Read initial states from URL query parameters
  const initialQuery = searchParams.get('q') || '';
  const initialCategory = searchParams.get('category') || 'all';
  const initialEra = searchParams.get('era') || 'all';
  const initialSort = (searchParams.get('sort') as FilterOptions['sortBy']) || 'date-asc';

  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedEra, setSelectedEra] = useState(initialEra);
  const [sortBy, setSortBy] = useState<FilterOptions['sortBy']>(initialSort);

  // Sync state with URL query parameters
  const updateUrlParams = useCallback(
    (newParams: { q?: string; category?: string; era?: string; sort?: string }) => {
      const params = new URLSearchParams();
      if (newParams.q && newParams.q.trim()) params.set('q', newParams.q.trim());
      if (newParams.category && newParams.category !== 'all') params.set('category', newParams.category);
      if (newParams.era && newParams.era !== 'all') params.set('era', newParams.era);
      if (newParams.sort && newParams.sort !== 'date-asc') params.set('sort', newParams.sort);

      const queryString = params.toString();
      const targetUrl = queryString ? `/artifacts?${queryString}` : '/artifacts';
      router.replace(targetUrl, { scroll: false });
    },
    [router]
  );

  // Filter and sort items dynamically
  const filteredArtifacts = useMemo(() => {
    return filterAndSearchArtifacts(initialArtifacts, {
      query,
      category: selectedCategory,
      era: selectedEra,
      sortBy,
    });
  }, [initialArtifacts, query, selectedCategory, selectedEra, sortBy]);

  // Check if any filters are active
  const hasActiveFilters =
    query.trim() !== '' || selectedCategory !== 'all' || selectedEra !== 'all';

  const handleResetFilters = () => {
    setQuery('');
    setSelectedCategory('all');
    setSelectedEra('all');
    setSortBy('date-asc');
    router.replace('/artifacts', { scroll: false });
  };

  const activeCategoryObj = categories.find((c) => c.slug === selectedCategory);
  const activeEraObj = eras.find((e) => e.slug === selectedEra);

  return (
    <div className="space-y-8">
      {/* Search & Filter Controls Bar */}
      <div className="bg-[#FFFFFF] rounded-2xl border border-[#E7E5DF] p-5 sm:p-6 shadow-sm space-y-4">
        {/* Row 1: Search Bar & Sort Dropdown */}
        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A6A43]" />
            <input
              type="text"
              value={query}
              onChange={(e) => {
                const val = e.target.value;
                setQuery(val);
                updateUrlParams({ q: val, category: selectedCategory, era: selectedEra, sort: sortBy });
              }}
              placeholder="Search by artifact name, dynasty, material, or keyword..."
              className="w-full pl-10 pr-10 py-2.5 bg-[#F8F8F5] text-[#242424] placeholder-[#6B6B65] text-sm rounded-lg border border-[#E7E5DF] focus:outline-none focus:ring-2 focus:ring-[#8A6A43] focus:border-transparent transition-all"
            />
            {query && (
              <button
                onClick={() => {
                  setQuery('');
                  updateUrlParams({ q: '', category: selectedCategory, era: selectedEra, sort: sortBy });
                }}
                type="button"
                aria-label="Clear search input"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#6B6B65] hover:text-[#242424] rounded focus:outline-none"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 shrink-0">
            <ArrowUpDown className="w-4 h-4 text-[#8A6A43]" />
            <label htmlFor="sort-selector" className="text-xs font-medium text-[#6B6B65]">
              Sort by:
            </label>
            <select
              id="sort-selector"
              value={sortBy}
              onChange={(e) => {
                const val = e.target.value as FilterOptions['sortBy'];
                setSortBy(val);
                updateUrlParams({ q: query, category: selectedCategory, era: selectedEra, sort: val });
              }}
              className="text-xs sm:text-sm font-medium bg-[#F8F8F5] text-[#242424] border border-[#E7E5DF] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#8A6A43]"
            >
              <option value="date-asc">Chronological (Oldest First)</option>
              <option value="date-desc">Chronological (Most Recent)</option>
              <option value="title-asc">Alphabetical (A to Z)</option>
              <option value="title-desc">Alphabetical (Z to A)</option>
            </select>
          </div>
        </div>

        {/* Row 2: Category and Era Filter Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E7E5DF]">
          {/* Category Dropdown */}
          <div className="space-y-1.5">
            <label htmlFor="category-select" className="text-xs font-semibold text-[#6B6B65] uppercase tracking-wider block">
              Filter by Category
            </label>
            <select
              id="category-select"
              value={selectedCategory}
              onChange={(e) => {
                const val = e.target.value;
                setSelectedCategory(val);
                updateUrlParams({ q: query, category: val, era: selectedEra, sort: sortBy });
              }}
              className="w-full text-sm bg-[#F8F8F5] text-[#242424] border border-[#E7E5DF] rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#8A6A43]"
            >
              <option value="all">All Categories ({initialArtifacts.length})</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.slug}>
                  {cat.title} ({cat.itemCountEstimate})
                </option>
              ))}
            </select>
          </div>

          {/* Era Dropdown */}
          <div className="space-y-1.5">
            <label htmlFor="era-select" className="text-xs font-semibold text-[#6B6B65] uppercase tracking-wider block">
              Filter by Historical Era
            </label>
            <select
              id="era-select"
              value={selectedEra}
              onChange={(e) => {
                const val = e.target.value;
                setSelectedEra(val);
                updateUrlParams({ q: query, category: selectedCategory, era: val, sort: sortBy });
              }}
              className="w-full text-sm bg-[#F8F8F5] text-[#242424] border border-[#E7E5DF] rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#8A6A43]"
            >
              <option value="all">All Historical Eras</option>
              {eras.map((era) => (
                <option key={era.id} value={era.slug}>
                  {era.title} ({era.period})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 3: Active Filter Chips & Reset Action */}
        {hasActiveFilters && (
          <div className="pt-3 border-t border-[#E7E5DF] flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium text-[#6B6B65]">Active Filters:</span>

              {query && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F0EFEA] text-[#242424] rounded-full text-xs font-medium">
                  Keyword: &quot;{query}&quot;
                  <button
                    onClick={() => {
                      setQuery('');
                      updateUrlParams({ q: '', category: selectedCategory, era: selectedEra, sort: sortBy });
                    }}
                    type="button"
                    aria-label="Remove keyword filter"
                    className="hover:text-[#8A6A43]"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </span>
              )}

              {selectedCategory !== 'all' && activeCategoryObj && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F0EFEA] text-[#242424] rounded-full text-xs font-medium">
                  Category: {activeCategoryObj.title}
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      updateUrlParams({ q: query, category: 'all', era: selectedEra, sort: sortBy });
                    }}
                    type="button"
                    aria-label="Remove category filter"
                    className="hover:text-[#8A6A43]"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </span>
              )}

              {selectedEra !== 'all' && activeEraObj && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F0EFEA] text-[#242424] rounded-full text-xs font-medium">
                  Era: {activeEraObj.title}
                  <button
                    onClick={() => {
                      setSelectedEra('all');
                      updateUrlParams({ q: query, category: selectedCategory, era: 'all', sort: sortBy });
                    }}
                    type="button"
                    aria-label="Remove era filter"
                    className="hover:text-[#8A6A43]"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </span>
              )}
            </div>

            <button
              onClick={handleResetFilters}
              type="button"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#8A6A43] hover:text-[#6E5333] transition-colors py-1 px-2.5 rounded hover:bg-[#F0EFEA]"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          </div>
        )}
      </div>

      {/* Result Status Count */}
      <div className="flex items-center justify-between text-sm text-[#6B6B65]">
        <p>
          Showing <span className="font-semibold text-[#242424]">{filteredArtifacts.length}</span> of{' '}
          <span className="font-semibold text-[#242424]">{initialArtifacts.length}</span> historical artifacts
        </p>
      </div>

      {/* Artifact Cards Grid */}
      <ArtifactGrid artifacts={filteredArtifacts} />
    </div>
  );
};
