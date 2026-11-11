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
        { name: 'robots', content: 'index, follow, max-image-preview:large' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'ru_BY' },
        { property: 'og:site_name', content: clinic.brand.name },
        { property: 'og:title', content: clinic.seo.title },
        { property: 'og:description', content: clinic.seo.description },
        { property: 'og:url', content: clinic.seo.siteUrl },
        { property: 'og:image', content: `${clinic.seo.siteUrl}${clinic.hero.image}` },
        { name: 'twitter:card', content: 'summary_large_image' },
        // GEO-метки для локального поиска
        { name: 'geo.region', content: clinic.seo.geo.region },
        { name: 'geo.placename', content: 'Минск' },
        { name: 'geo.position', content: `${clinic.seo.geo.lat};${clinic.seo.geo.lng}` },
        { name: 'ICBM', content: `${clinic.seo.geo.lat}, ${clinic.seo.geo.lng}` },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: clinic.brand.favicon },
        { rel: 'canonical', href: `${clinic.seo.siteUrl}/` },
        { rel: 'preload', as: 'image', href: clinic.hero.image, fetchpriority: 'high' },
      ],
    },
  },
})
