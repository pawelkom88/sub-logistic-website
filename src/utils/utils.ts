export type Lang = "en" | "de" | "pl";

export function getLangCode(lang: Lang) {
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

export function splitString(string: string, el = 0) {
  return string.split("-")[el];
}
