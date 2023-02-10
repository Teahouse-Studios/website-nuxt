<template>
  <NuxtLink
    :to="p._path"
    class="w-1/3 block p-4 hover:shadow-lg bg-slate-50 transition-all"
    v-for="p in posts"
    :key="p._id"
  >
    <h3 class="text-2xl font-bold mb-1" v-text="p.title"></h3>
    <div class="text-slate-500 mb-3" v-text="p.description"></div>
    <div
      class="text-slate-500 text-sm"
      v-text="formatDate(new Date(p.published))"
    ></div>
  </NuxtLink>
</template>
<script setup>
import { mdiArrowRight } from '@mdi/js'
const posts = await queryContent('/blog').limit(5).find()
</script>
