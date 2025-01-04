import typography from '@tailwindcss/typography'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url(/dune-and-sky.jpg)",
        "hero-pattern-alt": "url(/north-table.jpg)"
      }
    },
  },
  plugins: [typography],
}

