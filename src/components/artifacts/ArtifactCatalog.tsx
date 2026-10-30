'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search, X, RotateCcw, SlidersHorizontal } from 'lucide-react';
import { Artifact } from '@/types/artifact';
import { Category } from '@/types/category';
import { Era } from '@/types/era';
import { filterAndSearchArtifacts, FilterOptions } from '@/lib/search';
import { ArtifactGrid } from './ArtifactGrid';

const PAGE_SIZE = 24;

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

  const initialQuery    = searchParams.get('q') || '';
  const initialCategory = searchParams.get('category') || 'all';
  const initialEra      = searchParams.get('era') || 'all';
  const initialSort     = (searchParams.get('sort') as FilterOptions['sortBy']) || (initialQuery ? 'relevance' : 'date-asc');

  const [query,            setQuery]            = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedEra,      setSelectedEra]      = useState(initialEra);
  const [sortBy,           setSortBy]           = useState<FilterOptions['sortBy']>(initialSort);
  const [visibleCount,     setVisibleCount]     = useState(PAGE_SIZE);
  const [filtersOpen,      setFiltersOpen]      = useState(false);

  const filterKey = `${query}|${selectedCategory}|${selectedEra}|${sortBy}`;
  const [prevFilterKey, setPrevFilterKey] = useState(filterKey);
  if (filterKey !== prevFilterKey) {
    setPrevFilterKey(filterKey);
    setVisibleCount(PAGE_SIZE);
  }

  const updateUrlParams = useCallback(
    (newParams: { q?: string; category?: string; era?: string; sort?: string }) => {
      const params = new URLSearchParams();
      if (newParams.q?.trim())                             params.set('q', newParams.q.trim());
      if (newParams.category && newParams.category !== 'all') params.set('category', newParams.category);
      if (newParams.era && newParams.era !== 'all')           params.set('era', newParams.era);
      if (newParams.sort && newParams.sort !== 'date-asc')    params.set('sort', newParams.sort);
      const qs = params.toString();
      router.replace(qs ? `/artifacts?${qs}` : '/artifacts', { scroll: false });
    },
    [router]
  );

  const filteredArtifacts = useMemo(() =>
    filterAndSearchArtifacts(initialArtifacts, { query, category: selectedCategory, era: selectedEra, sortBy }),
    [initialArtifacts, query, selectedCategory, selectedEra, sortBy]
  );

  const displayedArtifacts = useMemo(() =>
    filteredArtifacts.slice(0, visibleCount),
    [filteredArtifacts, visibleCount]
  );

  const hasActiveFilters = query.trim() !== '' || selectedCategory !== 'all' || selectedEra !== 'all';

  const handleResetFilters = () => {
    setQuery(''); setSelectedCategory('all'); setSelectedEra('all');
    setSortBy('date-asc'); setVisibleCount(PAGE_SIZE);
    router.replace('/artifacts', { scroll: false });
  };

  const activeCategoryObj = categories.find((c) => c.slug === selectedCategory);
  const activeEraObj      = eras.find((e) => e.slug === selectedEra);

  return (
    <div className="space-y-8">

      {/* ── Apple iOS 26 Liquid Glass Control Center ─────────────── */}
      <div className="glass-card rounded-[26px] p-5 sm:p-6 space-y-4">

        {/* Row 1: Search + Controls */}
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">

          {/* iOS Cupertino Search Field */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#007AFF]" />
            <input
              type="text"
              value={query}
              onChange={(e) => {
                const val = e.target.value;
                setQuery(val);
                const newSort = sortBy === 'date-asc' && val.trim() ? 'relevance' : sortBy;
                if (newSort !== sortBy) setSortBy(newSort);
                updateUrlParams({ q: val, category: selectedCategory, era: selectedEra, sort: newSort });
              }}
              placeholder="Search by name, dynasty, material, or findspot..."
              className="glass-input w-full pl-10 pr-10 py-2.5 text-[14px] placeholder-[#8E8E93]"
            />
            {query && (
              <button
                onClick={() => {
                  setQuery('');
                  updateUrlParams({ q: '', category: selectedCategory, era: selectedEra, sort: sortBy });
                }}
                type="button"
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#8E8E93] hover:text-[#000000] rounded-full transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Sort & Filter Controls */}
          <div className="flex items-center gap-2.5 shrink-0">
            <select
              value={sortBy}
              onChange={(e) => {
                const val = e.target.value as FilterOptions['sortBy'];
                setSortBy(val);
                updateUrlParams({ q: query, category: selectedCategory, era: selectedEra, sort: val });
              }}
              className="text-[13px] font-semibold bg-white/80 text-[#000000] border border-white/95 shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_2px_8px_rgba(0,0,0,0.04)] rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#007AFF]/25 cursor-pointer appearance-none pr-8 bg-no-repeat active:scale-95 transition-transform"
              style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238E8E93' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")", backgroundPosition: 'right 12px center' }}
              aria-label="Sort artifacts"
            >
              <option value="relevance">Best Match</option>
              <option value="date-asc">Oldest First</option>
              <option value="date-desc">Most Recent</option>
              <option value="title-asc">A → Z</option>
              <option value="title-desc">Z → A</option>
            </select>

            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              type="button"
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-[13px] font-semibold border transition-all duration-200 active:scale-95 ${
                filtersOpen || hasActiveFilters
                  ? 'bg-[#007AFF] text-white border-transparent shadow-[0_4px_14px_rgba(0,122,255,0.35)]'
                  : 'bg-white/80 border-white/95 text-[#6C6C70] hover:text-[#000000] shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_2px_8px_rgba(0,0,0,0.04)]'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filters</span>
              {hasActiveFilters && (
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
              )}
            </button>
          </div>
        </div>

        {/* Row 2: Expandable Frosted Filters Tray */}
        {filtersOpen && (
          <div className="pt-4 border-t border-black/5 grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Category */}
            <div className="space-y-1.5">
              <label htmlFor="category-select" className="text-[11px] font-semibold text-[#8E8E93] uppercase tracking-[0.06em] block">
                Exhibition Gallery
              </label>
              <select
                id="category-select"
                value={selectedCategory}
                onChange={(e) => {
                  const val = e.target.value;
                  setSelectedCategory(val);
                  updateUrlParams({ q: query, category: val, era: selectedEra, sort: sortBy });
                }}
                className="w-full text-[13.5px] font-medium bg-white/85 text-[#000000] border border-white/95 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#007AFF]/25 shadow-[inset_0_1px_1px_rgba(255,255,255,1)] cursor-pointer"
              >
                <option value="all">All Galleries ({initialArtifacts.length})</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.slug}>
                    {cat.title} ({cat.itemCountEstimate})
                  </option>
                ))}
              </select>
            </div>

            {/* Era */}
            <div className="space-y-1.5">
              <label htmlFor="era-select" className="text-[11px] font-semibold text-[#8E8E93] uppercase tracking-[0.06em] block">
                Historical Period
              </label>
              <select
                id="era-select"
                value={selectedEra}
                onChange={(e) => {
                  const val = e.target.value;
                  setSelectedEra(val);
                  updateUrlParams({ q: query, category: selectedCategory, era: val, sort: sortBy });
                }}
                className="w-full text-[13.5px] font-medium bg-white/85 text-[#000000] border border-white/95 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#007AFF]/25 shadow-[inset_0_1px_1px_rgba(255,255,255,1)] cursor-pointer"
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
        )}

        {/* Active Filter Chips */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-black/5">
            <span className="text-[11.5px] text-[#8E8E93] font-medium">Active:</span>

            {query && (
              <span className="glass-pill text-[11.5px] text-[#007AFF]">
                &ldquo;{query}&rdquo;
                <button
                  onClick={() => { setQuery(''); updateUrlParams({ q: '', category: selectedCategory, era: selectedEra, sort: sortBy }); }}
                  type="button" aria-label="Remove keyword filter"
                  className="hover:text-black"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {selectedCategory !== 'all' && activeCategoryObj && (
              <span className="glass-pill text-[11.5px] text-[#007AFF]">
                {activeCategoryObj.title}
                <button
                  onClick={() => { setSelectedCategory('all'); updateUrlParams({ q: query, category: 'all', era: selectedEra, sort: sortBy }); }}
                  type="button" aria-label="Remove category filter"
                  className="hover:text-black"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {selectedEra !== 'all' && activeEraObj && (
              <span className="glass-pill text-[11.5px] text-[#007AFF]">
                {activeEraObj.title}
                <button
                  onClick={() => { setSelectedEra('all'); updateUrlParams({ q: query, category: selectedCategory, era: 'all', sort: sortBy }); }}
                  type="button" aria-label="Remove era filter"
                  className="hover:text-black"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            <button
              onClick={handleResetFilters}
              type="button"
              className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#8E8E93] hover:text-[#007AFF] transition-colors ml-auto"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          </div>
        )}
      </div>

      {/* Results Count Banner */}
      <div className="flex items-center justify-between text-[13px] text-[#6C6C70] px-1 font-medium">
        <p>
          Displaying{' '}
          <span className="font-bold text-[#000000]">
            {Math.min(visibleCount, filteredArtifacts.length)}
          </span>
          {' '}of{' '}
          <span className="font-bold text-[#000000]">
            {filteredArtifacts.length}
          </span>
          {' '}authenticated objects
          {filteredArtifacts.length < initialArtifacts.length && (
            <span className="text-[#007AFF] ml-1.5 font-medium">
              ({initialArtifacts.length} total in archive)
            </span>
          )}
        </p>
      </div>

      {/* Artifacts Grid */}
      <ArtifactGrid artifacts={displayedArtifacts} />

      {/* Load More Button */}
      {visibleCount < filteredArtifacts.length && (
        <div className="pt-6 pb-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, filteredArtifacts.length))}
            type="button"
            className="glass-btn-secondary w-full sm:w-auto"
          >
            Load {Math.min(PAGE_SIZE, filteredArtifacts.length - visibleCount)} more artifacts
            <span className="text-[#8E8E93] font-normal ml-1">
              ({filteredArtifacts.length - visibleCount} remaining)
            </span>
          </button>
          <button
            onClick={() => setVisibleCount(filteredArtifacts.length)}
            type="button"
            className="text-[13px] font-semibold text-[#007AFF] hover:underline transition-colors"
          >
            Show all ({filteredArtifacts.length})
          </button>
        </div>
      )}
    </div>
  );
};
