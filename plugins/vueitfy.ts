import { defineNuxtPlugin } from '#app'
import { createVuetify } from 'vuetify' // Styles
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
  })

  app.vueApp.use(vuetify)
})
