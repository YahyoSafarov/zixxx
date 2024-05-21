// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/index.css"],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: "Zixx Nuxt",
      meta: [{ name: "description", content: "Everything about Nuxt 3" }],
      link: [{ rel: "stylesheet", href: "./assets/image/zix logo.svg" }],
    },
  },
});
