export type Locale = "pl" | "en" | "de";

export type SiteData = {
  title: string;
  description: string;
  url: string;
  image: { alt: string };
  telephone: string;
  streetAddress: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
};

export const siteDataByLang: Record<Locale, SiteData> = {
  pl: {
    title: "Sub Logistics - Twój Partner w Efektywnym Transporcie i Logistyce",
    description:
      "Sub Logistics provides efficient logistics and transport solutions tailored to your needs. Discover our services and contact us for more details.",
    url: "https://sublog.com.pl/en/",
    image: {
      alt: "Sub Logistics - Twój Partner w Efektywnym Transporcie i Logistyce",
    },
    telephone: "",
    streetAddress: "ul. Marynarki",
    city: "Gdansk",
    region: "Pomorskie",
    postalCode: "",
    country: "Polska",
  },
  en: {
    title: "Sub Logistics - Your Partner in Efficient Transport & Logistics",
    description:
      "Sub Logistics provides efficient logistics and transport solutions tailored to your needs. Discover our services and contact us for more details.",
    url: "https://sublog.com.pl/en/",
    image: { alt: "Subs Logistic - Your Partner in Efficient Transport & Logistics" },
    telephone: "",
    streetAddress: "Marynarki Street",
    city: "Gdansk",
    region: "Pomeranian",
    postalCode: "",
    country: "Poland",
  },
  de: {
    title: "Sub Logistics – Ihr Partner für effizienten Transport und Logistik",
    description:
      "Sub Logistics bietet effiziente Logistik- und Transportlösungen, die auf Ihre Bedürfnisse zugeschnitten sind. Entdecken Sie unsere Leistungen und kontaktieren Sie uns für weitere Details.",
    url: "https://sublog.com.pl/en/",
    image: { alt: "Sub Logistics – Ihr Partner für effizienten Transport und Logistik" },
    telephone: "",
    streetAddress: "Marynarki Straße",
    city: "Danzig",
    region: "Pommern",
    postalCode: "",
    country: "Polen",
  },
};
