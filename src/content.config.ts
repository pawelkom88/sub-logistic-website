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
      services: z.object({
        topper: z.string(),
        heading: z.string(),
        description: z.string(),
        cards: z.array(
          z.object({
            title: z.string(),
            body: z.string(),
            alt: z.string(),
          })
        ),
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

const PrivacyPolicyAndTermsOfUseSchema = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/policy" }),
  schema: z.object({
    policy: z.object({
      title: z.string(),
      description: z.string(),
      administrator: z.object({
        name: z.string(),
        location: z.string(),
        NIP: z.string(),
      }),
      dataProcessing: z.object({
        purpose: z.string(),
        scope: z.array(z.string()),
        cookies: z.array(z.string()),
      }),
      legalBasis: z.object({
        description: z.string(),
        regulation: z.string(),
      }),
      dataRetention: z.object({
        period: z.string(),
        policy: z.string(),
      }),
      userRights: z.array(z.string()),
      dataSharing: z.object({
        policy: z.string(),
      }),
      security: z.object({
        policy: z.string(),
      }),
      disclaimers: z.object({
        content: z.string(),
        externalLinks: z.string(),
        damages: z.string(),
      }),
      policyChanges: z.object({
        policy: z.string(),
        notice: z.string(),
      }),
      contact: z.object({
        email: z.string().optional(),
        phone: z.string().optional(),
        companyDetails: z.string().optional(),
      }),
    }),
  }),
});

export const collections = {
  translations,
  PrivacyPolicyAndTermsOfUse: PrivacyPolicyAndTermsOfUseSchema,
};
