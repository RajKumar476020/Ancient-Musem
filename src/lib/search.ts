import { Artifact } from '@/types/artifact';

export interface FilterOptions {
  query?: string;
  category?: string;
  era?: string;
  sortBy?: 'date-asc' | 'date-desc' | 'title-asc' | 'title-desc';
}

/**
 * Normalizes strings by lowercasing, trimming, and replacing diacritics.
 */
function normalize(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

/**
 * Filters and sorts artifacts based on multi-attribute criteria.
 */
export function filterAndSearchArtifacts(
  artifacts: Artifact[],
  options: FilterOptions
): Artifact[] {
  let filtered = [...artifacts];

  // 1. Filter by category if selected
  if (options.category && options.category !== 'all') {
    filtered = filtered.filter((art) => art.categorySlug === options.category);
  }

  // 2. Filter by era if selected
  if (options.era && options.era !== 'all') {
    filtered = filtered.filter((art) => art.eraSlug === options.era);
  }

  // 3. Filter by search query
  if (options.query && options.query.trim() !== '') {
    const q = normalize(options.query);
    const queryTokens = q.split(/\s+/).filter(Boolean);

    filtered = filtered.filter((art) => {
      // Build searchable corpus for this artifact
      const corpus = normalize(
        [
          art.title,
          art.summary,
          art.description,
          art.civilization ?? '',
          art.dynasty ?? '',
          art.material ?? '',
          art.origin ?? '',
          art.discoverySite ?? '',
          art.currentCollection ?? '',
          ...art.quickFacts.map((f) => `${f.label} ${f.value}`),
          ...(art.interestingFacts ?? []),
          ...art.sections.map((s) => `${s.heading} ${s.body}`),
        ].join(' ')
      );

      // Require all tokens to match
      return queryTokens.every((token) => corpus.includes(token));
    });
  }

  // 4. Sort results
  const sortBy = options.sortBy ?? 'date-asc';
  filtered.sort((a, b) => {
    switch (sortBy) {
      case 'date-asc':
        return a.dateStart - b.dateStart;
      case 'date-desc':
        return b.dateEnd - a.dateEnd;
      case 'title-asc':
        return a.title.localeCompare(b.title);
      case 'title-desc':
        return b.title.localeCompare(a.title);
      default:
        return a.dateStart - b.dateStart;
    }
  });

  return filtered;
}
