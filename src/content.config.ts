import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const translations = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/translations" }),
  schema: z.object({
    languageCode: z.string(),
    languageName: z.string(),
    translations: z.object({
      seoTitle: z.string(),
      seoDescription: z.string(),
      nav: z.object({
        links: z.array(
          z.object({
            name: z.string(),
            url: z.string(),
          })
        ),
      }),
      hero: z.object({
        title: z.string(),
        body: z.string(),
        button: z.string(),
      }),
      footer: z.object({
        body: z.string(),
        copyright: z.string(),
      }),
      contact: z.object({
        phone: z.string(),
        email: z.string(),
        openingTimes: z.string(),
        address: z.string(),
      }),
    }),
  }),
});

export const collections = { translations };
