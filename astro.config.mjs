// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output:"server",

  i18n:{
    defaultLocale:"es",
    locales:["es","en"],
    routing:{
      prefixDefaultLocale:false
    }

  },

  adapter: netlify()
});