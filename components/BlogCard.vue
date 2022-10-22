<template>
  <v-card :to="c._path">
    <v-img
      v-if="c.image"
      :src="c.image"
      height="200px"
      cover
      class="align-end text-white"
    >
      <v-card-title class="title-shadow">{{ c.title }}</v-card-title>
    </v-img>
    <v-card-title v-else>{{ c.title }}</v-card-title>
    <v-card-subtitle class="pt-4">
      {{ formatDate(new Date(c.published)) }}
    </v-card-subtitle>
    <v-card-text>{{ c.description }}</v-card-text>
    <v-card-actions>
      <v-btn :to="c._path"> 阅读更多 </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
const props = defineProps<{ content: ParsedContent }>()
const c = props.content
</script>
