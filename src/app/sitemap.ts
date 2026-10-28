import { MetadataRoute } from 'next';
import { getAllArtifacts, getAllCategories, getAllEras } from '@/lib/artifacts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://historical-artifacts-museum.vercel.app';
  const lastModified = new Date();

  // Static routes
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/artifacts`,
      lastModified,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Artifact detail routes (20)
  const artifactRoutes: MetadataRoute.Sitemap = getAllArtifacts().map((art) => ({
    url: `${baseUrl}/artifacts/${art.slug}`,
    lastModified: new Date(art.lastReviewed),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Category routes (6)
  const categoryRoutes: MetadataRoute.Sitemap = getAllCategories().map((cat) => ({
    url: `${baseUrl}/categories/${cat.slug}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // Historical era routes (7)
  const eraRoutes: MetadataRoute.Sitemap = getAllEras().map((era) => ({
    url: `${baseUrl}/eras/${era.slug}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...routes, ...artifactRoutes, ...categoryRoutes, ...eraRoutes];
}
