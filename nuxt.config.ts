// https://nuxt.com/docs/api/configuration/nuxt-config
import clinic from './clinic.config'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: clinic.seo.title,
      htmlAttrs: { lang: 'ru' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: clinic.seo.description },
        { name: 'theme-color', content: '#0891B2' },
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: clinic.brand.favicon }],
    },
  },
})
