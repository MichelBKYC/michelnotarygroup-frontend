export default defineNuxtConfig({
  ssr: false,

  routeRules: {
    '/': {
      redirect: '/home'
    }
  },

  compatibilityDate: '2025-07-15',

  devtools: {
    enabled: true
  },

  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  site: {
    url: 'https://michelnotary.com/',
    name: 'The Michel Notary Group'
  },

  sitemap: {
    exclude: ['/']
  },

  robots: {
    sitemap: [
      'https://michelnotary.com//sitemap.xml'
    ]
  },

  css: [
    '~/assets/css/main.css',
    '~/assets/css/site-dark.css'
  ],

  runtimeConfig: {
    enquirySmtpHost: process.env.SMTP_HOST,
    enquirySmtpPort: process.env.SMTP_PORT,
    enquirySmtpUser: process.env.SMTP_USER,
    enquirySmtpPassword: process.env.SMTP_PASS,
    enquiryFrom: process.env.SMTP_FROM,
    enquiryTo: process.env.CONTACT_EMAIL
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en-US'
      },

      title: 'The Michel Notary Group | Atlanta Mobile Notary',

      meta: [
        {
          name: 'description',
          content:
            'Professional and convenient mobile notary services throughout the Atlanta metro area.'
        },
        {
          name: 'robots',
          content: 'index, follow, max-image-preview:large'
        },
        {
          name: 'theme-color',
          content: '#03113c'
        }
      ],

      link: [
        {
          rel: 'icon',
          href: '/favicon.ico'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        }
      ]
    }
  }
})