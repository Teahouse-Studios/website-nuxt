import vuetify from 'vite-plugin-vuetify'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  modules: [
    '@nuxt/content',
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins = [
          ...(config.plugins ?? []),
          vuetify({
            autoImport: true,
          }),
        ]
      })
    },
  ],
  router: {
    scrollBehavior() {
      // always scroll to top
      return { top: 0 }
    },
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  experimental: {
    reactivityTransform: true,
  },
  css: ['vuetify/styles'],
  build: {
    transpile: ['vuetify'],
  },
  vite: {},
})
