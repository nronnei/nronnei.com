import { defineConfig } from 'astro/config';
import solidJs from "@astrojs/solid-js";
import { rehypeShiki } from '@astrojs/markdown-remark'
import rehypeMermaid from 'rehype-mermaid'
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), tailwind()],
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en"]
  },
  markdown: {
    rehypePlugins: [
      rehypeMermaid,
      rehypeShiki,
    ],
    syntaxHighlight: false,
  },
});