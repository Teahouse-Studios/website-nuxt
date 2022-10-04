<template>
  <figure class="text-center mb-3">
    <ContentSlot :use="$slots.default" unwrap="p" />
    <figcaption class="text-subtitle-1">
      <ContentSlot :use="$slots.caption" unwrap="p" />
    </figcaption>
  </figure>
</template>
