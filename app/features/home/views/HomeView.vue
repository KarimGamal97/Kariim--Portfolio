<template>
  <div>
    <AppLines />
    <AppLoader />
    <HomeContactButton />
    <HomeNavTop />
    <main class="container">
      <HomeProfile />
      <HomeNavbar />
      <div class="in-box">
        <HomeServices :services="services" />
        <HomeSkills :skills="skills" />
        <HomePortfolio :projects="featuredProjects" />
        <HomeTestimonials :testimonials="testimonials" />
        <HomeContact />
      </div>
    </main>
    <HomeFooter />
  </div>
</template>

<script setup lang="ts">
import { useHome } from '~/features/home/composables/useHome'
import AppLines from '~/components/AppLines.vue'
import AppLoader from '~/components/AppLoader.vue'
import HomeContactButton from '~/features/home/components/HomeContactButton.vue'
import HomeNavTop from '~/features/home/components/HomeNavTop.vue'
import HomeProfile from '~/features/home/components/HomeProfile.vue'
import HomeNavbar from '~/features/home/components/HomeNavbar.vue'
import HomeServices from '~/features/home/components/HomeServices.vue'
import HomeSkills from '~/features/home/components/HomeSkills.vue'
import HomePortfolio from '~/features/home/components/HomePortfolio.vue'
import HomeTestimonials from '~/features/home/components/HomeTestimonials.vue'
import HomeContact from '~/features/home/components/HomeContact.vue'
import HomeFooter from '~/features/home/components/HomeFooter.vue'

const { services, skills, featuredProjects, testimonials } = useHome()

useHead({
  link: [
    { rel: 'shortcut icon', href: '/assets/imgs/favicon.ico' },
    { rel: 'stylesheet', href: '/assets/css/plugins.css' },
    { rel: 'stylesheet', href: '/assets/css/style.css' }
  ]
})
</script>
