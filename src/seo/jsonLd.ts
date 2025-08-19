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
    return `<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "${url}"
        },
        "headline": "${post.title}",
        "description": "${post.description}",
        "image": "${post.image?.src || image}",
        "author": {
          "@type": "Person",
          "name": "${post.author}",
          "url": "${slugify(post.author || "")}"
        },
        "datePublished": "${post.date}"
      }
    </script>`;
  }
  if (type === "website")
    return `<script type="application/ld+json">
      {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "${s.title}",
        "url": "${s.url}",
        "logo": "${s.url}/.netlify/images?url=_astro%2Fsub-logistics-logo.DeiqvkTr.webp&fm=webp&w=261&h=152",
        "image": "${image}",
        "description": "${s.description}",  
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "${s.streetAddress}",
          "addressRegion": "${s.region}",
          "addressCountry": "${s.country}",
          "postalCode": "${s.postalCode}",
          "addressCountryCode": "PL",
          "city": "${s.city}",
          "region": "${s.region}",
          "streetAddress": "${s.streetAddress}"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "${s.telephone}",
          "contactType": "customer support",
          "areaServed": "PL",
          "availableLanguage": "en-GB, pl-PL, de-DE",
        }
      }
    </script>`;
}
