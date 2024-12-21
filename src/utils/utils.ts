import { getCollection, type CollectionEntry } from "astro:content";
import deDE from "../assets/images/de-DE.png";
import enGB from "../assets/images/en-GB.png";
import plPL from "../assets/images/pl-PL.png";

export type Lang = "en" | "de" | "pl";

export type LangCode = "en-GB" | "de-DE" | "pl-PL";

export function getLangCode(lang: Lang): LangCode {
  switch (lang) {
    case "en":
      return "en-GB";
    case "de":
      return "de-DE";
    case "pl":
      return "pl-PL";
    default:
      return "en-GB";
  }
}

export function splitString(string: string, el = 0): string {
  return string.split("-")[el];
}

export function getFlagSrc(lang: LangCode): ImageMetadata {
  switch (lang) {
    case "pl-PL":
      return plPL;
    case "de-DE":
      return deDE;
    case "en-GB":
      return enGB;
  }
}

export function translateAriaLabel(lang: Lang): string {
  switch (lang) {
    case "en":
      return "Language selector";
    case "de":
      return "Sprachauswahl";
    case "pl":
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
    (t: TranslationEntry) => t.data.languageCode === getLangCode(currentLang)
  ) as TranslationEntry;

  const { translations } = translationEntry.data || {};

  return translations;
}

export function getLangFullName(lang: Lang) {
  switch (lang) {
    case "pl":
      return "Polski";
    case "de":
      return "Deutsch";
    case "en":
      return "English";
  }
}

export const languagesConfig = {
  "pl-PL": { flag: plPL, translations: { pl: "Polski", en: "Polish", de: "Polnisch" } },
  "en-GB": {
    flag: enGB,
    translations: { pl: "Angielski", en: "English", de: "Englisch" },
  },
  "de-DE": { flag: deDE, translations: { pl: "Niemiecki", en: "German", de: "Deutsch" } },
};
