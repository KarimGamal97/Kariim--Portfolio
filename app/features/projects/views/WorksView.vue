<template>
  <div>
    <AppLines />
    <AppLoader />
    <HomeContactButton />
    <AppNav />
    <main class="container">
      <WorksPortfolio :projects="projects" />
    </main>
    <HomeFooter />
  </div>
</template>

<script setup lang="ts">
import { useProjects } from '~/features/projects/composables/useProjects'
import AppLines from '~/components/AppLines.vue'
import AppLoader from '~/components/AppLoader.vue'
import HomeContactButton from '~/features/home/components/HomeContactButton.vue'
import AppNav from '~/components/AppNav.vue'
import WorksPortfolio from '~/features/projects/components/WorksPortfolio.vue'
import HomeFooter from '~/features/home/components/HomeFooter.vue'

const { projects } = useProjects()

useHead({
  link: [
    { rel: 'shortcut icon', href: '/assets/imgs/favicon.ico' },
    { rel: 'stylesheet', href: '/assets/css/plugins.css' },
    { rel: 'stylesheet', href: '/assets/css/style.css' }
  ]
})
</script>
