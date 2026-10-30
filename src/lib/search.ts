import { Artifact } from '@/types/artifact';

export interface FilterOptions {
  query?: string;
  category?: string;
  era?: string;
  sortBy?: 'relevance' | 'date-asc' | 'date-desc' | 'title-asc' | 'title-desc';
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
 * Calculates relevance score for an artifact given search query tokens.
 * Employs weighted field scoring:
 * - Title match: highest weight (+150 for phrase, +50 per token)
 * - Dynasty / Civilization: high weight (+35 per token)
 * - Category / Era / Material: medium weight (+25 per token)
 * - Quick facts / Dimensions: context weight (+15 per token)
 * - Summary / Description: body weight (+8 per token)
 */
function calculateRelevanceScore(
  art: Artifact,
  queryTokens: string[],
  rawQuery: string
): number {
  let score = 0;
  const normTitle = normalize(art.title);
  const normDynasty = normalize(art.dynasty ?? art.civilization ?? '');
  const normMaterial = normalize(art.material ?? '');
  const normCategory = normalize(art.categorySlug.replace(/-/g, ' '));
  const normEra = normalize(art.eraSlug.replace(/-/g, ' '));
  const normFacts = normalize(art.quickFacts.map((f) => `${f.label} ${f.value}`).join(' '));
  const normSummary = normalize(art.summary);
  const normDesc = normalize(art.description);

  // Exact phrase matches
  if (normTitle === rawQuery) {
    score += 250;
  } else if (normTitle.includes(rawQuery)) {
    score += 150;
  }

  if (normDynasty === rawQuery) {
    score += 80;
  } else if (normDynasty.includes(rawQuery)) {
    score += 40;
  }

  // Token matches
  for (const token of queryTokens) {
    if (normTitle.includes(token)) {
      score += 50;
      // Word start bonus
      if (new RegExp(`\\b${token}`, 'i').test(normTitle)) {
        score += 20;
      }
    }
    if (normDynasty.includes(token)) score += 35;
    if (normCategory.includes(token)) score += 25;
    if (normEra.includes(token)) score += 20;
    if (normMaterial.includes(token)) score += 25;
    if (normFacts.includes(token)) score += 15;
    if (normSummary.includes(token)) score += 10;
    if (normDesc.includes(token)) score += 5;
  }

  return score;
}

/**
 * Filters and sorts artifacts based on multi-attribute criteria and intelligent relevance scoring.
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

  // 3. Filter by search query with corpus matching
  const hasQuery = Boolean(options.query && options.query.trim() !== '');
  const scoredMap = new Map<string, number>();

  if (hasQuery) {
    const rawQuery = normalize(options.query!);
    const queryTokens = rawQuery.split(/\s+/).filter(Boolean);

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
      const matchesAll = queryTokens.every((token) => corpus.includes(token));
      if (matchesAll) {
        const score = calculateRelevanceScore(art, queryTokens, rawQuery);
        scoredMap.set(art.slug, score);
      }
      return matchesAll;
    });
  }

  // 4. Sort results
  const sortBy = options.sortBy ?? (hasQuery ? 'relevance' : 'date-asc');

  filtered.sort((a, b) => {
    switch (sortBy) {
      case 'relevance': {
        const scoreA = scoredMap.get(a.slug) ?? 0;
        const scoreB = scoredMap.get(b.slug) ?? 0;
        if (scoreB !== scoreA) {
          return scoreB - scoreA;
        }
        return a.dateStart - b.dateStart;
      }
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
