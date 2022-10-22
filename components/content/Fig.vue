<template>
  <figure class="text-center mb-3">
    <Lightbox>
      <v-card class="markdown-fig mb-2">
        <v-img :src="props.src" :title="props.caption" />
      </v-card>
    </Lightbox>
    <figcaption class="text-subtitle-1" v-if="props.caption">
      {{ props.caption }}
    </figcaption>
  </figure>
</template>
<script setup lang="ts">
const props = defineProps<{
  src: string
  caption: string
}>()
</script>
<style lang="scss">
.markdown-fig:not(:hover) {
  box-shadow: none;
}
</style>
