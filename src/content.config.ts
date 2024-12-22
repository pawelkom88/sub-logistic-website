import { glob } from "astro/loaders";
// @ts-ignore
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
      contactBtn: z.string(),
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
      whyUs: z.object({
        topper: z.string(),
        heading: z.string(),
        description: z.array(
          z.object({
            paragraph: z.string(),
          })
        ),
        icons: z.array(
          z.object({
            title: z.string(),
          })
        ),
        actionBtn: z.string(),
        stats: z.array(
          z.object({
            number: z.string(),
            title: z.string(),
          })
        ),
      }),
      reviews: z.object({
        topper: z.string(),
        heading: z.string(),
        description: z.string(),
        review: z.object({
          title: z.string(),
          body: z.string(),
          author: z.string(),
          imageTitle: z.string(),
        }),
      }),
      team: z.object({
        topper: z.string(),
        heading1: z.string(),
        heading2: z.string(),
        description: z.string(),
        actionBtn: z.string(),
        imageTitle: z.string(),
        jobTitle: z.string(),
      }),
      cta: z.object({
        topper: z.string(),
        heading: z.string(),
        description: z.string(),
        actionBtn: z.string(),
      }),
      footer: z.object({
        body: z.string(),
        copyright: z.string(),
      }),
      contactForm: z.object({
        topper: z.string(),
        heading: z.string(),
        description: z.string(),
        contactLabels: z.object({
          address: z.string(),
          email: z.string(),
          phone: z.string(),
          tooltip: z.string(),
        }),
        formFields: z.object({
          name: z.object({
            label: z.string(),
            placeholder: z.string(),
          }),
          email: z.object({
            label: z.string(),
            placeholder: z.string(),
          }),
          phone: z.object({
            label: z.string(),
            placeholder: z.string(),
          }),
          message: z.object({
            label: z.string(),
            placeholder: z.string(),
          }),
          checkbox: z.object({
            label: z.string(),
            label2: z.string(),
            policyLink: z.string(),
          }),
          submitBtn: z.string(),
        }),
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

const privacyPolicyAndTermsOfUse = defineCollection({
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

const quote = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/quote" }),
  schema: z.object({
    steps: z.array(
      z.object({
        title: z.string(),
      })
    ),
    title: z.string(),
    description: z.string(),
    startBtn: z.string(),
    form: z.object({
      fullName: z.string(),
      emailAddress: z.string(),
      phoneNumber: z.string(),
      cargoWeight: z.string(),
      loadingDate: z.string(),
      unloadingDate: z.string(),
      loadingAddress: z.string(),
      unloadingAddress: z.string(),
      additionalMessage: z.string(),
    }),
    confirmation: z.object({
      title: z.string(),
      message: z.string(),
    }),
  }),
});

export const collections = {
  translations,
  privacyPolicyAndTermsOfUse,
  quote,
};
