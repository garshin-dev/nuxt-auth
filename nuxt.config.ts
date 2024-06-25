import i18nConfig from './i18n.config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint', '@pinia/nuxt', '@nuxtjs/i18n'],
  css: ['~/shared/assets/styles/main.css'],
  dir: {
    pages: './src/app/routes',
    layouts: './src/app/layouts',
    public: './src/app/public',
  },
  components: {
    dirs: [
      {
        path: './src/shared/ui',
        pathPrefix: false,
      },
    ],
  },
  alias: {
    '~': '/src',
  },
  eslint: {
    checker: true,
  },
  i18n: i18nConfig,
})
