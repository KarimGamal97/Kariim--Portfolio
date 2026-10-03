<template>
  <div>
    <!-- <AppCursor /> -->
    <AppProgressScroll />
    <slot />
  </div>
</template>

<script setup lang="ts">
import AppCursor from '~/components/AppCursor.vue'
import AppProgressScroll from '~/components/AppProgressScroll.vue'

useHead({
  link: [{ rel: 'stylesheet', href: '/landing-preview/css/preview-style.css' }]
})
</script>
