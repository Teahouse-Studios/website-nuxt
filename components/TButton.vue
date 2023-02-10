<template>
  <button
    v-if="!props.href && !props.to"
    class="inline-flex justify-center rounded-lg text-md font-semibold py-3 px-5 bg-slate-900 text-white hover:opacity-75 transition-all"
  >
    <slot />
  </button>
  <a
    v-else-if="props.href"
    :href="props.href"
    class="inline-flex justify-center rounded-lg text-md font-semibold py-3 px-5 bg-slate-900 text-white hover:opacity-75 transition-all"
  >
    <slot />
  </a>
  <NuxtLink
    v-else-if="props.to"
    :to="props.to"
    class="inline-flex justify-center rounded-lg text-md font-semibold py-3 px-5 bg-slate-900 text-white hover:opacity-75 transition-all"
  >
    <slot
  /></NuxtLink>
</template>
<script setup lang="ts">
const props = defineProps<{
  to?: string
  href?: string
  bg?: string
}>()
</script>
