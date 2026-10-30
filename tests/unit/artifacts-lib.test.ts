import { describe, it, expect } from 'vitest';
import {
  getAllArtifacts,
  getArtifactBySlug,
  getArtifactsByCategory,
  getArtifactsByEra,
  getRelatedArtifacts,
  getRecommendedArtifactsWithContext,
  getAllCategories,
  getCategoryBySlug,
  getAllEras,
  getEraBySlug,
} from '@/lib/artifacts';
import { filterAndSearchArtifacts } from '@/lib/search';

describe('Artifact Data Access Library', () => {
  it('should retrieve all 571 artifacts', () => {
    const all = getAllArtifacts();
    expect(all.length).toBe(571);
  });

  it('should retrieve an individual artifact by valid slug', () => {
    const art = getArtifactBySlug('chola-nataraja-bronze');
    expect(art).toBeDefined();
    expect(art?.title).toContain('Nataraja');
  });

  it('should return undefined for invalid slug', () => {
    const art = getArtifactBySlug('nonexistent-artifact');
    expect(art).toBeUndefined();
  });

  it('should filter artifacts by category', () => {
    const coins = getArtifactsByCategory('ancient-coins');
    expect(coins.length).toBe(104);
  });

  it('should filter artifacts by era', () => {
    const indus = getArtifactsByEra('indus-valley');
    expect(indus.length).toBe(8);
  });

  it('should retrieve related artifacts without including the target itself', () => {
    const target = getArtifactBySlug('chola-nataraja-bronze')!;
    const related = getRelatedArtifacts(target, 3);
    expect(related.length).toBeGreaterThan(0);
    expect(related.some((r) => r.slug === target.slug)).toBe(false);
  });

  it('should calculate category counts accurately and retrieve by slug', () => {
    const categories = getAllCategories();
    const ancientCoinsCat = categories.find((c) => c.slug === 'ancient-coins');
    expect(ancientCoinsCat).toBeDefined();
    expect(ancientCoinsCat?.itemCountEstimate).toBe(104);

    const singleCat = getCategoryBySlug('ancient-coins');
    expect(singleCat).toBeDefined();
    expect(singleCat?.slug).toBe('ancient-coins');

    const allEras = getAllEras();
    expect(allEras.length).toBeGreaterThanOrEqual(7);

    const singleEra = getEraBySlug('indus-valley');
    expect(singleEra).toBeDefined();
    expect(singleEra?.slug).toBe('indus-valley');
  });
});

describe('Search and Filtering Library', () => {
  const all = getAllArtifacts();

  it('should filter by search keyword case-insensitively', () => {
    const results = filterAndSearchArtifacts(all, { query: 'shiva' });
    expect(results.length).toBeGreaterThan(0);
    expect(results.some((r) => r.title.toLowerCase().includes('shiva'))).toBe(true);
  });

  it('should combine category and search query', () => {
    const results = filterAndSearchArtifacts(all, {
      category: 'ancient-coins',
      query: 'gupta',
    });
    expect(results.length).toBeGreaterThanOrEqual(2);
    results.forEach((r) => {
      expect(r.categorySlug).toBe('ancient-coins');
    });
  });

  it('should sort chronologically by oldest date first', () => {
    const results = filterAndSearchArtifacts(all, { sortBy: 'date-asc' });
    expect(results[0].dateStart).toBeLessThanOrEqual(results[1].dateStart);
    // Earliest should be Harappan / Indus Valley
    expect(results[0].eraSlug).toBe('indus-valley');
  });

  it('should sort alphabetically by title', () => {
    const results = filterAndSearchArtifacts(all, { sortBy: 'title-asc' });
    expect(results[0].title.localeCompare(results[1].title)).toBeLessThanOrEqual(0);
  });

  it('should sort by relevance when query is provided', () => {
    const results = filterAndSearchArtifacts(all, { query: 'nataraja', sortBy: 'relevance' });
    expect(results.length).toBeGreaterThan(0);
    // Highest scored result should contain Nataraja directly in title
    expect(results[0].title.toLowerCase()).toContain('nataraja');
  });

  it('should generate intelligent recommendations with rich curatorial context tags', () => {
    const nataraja = getArtifactBySlug('chola-nataraja-bronze')!;
    const recs = getRecommendedArtifactsWithContext(nataraja, 3);
    expect(recs.length).toBe(3);
    expect(recs.every((r) => r.artifact.slug !== nataraja.slug)).toBe(true);
    expect(recs.every((r) => Boolean(r.contextTag))).toBe(true);
    expect(recs.every((r) => r.score > 0)).toBe(true);
  });
});
