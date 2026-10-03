<template>
  <div class="nav-top pt-30 pb-30">
    <div class="container">
      <div class="row">
        <div class="col-md-4 valign">
          <NuxtLink to="/" class="logo icon-img-60">
            <h3>Kariim</h3>
          </NuxtLink>
        </div>
        <div class="col-md-8">
          <div class="navbar">
            <div class="row justify-content-end rest">
              <div class="col-lg-8 rest">
                <ul class="navbar-nav main-bg d-flex justify-content-end">
                  <li v-for="(link, index) in links" :key="index" class="nav-item">
                    <NuxtLink :to="link.href">
                      <span>{{ link.title }}</span>
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="nav-butn" @click="toggleMenu">
        <span class="pe-7s-menu"></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { EXTERNAL_NAV_LINKS } from '~/constants/navigation.constants'

const links = EXTERNAL_NAV_LINKS

const toggleMenu = () => {
  if (!import.meta.client) return
  const win = window as unknown as { $: any }
  if (typeof win.$ !== 'undefined') {
    win.$('.navbar').slideToggle().toggleClass('active')
  }
}
</script>
