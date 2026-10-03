<template>
  <div class="nav-top pt-30 pb-30">
    <div class="container">
      <div class="row">
        <div class="col-md-4 valign">
          <NuxtLink to="/" class="logo icon-img-60">
            <h3>Kariim</h3>
          </NuxtLink>
        </div>
        <div class="col-md-4 valign">
          <div class="social text-center full-width">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              v-tippy="{
                content: social.tippyContent,
                arrow: true,
                interactive: true,
                theme: 'light',
                placement: social.placement || 'top'
              }"
              target="_blank"
            >
              <i v-if="!social.isSvg" :class="social.icon"></i>
              <img
                v-else
                :src="social.svgPath"
                style="width: 18px"
                :alt="social.name"
              />
            </a>
          </div>
        </div>
        <div class="col-md-4 valign">
          <div class="full-width info">
            <div class="d-flex justify-content-end">
              <a :href="`mailto:${contactInfo.email}`">
                <span class="sub-title fz-14" style="text-transform: none">
                  {{ contactInfo.email }}
                </span>
              </a>
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
import { onMounted } from 'vue'
import { directive as vTippy } from 'vue-tippy'
import { SOCIAL_LINKS, CONTACT_INFO } from '~/constants/social.constants'
import 'tippy.js/dist/tippy.css'

const socialLinks = SOCIAL_LINKS
const contactInfo = CONTACT_INFO

const toggleMenu = () => {
  if (!import.meta.client) return
  const win = window as unknown as { $: any }
  if (typeof win.$ !== 'undefined') {
    win.$('.navbar').slideToggle().toggleClass('active')
  }
}

onMounted(() => {
  if (!import.meta.client) return
  const win = window as unknown as { $: any }
  if (typeof win.$ !== 'undefined') {
    win.$('.navbar .nav-item').on('click', () => {
      if (win.$('.navbar').hasClass('active')) {
        win.$('.navbar').slideUp().removeClass('active')
      }
    })
  }
})
</script>

<style>
.tippy-box[data-theme~="light"] {
  color: #c8f31d;
}
.nav-top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #000;
  z-index: 9999;
  transition: all 0.3s ease;
}
body {
  padding-top: 100px;
}
</style>
