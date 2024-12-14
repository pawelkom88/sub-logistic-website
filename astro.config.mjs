import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://sublogistics.pl",
  adapter: netlify(),
  integrations: [sitemap()],
  image: {
    domains: ["images.unsplash.com", "csimg.nyc3.cdn.digitaloceanspaces.com"],
  },
});
