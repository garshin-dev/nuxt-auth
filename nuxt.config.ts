// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  dir: {
    pages: './src/app/routes',
    layouts: './src/app/layouts',
    public: './src/app/public',
  },
  alias: {
    '~': '/src'
  },
})