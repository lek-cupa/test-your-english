// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Test Your English | Cambridge English',
      meta: [
        {
          name: 'keywords',
          content: 'online English test, free English test, which Cambridge English exam should I take, what Cambridge English exam to take, what English exam should I take'
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,600,600i,700'
        }
      ]
    }
  },
  css: [
    '@/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  modules: [
    ['@pinia/nuxt',
    {
      autoImports: [
        'defineStore',
        'storeToRefs'
      ]
    }]
  ]
})
