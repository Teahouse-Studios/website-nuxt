<template>
  <v-app-bar app clipped-left dark elevate-on-scroll extension-height="4px">
    <v-toolbar-title>
      <RouterLink
        to="/"
        class="d-none d-sm-flex"
        title="首页"
        style="display: flex !important"
      >
        <img
          src="~/assets/logo.svg"
          alt="Teahouse Studios"
          class="shrink mr-2"
          height="48"
        />
      </RouterLink>
    </v-toolbar-title>
    <template #extension>
      <v-progress-linear
        v-if="props.enableProgress"
        :model-value="progress"
        color="primary"
    /></template>
  </v-app-bar>
</template>
<script setup lang="ts">
const props = defineProps<{ enableProgress: boolean }>()
let progress = ref(0)
if (props.enableProgress && process.client) {
  const section = document.querySelector('main')!
  const scroll = () => {
    let scrollDistance = -section.getBoundingClientRect().top
    let progressPercentage =
      (scrollDistance /
        (section.getBoundingClientRect().height -
          document.documentElement.clientHeight)) *
      100

    let val = Math.floor(progressPercentage)

    progress.value = val
  }

  onMounted(() => {
    window.addEventListener('scroll', scroll)
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', scroll)
  })
}
</script>
