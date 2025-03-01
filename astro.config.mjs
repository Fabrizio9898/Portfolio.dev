// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

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

  }
});
