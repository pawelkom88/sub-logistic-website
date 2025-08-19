import siteData from "../seo/siteData.json";

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
}: {
  type: string;
  post?: any;
  url?: string;
}) {
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
        "image": "${
          post.image?.src ||
          "https://sub-logistic.netlify.app/social-media-card.webp"
        }",
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
      "name": "${siteData.title}",
        "url": "${siteData.url}",
        "logo": "${siteData.url}/.netlify/images?url=_astro%2Fsub-logistics-logo.DeiqvkTr.webp&fm=webp&w=261&h=152",
        "image": "${siteData.url}/social-media-card.png",
        "description": "${siteData.description}",  
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "${siteData.streetAddress}",
          "addressRegion": "Pomorskie",
          "addressCountry": "Polska",
          "postalCode": "${siteData.postalCode}",
          "addressCountryCode": "PL",
          "city": "${siteData.city}",
          "region": "${siteData.region}",
          "streetAddress": "${siteData.streetAddress}"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "${siteData.telephone}",
          "contactType": "customer support",
          "areaServed": "PL",
          "availableLanguage": "en-GB, pl-PL",
        }
      }
    </script>`;
}
