import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/blog" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.date(),
    slug: z.string(),
  }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog };
