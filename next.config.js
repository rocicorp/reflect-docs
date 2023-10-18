const shiki = require("shiki");
const BUNDLED_LANGUAGES = shiki.BUNDLED_LANGUAGES;
const getHighlighter = shiki.getHighlighter;

const nextConfig = {
  mdxOptions: {
    rehypePrettyCodeOptions: {
      getHighlighter: (options) =>
        getHighlighter({
          ...options,
          langs: [
            ...BUNDLED_LANGUAGES,
            // custom grammar options, see the Shiki documentation for how to provide these options
            {
              id: "vue",
              scopeName: "source.vue",
              aliases: ["vue"], // Along with id, aliases will be included in the allowed names you can use when writing markdown.
              path: "../../public/syntax/vue.tmLanguage.json",
            },
            {
              id: "svelte",
              scopeName: "source.svelte",
              aliases: ["svelte"], // Along with id, aliases will be included in the allowed names you can use when writing markdown.
              path: "../../public/syntax/svelte.tmLanguage.json",
            },
          ],
        }),
    },
  },
}

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

module.exports = withNextra(nextConfig);
