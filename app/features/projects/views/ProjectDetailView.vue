<template>
  <div>
    <AppLines />
    <AppLoader />
    <HomeContactButton />
    <AppNav />
    <main class="container">
      <ProjectDiabetes v-if="project === 'diabetes'" />
      <ProjectElaraby v-else-if="project === 'elaraby'" />
      <ProjectElarabyGermany v-else-if="project === 'elarabygermany'" />
      <ProjectKajito v-else-if="project === 'kajito'" />
      <ProjectMwm v-else-if="project === 'mwm'" />
      <ProjectStudigrid v-else-if="project === 'studigrid'" />
      <slot v-else />
    </main>
    <HomeFooter />
  </div>
</template>

<script setup lang="ts">
import AppLines from '~/components/AppLines.vue'
import AppLoader from '~/components/AppLoader.vue'
import HomeContactButton from '~/features/home/components/HomeContactButton.vue'
import AppNav from '~/components/AppNav.vue'
import HomeFooter from '~/features/home/components/HomeFooter.vue'
import ProjectDiabetes from '~/features/projects/components/ProjectDiabetes.vue'
import ProjectElaraby from '~/features/projects/components/ProjectElaraby.vue'
import ProjectElarabyGermany from '~/features/projects/components/ProjectElarabyGermany.vue'
import ProjectKajito from '~/features/projects/components/ProjectKajito.vue'
import ProjectMwm from '~/features/projects/components/ProjectMwm.vue'
import ProjectStudigrid from '~/features/projects/components/ProjectStudigrid.vue'

interface Props {
  project?: 'diabetes' | 'elaraby' | 'elarabygermany' | 'kajito' | 'mwm' | 'studigrid' | 'ellamart' | 'meta'
}

defineProps<Props>()

useHead({
  link: [
    { rel: 'shortcut icon', href: '/assets/imgs/favicon.ico' },
    { rel: 'stylesheet', href: '/assets/css/plugins.css' },
    { rel: 'stylesheet', href: '/assets/css/style.css' }
  ]
})
</script>
