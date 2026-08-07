import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const works = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/works" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      roles: z.string(),
      client: z.string(),
      url: z.url().optional(),
      code: z.url().optional(),
      lead: z.string(),
      technologies: z.string().optional(),
      published: z.boolean().default(true),
      cover: image(),
      video: z.string().optional(),
    }),
});

export const collections = { works };
