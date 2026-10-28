import { describe, it, expect } from 'vitest';
import { ArtifactSchema } from '@/types/artifact';
import { CategorySchema } from '@/types/category';
import { EraSchema } from '@/types/era';

describe('Schema validation', () => {
  it('should validate a complete and valid artifact record', () => {
    const validArtifact = {
      id: 'art-01',
      slug: 'punch-marked-silver-coin',
      title: 'Punch-Marked Silver Karshapana',
      summary: 'An early standardized silver coin bearing geometric symbols of authority from the Maurya period.',
      categorySlug: 'ancient-coins',
      eraSlug: 'maurya-post-maurya',
      civilization: 'Ancient India',
      dynasty: 'Maurya Empire',
      dateDisplay: 'c. 4th–3rd Century BCE',
      dateStart: -400,
      dateEnd: -200,
      material: 'Silver (high purity alloy)',
      origin: 'Northern Indian Gangetic Plain',
      discoverySite: 'Various hoards (e.g. Taxila, Patna)',
      currentCollection: 'National Museum, New Delhi',
      dimensions: 'Approx. 14 x 16 mm, weight: ~3.4 grams',
      description: 'The punch-marked karshapana represents one of the earliest indigenous coinages of the Indian subcontinent.',
      sections: [
        {
          heading: 'Monetary Context',
          body: 'Circulated widely across northern and central trade routes.',
        },
      ],
      quickFacts: [
        { label: 'Denomination', value: '1 Karshapana' },
        { label: 'Average Weight', value: '3.4 grams' },
      ],
      timeline: [
        {
          date: 'c. 322 BCE',
          title: 'Establishment of Maurya Empire',
          description: 'Standardization of weight systems and symbol verification across imperial mints.',
        },
      ],
      interestingFacts: [
        'Coins typically bear five distinct punch marks including the sun and six-arm symbol.',
      ],
      images: [
        {
          src: '/images/artifacts/punch-marked-silver-coin/obverse.webp',
          alt: 'Punch-marked silver karshapana showing sun and six-arm marks',
          caption: 'Obverse showing geometric punches',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:Punch-marked_coin.jpg',
          creator: 'Archaeological Survey of India',
          institution: 'National Museum, New Delhi',
          license: 'CC BY-SA 4.0',
          attribution: 'ASI / Wikimedia Commons',
          isPrimary: true,
        },
      ],
      sources: [
        {
          title: 'The Coinage of Ancient India',
          publisher: 'Oxford University Press',
          url: 'https://example.org/coinage-ancient-india',
          accessedAt: '2026-10-28',
        },
      ],
      relatedArtifactSlugs: ['indo-greek-menander-silver-coin'],
      status: 'published',
      lastReviewed: '2026-10-28',
    };

    const parsed = ArtifactSchema.safeParse(validArtifact);
    expect(parsed.success).toBe(true);
  });

  it('should reject an artifact missing required images or sources', () => {
    const invalidArtifact = {
      id: 'art-02',
      slug: 'invalid-artifact',
      title: 'Incomplete Object',
      summary: 'Missing required sections',
      categorySlug: 'ancient-coins',
      eraSlug: 'gupta-period',
      dateDisplay: 'c. 400 CE',
      dateStart: 400,
      dateEnd: 450,
      description: 'Missing images array',
      sections: [],
      quickFacts: [],
      images: [], // Invalid: min(1) required
      sources: [], // Invalid: min(1) required
      status: 'published',
      lastReviewed: '2026-10-28',
    };

    const parsed = ArtifactSchema.safeParse(invalidArtifact);
    expect(parsed.success).toBe(false);
  });

  it('should validate category and era schemas', () => {
    const category = {
      id: 'cat-01',
      slug: 'ancient-coins',
      title: 'Ancient Coins',
      shortDescription: 'Earliest metallic currency from punch-marked karshapanas to Indo-Greek and Kushan dynasties.',
      itemCountEstimate: 6,
      iconName: 'Coins',
    };
    expect(CategorySchema.safeParse(category).success).toBe(true);

    const era = {
      id: 'era-01',
      slug: 'indus-valley',
      title: 'Indus Valley Civilization',
      period: 'c. 2600–1900 BCE',
      dateStart: -2600,
      dateEnd: -1900,
      shortDescription: 'One of the world’s earliest urban civilizations along the Indus basin.',
      historicalContext: 'Renowned for town planning, metallurgy, seal carving, and advanced brick architecture.',
    };
    expect(EraSchema.safeParse(era).success).toBe(true);
  });
});
