<template>
  <v-app class="text-body-1">
    <t-header /><v-main>
      <slot />
    </v-main>
    <t-footer />
  </v-app>
</template>
<script lang="ts" setup>
import TFooter from '@/components/TFooter.vue'
import THeader from '@/components/THeader.vue'
</script>
<style>
a:not(:hover) {
  text-decoration: none;
}

.link,
.link:visited {
  color: rgb(var(--v-theme-primary));
}
</style>
