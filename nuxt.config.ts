// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'CashierFu',
      meta: [
        { name: 'description', content: 'CashierFu Point-of-Sale'}
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Icons'},
        { rel: "icon", type: "image/png", href: "/favicon.ico" }
      ]
    }
  }
})
