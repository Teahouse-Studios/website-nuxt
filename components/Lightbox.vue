<template>
  <v-dialog v-model="dialog">
    <template v-slot:activator="{ props }">
      <div class="lightbox-content" v-bind="props"><slot /></div>
    </template>

    <ClientOnly
      ><Zoomer><slot /></Zoomer
    ></ClientOnly>
  </v-dialog>
</template>
<script setup lang="ts">
const dialog = $ref(false)
</script>
