// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://joelmercier.fr",
  compressHTML: true,
  integrations: [
    sitemap({
      changefreq: "monthly",
      priority: 1,
      lastmod: new Date(),
    }),
  ],
  image: {
    layout: "constrained",
    responsiveStyles: true,
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--font-inter",
      subsets: ["latin"],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
