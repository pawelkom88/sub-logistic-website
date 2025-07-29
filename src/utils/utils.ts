import { getCollection, type CollectionEntry } from "astro:content";
import deDE from "../assets/images/de-DE.png";
import enGB from "../assets/images/en-GB.png";
import plPL from "../assets/images/pl-PL.png";

export type Lang = "en" | "de" | "pl";
export type LangCode = "en-GB" | "de-DE" | "pl-PL";
export type TranslationEntry = CollectionEntry<"translations">;
export type SelectedTranslation = TranslationEntry["data"]["translations"];

export function getCountryCode(pathname: string): Lang {
  const [, currentLang] = pathname.split("/") as Lang[];
  return currentLang;
}

export function getHref(currentLang: Lang, url: string) {
  return url.startsWith("/") ? `/${currentLang}${url}` : url;
}

const countryCodes = {
  en: "en-GB",
  de: "de-DE",
  pl: "pl-PL",
} as const;

export function getLangCode(lang: Lang): LangCode {
  return countryCodes[lang] || countryCodes.en;
}

export function splitString(string: string, el = 0): string {
  return string.split("-")[el];
}

export const flagSrcMap: Record<LangCode, ImageMetadata> = {
  [countryCodes.pl]: plPL,
  [countryCodes.de]: deDE,
  [countryCodes.en]: enGB,
};

export function getFlagSrc(lang: LangCode): ImageMetadata {
  return flagSrcMap[lang];
}

const ariaLabelMap: Record<Lang, string> = {
  en: "Language selector",
  de: "Sprachauswahl",
  pl: "Wybierz język",
};

export function translateAriaLabel(lang: Lang): string {
  return ariaLabelMap[lang] || ariaLabelMap.en;
}

const allTranslations = await getCollection("translations");
export async function getCurrentLanguageTranslation(
  currentLang: Lang,
  collection: CollectionEntry<"translations">[] | CollectionEntry<"translations"> = allTranslations,
): Promise<SelectedTranslation> {
  // Handle both array and single entry cases
  const entries = Array.isArray(collection) ? collection : [collection];
  
  const translationEntry: TranslationEntry | undefined = entries.find(
    ({ data }) => {
      return data.languageCode === getLangCode(currentLang);
    },
  );

const { translations } = translationEntry?.data || {};

  if (!translations) {
    throw new Error(
      `Translation for language ${currentLang} does not exist in collection`,
    );
  }

return translations;
}

export function getLangFullName(lang: Lang) {
  const languageConfig = languagesConfig[getLangCode(lang)];
  return languageConfig?.translations[lang] || "";
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
