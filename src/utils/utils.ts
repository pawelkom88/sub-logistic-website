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
