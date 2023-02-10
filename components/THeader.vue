<template>
  <header
    class="backdrop-blur sticky flex top-0 z-10 container mx-auto py-1 max-h-16 items-center"
  >
    <RouterLink to="/" class="flex mr-4" title="首页">
      <nuxt-img src="/logo.svg" alt="Teahouse Studios" class="block h-16" />
    </RouterLink>
    <!-- <Popover class="relative">
      <PopoverButton
        class="inline-flex justify-center rounded-lg text-md font-semibold py-2 px-5 hover:bg-black hover:bg-opacity-10 transition-all"
        >Solutions</PopoverButton
      >

      <PopoverPanel class="absolute z-30 w-auto">
        <div class="grid grid-cols-2">
          <a href="/analytics">Analytics</a>
          <a href="/engagement">Engagement</a>
          <a href="/security">Security</a>
          <a href="/integrations">Integrations</a>
        </div>

        <img src="/solutions.jpg" alt="" />
      </PopoverPanel>
    </Popover> -->
  </header>
</template>
<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
const props = defineProps<{ enableProgress?: boolean }>()
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
