<template>
  <nav class="navbar">
    <div class="row justify-content-end rest">
      <div class="col-lg-8 rest">
        <ul class="navbar-nav main-bg d-flex justify-content-end">
          <li
            v-for="(link, index) in links"
            :key="index"
            class="nav-item"
          >
            <a :href="link.href" :data-scroll-nav="link.scrollNav">
              <span>{{ link.title }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { NAVIGATION_LINKS } from '~/constants/navigation.constants'

const links = NAVIGATION_LINKS
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 85px;
  z-index: 99;
  pointer-events: none;
}

.navbar .navbar-nav {
  pointer-events: auto;
}
</style>
