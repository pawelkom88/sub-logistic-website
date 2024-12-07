import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const translations = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/translations" }),
  schema: z.object({
    languageCode: z.string(),
    languageName: z.string(),
    translations: z.object({
      nav: z.object({
        links: z.array(
          z.object({
            name: z.string(),
            url: z.string(),
          })
        ),
      }),
      hero: z.string(),
      footer: z.string(),
    }),
  }),
});

export const collections = { translations };
