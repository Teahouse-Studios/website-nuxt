<template>
  <v-col v-for="p in posts" :key="p.id" cols="12" md="4">
    <v-card variant="plain" class="pa-4">
      <div
        class="text-h4 font-weight-bold mb-3"
        style="line-height: 3.75rem"
        v-text="p.title"
      ></div>
      <div
        class="text-subtitle-2 mb-3"
        v-text="formatDate(new Date(p.published))"
      ></div>
      <div class="text-subtitle-1 mb-3" v-text="p.description"></div>
      <v-btn
        :href="p._path"
        variant="text"
        :prepend-icon="mdiArrowRight"
        class="mb-3"
      >
        了解更多
      </v-btn>
    </v-card>
  </v-col>
</template>
<script setup>
const posts = await queryContent('blog').limit(5).find()
</script>
