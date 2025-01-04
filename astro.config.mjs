import { defineConfig } from 'astro/config';
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import { mermaid } from './src/plugins/mermaid';

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), tailwind()],
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en"]
  },
  markdown: {
    remarkPlugins: [ mermaid ],
    syntaxHighlight: "shiki"
  },
});