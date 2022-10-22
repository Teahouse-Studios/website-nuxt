<template>
  <v-btn
    class="ml-n3"
    :to="props.to"
    variant="text"
    size="small"
    :prepend-icon="mdiChevronLeft"
    >{{ props.name }}</v-btn
  >
  <v-divider class="mt-2"></v-divider>
</template>
<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import { mdiChevronLeft } from '@mdi/js'
const props = defineProps<{
  to: RouteLocationRaw
  name: string
}>()
</script>
