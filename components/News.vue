<template>
  <v-col v-for="p in posts" :key="p.id" cols="12" md="4">
    <v-card variant="plain" class="pa-4">
      <div
        class="text-h4 font-weight-bold mb-3"
        style="line-height: 3.75rem"
        v-text="p.title.rendered"
      ></div>
      <div
        class="text-subtitle-2 mb-3"
        v-text="formatDate(new Date(p.date))"
      ></div>
      <div
        class="text-subtitle-1 mb-3"
        v-text="p.yoast_head_json.og_description.replace(/(<([^>]+)>)/gi, '')"
      ></div>
      <v-btn
        :href="p.link"
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
onMounted(async () => {
  posts = await (
    await $fetch(
      'https://story.teahouse.team/wp-json/wp/v2/posts/?per_page=3&context=embed',
      {
        lazy: true,
      }
    )
  ).json()
})
</script>
