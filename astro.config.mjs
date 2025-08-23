import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://sublog.com.pl/",
  adapter: netlify(),
  integrations: [sitemap()],
  alias: {
    "@assets": "./src/assets",
  },
});
