import { defineNuxtPlugin } from '#app'
import VueZoomer from 'vue-zoomer'

export default defineNuxtPlugin((app) => {
  app.vueApp.use(VueZoomer)
})
