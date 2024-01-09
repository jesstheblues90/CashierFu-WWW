// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    'nuxt-vuefire',
    '@nuxtjs/tailwindcss'
  ],
  vuefire: {
    auth: {
      enabled: true
    },
    config: {
      apiKey: "AIzaSyAt3633-J5Xf1wK3chhlOkb_pfe0ClIfgs",
      authDomain: "cashierfu-app.firebaseapp.com",
      projectId: "cashierfu-app",
      storageBucket: "cashierfu-app.appspot.com",
      messagingSenderId: "98957591375",
      appId: "1:98957591375:web:6c1d0d032b772f1c273b3a",
      measurementId: "G-03H4T0CDR3"
    },
  },
  typescript: {
    strict: true
  },
  app: {
    head: {
      title: 'CashierFu',
      meta: [
        { name: 'description', content: 'CashierFu Point-of-Sale' },
        { name: 'msapplication-TileColor', content: '#374151' },
        { name: 'theme-color', content: '#374151' }
      ],
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#374151' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Oswald&display=swap' }
      ]
    }
  }
})
