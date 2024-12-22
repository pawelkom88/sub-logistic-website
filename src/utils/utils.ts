import { getCollection, type CollectionEntry } from "astro:content";
import deDE from "../assets/images/de-DE.png";
import enGB from "../assets/images/en-GB.png";
import plPL from "../assets/images/pl-PL.png";

export type Lang = "en" | "de" | "pl";

export type LangCode = "en-GB" | "de-DE" | "pl-PL";

export function getCountryCode(pathname: string): Lang {
  const [, currentLang] = pathname.split("/") as Lang[];
  return currentLang;
}

const countries = {
  en: "en",
  de: "de",
  pl: "pl",
} as const;

const countryCodes = {
  en: "en-GB",
  de: "de-DE",
  pl: "pl-PL",
} as const;

export function getLangCode(lang: Lang): LangCode {
  switch (lang) {
    case countries.en:
      return countryCodes.en;
    case countries.de:
      return countryCodes.de;
    case countries.pl:
      return countryCodes.pl;
    default:
      return countryCodes.en;
  }
}

export function splitString(string: string, el = 0): string {
  return string.split("-")[el];
}

export function getFlagSrc(lang: LangCode): ImageMetadata {
  switch (lang) {
    case countryCodes.pl:
      return plPL;
    case countryCodes.de:
      return deDE;
    case countryCodes.en:
      return enGB;
  }
}

export function translateAriaLabel(lang: Lang): string {
  switch (lang) {
    case countries.en:
      return "Language selector";
    case countries.de:
      return "Sprachauswahl";
    case countries.pl:
      return "Wybierz język";
    default:
      return "Language selector";
  }
}

export function isContactLink(url: string): boolean {
  return url === "/kontak" || url === "/contact";
}

export type TranslationEntry = CollectionEntry<"translations">;
export type SelectedTranslation = TranslationEntry["data"]["translations"];

const allTranslations = await getCollection("translations");
export function getCurrentLanguageTranslation(currentLang: Lang) {
  const translationEntry = allTranslations.find(
    (t: TranslationEntry) => t.data.languageCode === getLangCode(currentLang),
  ) as TranslationEntry;

  const { translations } = translationEntry.data || {};

  return translations;
}

export function getLangFullName(lang: Lang) {
  switch (lang) {
    case countries.pl:
      return "Polski";
    case countries.de:
      return "Deutsch";
    case countries.en:
      return "English";
  }
}

export const languagesConfig = {
  [countryCodes.pl]: {
    flag: plPL,
    translations: { pl: "Polski", en: "Polish", de: "Polnisch" },
  },
  [countryCodes.en]: {
    flag: enGB,
    translations: { pl: "Angielski", en: "English", de: "Englisch" },
  },
  [countryCodes.de]: {
    flag: deDE,
    translations: { pl: "Niemiecki", en: "German", de: "Deutsch" },
  },
};
