
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    // 'vuetify/lib/styles/main.sass',
    '~/assets/styles/style.css',
  ],
  // build: {
  //   transpile: ['vuetify'],
  // },
  vite: {
    define: { 'process.env.DEBUG': false, },
  },
  devtools: { enabled: true },
  modules: [
    // ...
    'nuxt-schema-org',
    '@pinia/nuxt',
    '@nuxtjs/apollo'
  ],
  runtimeConfig: {
    isProd: process.env.NETLIFY_ENV === 'production',
    datoToken: process.env.NUXT_DATO_TOKEN,
    public: {
      isProd: process.env.NETLIFY_ENV === 'production',
      datoToken: process.env.NUXT_DATO_TOKEN
    }
  },
  apollo: {
    clients: {
      default: './config/apollo.ts'
    }
  },
  site: {
    url: 'https://blog-dato.netlify.app/',
    name: 'Refergo',
  }
})
