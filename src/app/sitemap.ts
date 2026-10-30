import { MetadataRoute } from 'next';
import { getAllArtifacts, getAllCategories, getAllEras } from '@/lib/artifacts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://historical-artifacts-museum.vercel.app';
  const buildDate = new Date('2026-10-30T00:00:00.000Z');

  // Primary Landing & Discovery Routes
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: buildDate,
      changeFrequency: 'daily',
      priority: 1.0,
      images: [`${baseUrl}/images/artifacts/chola-nataraja-bronze/primary.webp`],
    },
    {
      url: `${baseUrl}/artifacts`,
      lastModified: buildDate,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: buildDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // Artifact detail routes (all 571 published collection objects with primary images)
  const artifactRoutes: MetadataRoute.Sitemap = getAllArtifacts().map((art) => {
    const primaryImg = art.images.find((i) => i.isPrimary) ?? art.images[0];
    const imgUrl = primaryImg?.src
      ? primaryImg.src.startsWith('http')
        ? primaryImg.src
        : `${baseUrl}${primaryImg.src}`
      : undefined;

    return {
      url: `${baseUrl}/artifacts/${art.slug}`,
      lastModified: new Date(art.lastReviewed || '2026-10-30'),
      changeFrequency: 'weekly',
      priority: 0.85,
      images: imgUrl ? [imgUrl] : undefined,
    };
  });

  // Category exhibition routes (6)
  const categoryRoutes: MetadataRoute.Sitemap = getAllCategories().map((cat) => ({
    url: `${baseUrl}/categories/${cat.slug}`,
    lastModified: buildDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Historical era routes (7)
  const eraRoutes: MetadataRoute.Sitemap = getAllEras().map((era) => ({
    url: `${baseUrl}/eras/${era.slug}`,
    lastModified: buildDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...routes, ...artifactRoutes, ...categoryRoutes, ...eraRoutes];
}
