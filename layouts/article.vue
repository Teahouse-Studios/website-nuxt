<template>
  <v-app class="text-body-1">
    <t-header />
    <v-main class="pt-4 pb-8 prose">
      <slot />
    </v-main>
    <t-footer />
  </v-app>
</template>
<script lang="ts" setup>
import TFooter from '@/components/TFooter.vue'
import THeader from '@/components/THeader.vue'
</script>
<style lang="scss">
@import '~/assets/styles/markdown.scss';

a:not(:hover) {
  text-decoration: none;
}

.link,
.link:visited {
  color: rgb(var(--v-theme-primary));
}
</style>
