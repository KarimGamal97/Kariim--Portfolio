<template>
  <HomeView />
</template>

<script setup lang="ts">
import HomeView from '~/features/home/views/HomeView.vue'

definePageMeta({
  middleware: [
    () => navigateTo('/', { replace: true })
  ]
})
</script>
