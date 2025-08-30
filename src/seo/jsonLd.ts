import { siteDataByLang, type Locale } from "./siteData";

export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export default function jsonLDGenerator({
  type = "website",
  post,
  url,
  image,
  lang = "en",
}: {
  type: string;
  post?: any;
  url?: string;
  image?: string;
  lang?: Locale;
}) {
  const s = siteDataByLang[lang] || siteDataByLang.en;
  if (type === "post") {
    const data = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": url,
      },
      headline: post?.title,
      description: post?.description,
      image: post?.image?.src || image,
      ...(post?.author && {
        author: {
          "@type": "Person",
          name: post.author,
          url: `${s.url}/author/${slugify(post.author)}`,
        },
      }),
      datePublished: post?.date,
    } as const;
    return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
  }
  if (type === "website") {
    const data = {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      name: s.title,
      url: s.url,
      logo: `${s.url}/.netlify/images?url=_astro%2Fsub-logistics-logo.DeiqvkTr.webp&fm=webp&w=261&h=152`,
      image: image,
      description: s.description,
      address: {
        "@type": "PostalAddress",
        addressLocality: s.city,
        addressRegion: s.region,
        addressCountry: s.country,
        ...(s.postalCode && { postalCode: s.postalCode }),
        streetAddress: s.streetAddress,
      },
      contactPoint: {
        "@type": "ContactPoint",
        ...(s.telephone && { telephone: s.telephone }),
        contactType: "customer support",
        areaServed: "PL",
        availableLanguage: ["en-GB", "pl-PL", "de-DE"],
      },
    } as const;
    return `<script type=\"application/ld+json\">${JSON.stringify(data)}</script>`;
  }
}
