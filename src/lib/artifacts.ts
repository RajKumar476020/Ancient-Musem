import { artifacts } from '@/data/artifacts';
import { categories } from '@/data/categories';
import { eras } from '@/data/eras';
import { Artifact } from '@/types/artifact';
import { Category } from '@/types/category';
import { Era } from '@/types/era';

/**
 * Returns all published artifacts.
 */
export function getAllArtifacts(): Artifact[] {
  return artifacts.filter((a) => a.status === 'published');
}

/**
 * Retrieves a single artifact by slug.
 */
export function getArtifactBySlug(slug: string): Artifact | undefined {
  return artifacts.find((a) => a.slug === slug && a.status === 'published');
}

/**
 * Retrieves all artifacts in a given category.
 */
export function getArtifactsByCategory(categorySlug: string): Artifact[] {
  return artifacts.filter(
    (a) => a.categorySlug === categorySlug && a.status === 'published'
  );
}

/**
 * Retrieves all artifacts in a given historical era.
 */
export function getArtifactsByEra(eraSlug: string): Artifact[] {
  return artifacts.filter(
    (a) => a.eraSlug === eraSlug && a.status === 'published'
  );
}

/**
 * Retrieves related artifacts for a given artifact.
 * Uses explicit relatedArtifactSlugs first, and fills remaining slots with
 * items sharing the same era or category.
 */
export function getRelatedArtifacts(artifact: Artifact, limit = 4): Artifact[] {
  const result: Artifact[] = [];
  const addedSlugs = new Set<string>([artifact.slug]);

  // 1. Add explicitly linked artifacts
  for (const relSlug of artifact.relatedArtifactSlugs) {
    if (result.length >= limit) break;
    const rel = getArtifactBySlug(relSlug);
    if (rel && !addedSlugs.has(rel.slug)) {
      result.push(rel);
      addedSlugs.add(rel.slug);
    }
  }

  // 2. Add artifacts from the same era
  if (result.length < limit) {
    const sameEra = getArtifactsByEra(artifact.eraSlug);
    for (const item of sameEra) {
      if (result.length >= limit) break;
      if (!addedSlugs.has(item.slug)) {
        result.push(item);
        addedSlugs.add(item.slug);
      }
    }
  }

  // 3. Add artifacts from the same category
  if (result.length < limit) {
    const sameCategory = getArtifactsByCategory(artifact.categorySlug);
    for (const item of sameCategory) {
      if (result.length >= limit) break;
      if (!addedSlugs.has(item.slug)) {
        result.push(item);
        addedSlugs.add(item.slug);
      }
    }
  }

  // 4. Fill remaining with any artifacts
  if (result.length < limit) {
    for (const item of artifacts) {
      if (result.length >= limit) break;
      if (!addedSlugs.has(item.slug)) {
        result.push(item);
        addedSlugs.add(item.slug);
      }
    }
  }

  return result;
}

/**
 * Retrieves all categories with dynamically computed item counts.
 */
export function getAllCategories(): Category[] {
  return categories.map((cat) => ({
    ...cat,
    itemCountEstimate: getArtifactsByCategory(cat.slug).length,
  }));
}

/**
 * Retrieves a single category by slug.
 */
export function getCategoryBySlug(slug: string): Category | undefined {
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) return undefined;
  return {
    ...cat,
    itemCountEstimate: getArtifactsByCategory(cat.slug).length,
  };
}

/**
 * Retrieves all historical eras.
 */
export function getAllEras(): Era[] {
  return eras;
}

/**
 * Retrieves a single historical era by slug.
 */
export function getEraBySlug(slug: string): Era | undefined {
  return eras.find((e) => e.slug === slug);
}
