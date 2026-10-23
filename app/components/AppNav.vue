<template>
  <div class="nav-top pt-30 pb-30">
    <div class="container">
      <div class="row">
        <div class="col-md-4 valign">
          <NuxtLink to="/" class="logo">
            <h3 class="brand-logo">
              <span class="main-color">K</span>ar<span class="brand-char"><span class="char-semi">;</span><span class="char-i">i</span></span>m
            </h3>
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

<style scoped>
.brand-logo {
  font-weight: 700;
  letter-spacing: -0.5px;
  font-size: 26px;
  margin: 0;
  display: inline-flex;
  align-items: baseline;
  color: #fff;
  user-select: none;
  cursor: pointer;
}

.brand-char {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: baseline;
  color: #c8f31d;
  min-width: 8px;
  margin: 0 0.5px;
}

.char-semi,
.char-i {
  color: #c8f31d;
  transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-block;
  line-height: 1;
}

.char-i {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  text-align: center;
  opacity: 0;
  transform: translateY(6px) scale(0.8);
  pointer-events: none;
}

.logo:hover .char-semi {
  opacity: 0;
  transform: translateY(-6px) scale(0.8);
}

.logo:hover .char-i {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>
