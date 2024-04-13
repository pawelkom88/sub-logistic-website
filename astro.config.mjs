import { defineConfig } from "astro/config";

export default defineConfig({
  i18n: {
    defaultLocale: "pl",
    locales: [
      "pl",
      "en",
      "de",
      {
        path: "pl",
        codes: ["pl-PL"],
      },
      {
        path: "en",
        codes: ["en-GB"],
      },
      {
        path: "de",
        codes: ["de-DE"],
      },
    ],
  },
});
