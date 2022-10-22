<template>
  <v-container class="pt-4 pb-8">
    <h1 class="text-h3 mt-6 mb-3">博客</h1>
    <v-container>
      <v-col v-for="c in content" :key="c._id" cols="12" md="6" xl="4">
        <BlogCard :content="c" />
      </v-col>
    </v-container>
  </v-container>
</template>
<script setup>
useHead({
  title: `博客 - 茶馆工作室`,
})
const content = await queryContent('blog').limit(20).find()
</script>
<style>
.title-shadow {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.26), rgba(0, 0, 0, 0));
}
</style>
