import { z } from 'zod';

export const ArtifactImageSchema = z.object({
  src: z.string(),
  alt: z.string(),
  caption: z.string().optional(),
  sourceUrl: z.string().url(),
  creator: z.string().optional(),
  institution: z.string().optional(),
  license: z.string().default('Public Domain / Fair Use / Open Access'),
  licenseUrl: z.string().url().optional(),
  attribution: z.string().optional(),
  isPrimary: z.boolean().default(false),
});

export const ArtifactSectionSchema = z.object({
  heading: z.string(),
  body: z.string(),
});

export const ArtifactFactSchema = z.object({
  label: z.string(),
  value: z.string(),
});

export const ArtifactTimelineMilestoneSchema = z.object({
  date: z.string(),
  title: z.string(),
  description: z.string(),
});

export const ArtifactSourceSchema = z.object({
  title: z.string(),
  publisher: z.string(),
  url: z.string(),
  accessedAt: z.string().optional(),
});

export const ArtifactSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  summary: z.string(),
  categorySlug: z.string(),
  eraSlug: z.string(),
  civilization: z.string().optional(),
  dynasty: z.string().optional(),
  dateDisplay: z.string(),
  dateStart: z.number(), // Negative for BCE, positive for CE
  dateEnd: z.number(),
  material: z.string().optional(),
  origin: z.string().optional(),
  discoverySite: z.string().optional(),
  currentCollection: z.string().optional(),
  dimensions: z.string().optional(),
  description: z.string(),
  sections: z.array(ArtifactSectionSchema),
  quickFacts: z.array(ArtifactFactSchema),
  timeline: z.array(ArtifactTimelineMilestoneSchema).optional(),
  interestingFacts: z.array(z.string()).optional(),
  images: z.array(ArtifactImageSchema).min(1, 'Artifact must have at least one verified image'),
  sources: z.array(ArtifactSourceSchema).min(1, 'Artifact must have at least one verified citation source'),
  relatedArtifactSlugs: z.array(z.string()).default([]),
  status: z.enum(['draft', 'published']).default('published'),
  lastReviewed: z.string(),
});

export type Artifact = z.infer<typeof ArtifactSchema>;
export type ArtifactImage = z.infer<typeof ArtifactImageSchema>;
export type ArtifactSection = z.infer<typeof ArtifactSectionSchema>;
export type ArtifactFact = z.infer<typeof ArtifactFactSchema>;
export type ArtifactTimelineMilestone = z.infer<typeof ArtifactTimelineMilestoneSchema>;
export type ArtifactSource = z.infer<typeof ArtifactSourceSchema>;
