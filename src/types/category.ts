import { z } from 'zod';

export const CategorySchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  shortDescription: z.string(),
  itemCountEstimate: z.number().default(0),
  iconName: z.string().default('Layers'),
  heroImage: z.string().optional(),
});

export type Category = z.infer<typeof CategorySchema>;
