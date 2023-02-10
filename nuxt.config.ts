import vuetify from 'vite-plugin-vuetify'
import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  typescript: {
    strict: true,
  },
  modules: [
    '@nuxt/image-edge',
    '@nuxt/content',
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins = [
          ...(config.plugins ?? []),
          vuetify({
            autoImport: true,
            styles: { configFile: 'assets/styles/_variables.scss' },
          }),
        ]
      })
    },
  ],
  experimental: {
    reactivityTransform: true,
  },
  build: {
    transpile: ['vuetify'],
  },
})
