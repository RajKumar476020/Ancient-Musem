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

import {
  getIntelligentRecommendations,
  RecommendationWithContext,
} from './recommendations';

/**
 * Retrieves related artifacts for a given artifact using the intelligent recommendation engine.
 * Computes multi-attribute affinity across dynasty, material, iconography, category, and chronology.
 */
export function getRelatedArtifacts(artifact: Artifact, limit = 4): Artifact[] {
  const recommendations = getIntelligentRecommendations(artifact, limit, getAllArtifacts());
  return recommendations.map((r) => r.artifact);
}

/**
 * Retrieves related artifacts along with curatorial context tags and match reasoning.
 */
export function getRecommendedArtifactsWithContext(
  artifact: Artifact,
  limit = 4
): RecommendationWithContext[] {
  return getIntelligentRecommendations(artifact, limit, getAllArtifacts());
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
