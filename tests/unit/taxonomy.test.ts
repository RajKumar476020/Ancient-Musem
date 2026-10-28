import { describe, it, expect } from 'vitest';
import { categories } from '@/data/categories';
import { eras } from '@/data/eras';
import { CategorySchema } from '@/types/category';
import { EraSchema } from '@/types/era';

describe('Taxonomy datasets', () => {
  it('should have all valid categories matching CategorySchema', () => {
    expect(categories.length).toBeGreaterThanOrEqual(6);
    const slugs = new Set<string>();

    categories.forEach((cat) => {
      const parsed = CategorySchema.safeParse(cat);
      expect(parsed.success).toBe(true);
      expect(slugs.has(cat.slug)).toBe(false);
      slugs.add(cat.slug);
    });
  });

  it('should have all valid historical eras with chronological sequence', () => {
    expect(eras.length).toBeGreaterThanOrEqual(7);
    const slugs = new Set<string>();

    eras.forEach((era) => {
      const parsed = EraSchema.safeParse(era);
      expect(parsed.success).toBe(true);
      expect(era.dateStart).toBeLessThan(era.dateEnd);
      expect(slugs.has(era.slug)).toBe(false);
      slugs.add(era.slug);
    });
  });
});
