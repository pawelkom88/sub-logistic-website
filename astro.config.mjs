import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://sub-logistic.netlify.app/",
  adapter: netlify(),
  integrations: [sitemap()],
  alias: {
    "@assets": "./src/assets",
  },
  // image: {
  //   domains: [
  //   ],
  // },
});
