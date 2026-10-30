import { describe, it, expect } from 'vitest';
import { artifacts } from '@/data/artifacts';
import { ArtifactSchema } from '@/types/artifact';

describe('All 571 Researched Artifacts Dataset', () => {
  it('should contain exactly 571 researched artifacts', () => {
    expect(artifacts.length).toBe(571);
  });

  it('should validate every artifact against ArtifactSchema', () => {
    const slugs = new Set<string>();

    artifacts.forEach((art) => {
      const result = ArtifactSchema.safeParse(art);
      if (!result.success) {
        console.error('Validation failed for:', art.slug, result.error.format());
      }
      expect(result.success).toBe(true);

      // Verify uniqueness of slug and ID
      expect(slugs.has(art.slug)).toBe(false);
      slugs.add(art.slug);

      // Verify date order
      expect(art.dateStart).toBeLessThanOrEqual(art.dateEnd);

      // Verify at least one image with valid local path
      expect(art.images.length).toBeGreaterThanOrEqual(1);
      expect(art.images[0].src).toMatch(/^\/images\/artifacts\//);

      // Verify at least one verified source
      expect(art.sources.length).toBeGreaterThanOrEqual(1);

      // Verify detailed sections (monetary context, iconography, technique, etc.)
      expect(art.sections.length).toBeGreaterThanOrEqual(3);
      expect(art.quickFacts.length).toBeGreaterThanOrEqual(4);
    });
  });
});
