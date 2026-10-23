<template>
  <div class="nav-top pt-20 pb-20">
    <div class="container">
      <div class="row align-items-center">
        <!-- Logo -->
        <div class="col-lg-3 col-auto valign">
          <NuxtLink to="/" class="logo">
            <h3 class="brand-logo">
              <span class="main-color">K</span>ar<span class="brand-char"><span class="char-semi">;</span><span class="char-i">i</span></span>m
            </h3>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation Links -->
        <div class="col-lg-6 d-none d-lg-block text-center">
          <ul class="navbar-nav d-inline-flex flex-row align-items-center justify-content-center m-0">
            <li v-for="(link, index) in navLinks" :key="index" class="nav-item">
              <a :href="link.href" :data-scroll-nav="link.scrollNav">
                <span>{{ link.title }}</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Right Side: 3 Circles + Mobile Hamburger -->
        <div class="col-lg-3 col valign justify-content-end">
          <div class="header-right d-flex align-items-center justify-content-end">
            <div class="social d-flex align-items-center">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.url"
                v-tippy="{
                  content: social.tippyContent,
                  arrow: true,
                  interactive: true,
                  theme: 'light',
                  placement: 'bottom'
                }"
                target="_blank"
                class="circle-btn"
              >
                <i v-if="!social.isSvg" :class="social.icon"></i>
                <img
                  v-else
                  :src="social.svgPath"
                  style="width: 16px"
                  :alt="social.name"
                />
              </a>
              <a
                :href="`mailto:${contactInfo.email}`"
                v-tippy="{
                  content: contactInfo.email,
                  arrow: true,
                  interactive: true,
                  theme: 'light',
                  placement: 'bottom'
                }"
                class="circle-btn"
              >
                <i class="far fa-envelope"></i>
              </a>
            </div>

            <!-- Hamburger menu button for mobile -->
            <button
              type="button"
              class="mobile-menu-btn d-lg-none"
              :class="{ 'is-active': isMenuOpen }"
              aria-label="Toggle Navigation"
              @click="toggleMenu"
            >
              <span class="bar bar-1"></span>
              <span class="bar bar-2"></span>
              <span class="bar bar-3"></span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Dropdown Navbar -->
    <div class="mobile-navbar d-lg-none" :class="{ 'is-open': isMenuOpen }">
      <ul class="mobile-nav-list">
        <li v-for="(link, index) in navLinks" :key="index" class="mobile-nav-item">
          <a
            :href="link.href"
            :data-scroll-nav="link.scrollNav"
            @click="closeMenu"
          >
            <span>{{ link.title }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { directive as vTippy } from 'vue-tippy'
import { NAVIGATION_LINKS } from '~/constants/navigation.constants'
import { SOCIAL_LINKS, CONTACT_INFO } from '~/constants/social.constants'
import 'tippy.js/dist/tippy.css'

const navLinks = NAVIGATION_LINKS
const socialLinks = SOCIAL_LINKS
const contactInfo = CONTACT_INFO

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
.nav-top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: rgba(15, 15, 17, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  z-index: 9999;
  transition: all 0.3s ease;
}

.nav-top .nav-item {
  padding: 0 16px;
}

.nav-top .nav-item a {
  color: #c5c5c5;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  transition: all 0.25s ease;
  position: relative;
  display: inline-block;
  padding: 4px 0;
}

.nav-top .nav-item a:hover,
.nav-top .nav-item a.active {
  color: #c8f31d !important;
}

.nav-top .nav-item a.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #c8f31d;
  border-radius: 2px;
}

.social .circle-btn {
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  margin: 0 4px;
  color: #fff;
  font-size: 14px;
  transition: all 0.3s ease;
}

.social .circle-btn:hover {
  border-color: #c8f31d;
  color: #c8f31d;
  box-shadow: 0px 0px 10px rgba(200, 243, 29, 0.4);
}

/* Mobile Adjustments */
@media (max-width: 991px) {
  .nav-top {
    padding-top: 14px !important;
    padding-bottom: 14px !important;
  }

  .social .circle-btn {
    width: 36px;
    height: 36px;
    margin: 0 2px;
    font-size: 12px;
  }
}

/* Mobile Hamburger Button */
.mobile-menu-btn {
  width: 36px;
  height: 36px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  background: transparent;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-left: 8px;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;
}

.mobile-menu-btn .bar {
  width: 14px;
  height: 2px;
  background-color: #fff;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.mobile-menu-btn:hover,
.mobile-menu-btn.is-active {
  border-color: #c8f31d;
}

.mobile-menu-btn.is-active .bar-1 {
  transform: translateY(6px) rotate(45deg);
  background-color: #c8f31d;
}

.mobile-menu-btn.is-active .bar-2 {
  opacity: 0;
}

.mobile-menu-btn.is-active .bar-3 {
  transform: translateY(-6px) rotate(-45deg);
  background-color: #c8f31d;
}

/* Mobile Dropdown Navbar */
.mobile-navbar {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 0;
  opacity: 0;
  visibility: hidden;
  overflow: hidden;
  background: rgba(15, 15, 17, 0.98);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid transparent;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7);
}

.mobile-navbar.is-open {
  max-height: 320px;
  opacity: 1;
  visibility: visible;
  border-bottom-color: rgba(255, 255, 255, 0.1);
}

.mobile-nav-list {
  padding: 15px 0 20px 0;
  margin: 0;
  list-style: none;
  text-align: center;
}

.mobile-nav-item {
  padding: 8px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

.mobile-nav-item:last-child {
  border-bottom: none;
}

.mobile-nav-item a {
  color: #e2e8f0;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  display: block;
  padding: 8px 16px;
  transition: all 0.25s ease;
}

.mobile-nav-item a:hover,
.mobile-nav-item a.active {
  color: #c8f31d !important;
}

:deep(.tippy-box[data-theme~="light"]) {
  color: #c8f31d;
}

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
