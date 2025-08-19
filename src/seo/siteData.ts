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
    title: "Sub Logistic - Twój Partner w Efektywnym Transporcie i Logistyce",
    description:
      "Sub Logistic provides efficient logistics and transport solutions tailored to your needs. Discover our services and contact us for more details.",
    url: "https://sub-logistic.netlify.app/",
    image: {
      alt: "Sub Logistic - Twój Partner w Efektywnym Transporcie i Logistyce",
    },
    telephone: "",
    streetAddress: "ul. Marynarki",
    city: "Gdansk",
    region: "Pomorskie",
    postalCode: "",
    country: "Polska",
  },
  en: {
    title: "Sub Logistic - Your Partner in Efficient Transport & Logistics",
    description:
      "Sub Logistic provides efficient logistics and transport solutions tailored to your needs. Discover our services and contact us for more details.",
    url: "https://sub-logistic.netlify.app/",
    image: { alt: "Sub Logistic - Your Partner in Efficient Transport & Logistics" },
    telephone: "",
    streetAddress: "Marynarki Street",
    city: "Gdansk",
    region: "Pomeranian",
    postalCode: "",
    country: "Poland",
  },
  de: {
    title: "Sub Logistic – Ihr Partner für effizienten Transport und Logistik",
    description:
      "Sub Logistic bietet effiziente Logistik- und Transportlösungen, die auf Ihre Bedürfnisse zugeschnitten sind. Entdecken Sie unsere Leistungen und kontaktieren Sie uns für weitere Details.",
    url: "https://sub-logistic.netlify.app/",
    image: { alt: "Sub Logistic – Ihr Partner für effizienten Transport und Logistik" },
    telephone: "",
    streetAddress: "Marynarki Straße",
    city: "Danzig",
    region: "Pommern",
    postalCode: "",
    country: "Polen",
  },
};
