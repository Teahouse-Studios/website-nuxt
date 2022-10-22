<template>
  <v-container class="pt-4 pb-8">
    <h1 class="text-h3 mt-6 mb-3">博客</h1>
    <NuxtLink v-for="c in content" :key="c._id" :to="c._path">{{
      c.title
    }}</NuxtLink></v-container
  >
</template>
<script setup>
const content = await queryContent('member').limit(20).find()
</script>
