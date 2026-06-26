import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

/** @type {import('rehype-pretty-code').Options} */
const rehypePrettyCodeOptions = {
  theme: "ayu-dark",
};

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    // Disable Astro's built-in Shiki highlighting in favor of rehype-pretty-code,
    // matching the original Next.js setup. GitHub Flavored Markdown (tables, etc.)
    // is enabled by default.
    syntaxHighlight: false,
    rehypePlugins: [rehypeSlug, [rehypePrettyCode, rehypePrettyCodeOptions]],
  },
});
