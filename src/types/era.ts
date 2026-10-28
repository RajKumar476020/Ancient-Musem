import { z } from 'zod';

export const EraSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  period: z.string(),
  dateStart: z.number(),
  dateEnd: z.number(),
  shortDescription: z.string(),
  historicalContext: z.string(),
  heroImage: z.string().optional(),
});

export type Era = z.infer<typeof EraSchema>;
