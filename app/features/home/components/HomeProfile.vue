<template>
  <section class="intro-profile md-mb50">
    <div class="row rest">
      <div class="col-lg-4 box-img main-bg">
        <div class="cont valign">
          <div class="full-width">
            <div class="img">
              <img src="/assets/imgs/header/personal-pic.jpg" alt="Karim Gamal" />
              <span
                class="icon icon-js"
                v-tippy="{ content: 'JavaScript', arrow: true, theme: 'light' }"
              >
                <img src="/assets/imgs/header/javascript.svg" alt="JavaScript" />
              </span>
              <span
                class="icon icon-github"
                v-tippy="{ content: 'GitHub', arrow: true, theme: 'light' }"
              >
                <img src="/assets/imgs/header/icon2.png" alt="GitHub" />
              </span>
              <span
                class="icon icon-vue"
                v-tippy="{ content: 'Vue.js', arrow: true, theme: 'light' }"
              >
                <img src="/assets/imgs/header/vue.svg" alt="Vue" />
              </span>
              <span
                class="icon icon-node"
                v-tippy="{ content: 'Node.js', arrow: true, theme: 'light' }"
              >
                <img src="/assets/imgs/header/nodejs-icon.svg" alt="Node.js" />
              </span>
              <span
                class="icon icon-express"
                v-tippy="{ content: 'Express.js', arrow: true, theme: 'light' }"
              >
                <img src="/assets/imgs/header/express.svg" alt="Express" />
              </span>
            </div>
            <div class="info text-center mt-30">
              <h5>Karim Gamal</h5>
              <p class="fz-13 text-u mb-10">Available For Freelance</p>
              <a
                href="https://www.upwork.com/freelancers/~0135c4f6a4f1fb875c"
                target="_blank"
                class="top-rated-badge"
                v-tippy="{
                  content: 'Verified Top Rated Freelancer on Upwork',
                  arrow: true,
                  placement: 'bottom',
                  theme: 'light'
                }"
              >
                <img
                  src="/assets/imgs/header/upwork.svg"
                  alt="Upwork"
                  class="upwork-icon"
                />
                <span>Top Rated on Upwork</span>
              </a>
            </div>
            <div class="social text-center mt-20">
              <a
                href="https://wa.me/+201094123678"
                v-tippy="{
                  content: 'whatsapp',
                  arrow: true,
                  interactive: true,
                  placement: 'bottom',
                  theme: 'light'
                }"
                target="_blank"
              >
                <i class="fab fa-whatsapp"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/karim-gamal-415b45126/"
                v-tippy="{
                  content: 'linkedin',
                  arrow: true,
                  interactive: true,
                  theme: 'light'
                }"
                target="_blank"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.upwork.com/freelancers/~0135c4f6a4f1fb875c"
                v-tippy="{
                  content: 'upwork',
                  arrow: true,
                  interactive: true,
                  placement: 'bottom',
                  theme: 'light'
                }"
                target="_blank"
              >
                <img
                  src="/assets/imgs/header/upwork.svg"
                  style="width: 18px"
                  alt="Upwork"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-8 content main-bg">
        <h1>
          Hi! I'm <span class="main-color">Karim Gamal</span>,
          <span class="bord">Full-Stack Developer <i></i></span> 
          Expert in High-Performance Web Solutions.
        </h1>
        <div class="stauts mt-80">
          <div class="d-flex align-items-center">
            <div class="mr-40">
              <div class="d-flex align-items-center">
                <h2>+5</h2>
                <p>
                  Years <br />
                  of Experience
                </p>
              </div>
            </div>
            <div class="mr-40">
              <div class="d-flex align-items-center">
                <h2>+30</h2>
                <p>
                  Clients <br />
                  Worldwide
                </p>
              </div>
            </div>
            <div>
              <div class="butn-presv">
                <a
                  :href="resumeUrl"
                  class="butn butn-md butn-bord radius-5"
                  target="_blank"
                >
                  <span>Preview Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { directive as vTippy } from 'vue-tippy'
import { CONTACT_INFO } from '~/constants/social.constants'
import 'tippy.js/dist/tippy.css'

const resumeUrl = CONTACT_INFO.resumeUrl
</script>

<style>
.tippy-box[data-theme~="light"] {
  color: #fff;
}

.top-rated-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(200, 243, 29, 0.08);
  border: 1px solid rgba(200, 243, 29, 0.35);
  padding: 6px 14px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 500;
  color: #c8f31d;
  vertical-align: middle;
  margin: 0 10px;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  text-decoration: none;
  line-height: 1;
}

.top-rated-badge:hover {
  background: rgba(200, 243, 29, 0.18);
  border-color: #c8f31d;
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(200, 243, 29, 0.25);
}

.top-rated-badge .upwork-icon {
  width: 16px;
  height: 16px;
  object-fit: contain;
}

.info .top-rated-badge {
  margin: 6px 0 0 0;
  font-size: 13px;
  padding: 5px 12px;
}

/* Floating Skill Icons with Smooth Micro-Animation */
.intro-profile .box-img .img .icon {
  transition: box-shadow 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
  cursor: pointer;
}

.intro-profile .box-img .img .icon:hover {
  border-color: rgba(200, 243, 29, 0.6);
  box-shadow: 0 0 15px rgba(200, 243, 29, 0.35);
  animation-play-state: paused;
}

.intro-profile .box-img .img .icon.icon-js {
  top: 30px;
  left: -20px;
  animation: floatIcon1 4.5s ease-in-out infinite;
}

.intro-profile .box-img .img .icon.icon-github {
  top: 42%;
  right: -22px;
  animation: floatIcon2 5.2s ease-in-out infinite 0.4s;
}

.intro-profile .box-img .img .icon.icon-vue {
  bottom: 25px;
  left: 20px;
  animation: floatIcon3 4.8s ease-in-out infinite 0.8s;
}

.intro-profile .box-img .img .icon.icon-node {
  top: 15px;
  right: 15px;
  animation: floatIcon4 5.5s ease-in-out infinite 1.2s;
}

.intro-profile .box-img .img .icon.icon-express {
  width: auto;
  height: 32px;
  padding: 4px 10px;
  bottom: 35px;
  right: -12px;
  animation: floatIcon5 4.4s ease-in-out infinite 0.6s;
}

.intro-profile .box-img .img .icon.icon-express img {
  height: 40%;
  width: auto;
  filter: brightness(0) invert(1);
}

@keyframes floatIcon1 {
  0%, 100% {
    transform: translateY(0px) rotate(10deg);
  }
  50% {
    transform: translateY(-7px) rotate(12deg);
  }
}

@keyframes floatIcon2 {
  0%, 100% {
    transform: translateY(0px) rotate(15deg);
  }
  50% {
    transform: translateY(6px) rotate(13deg);
  }
}

@keyframes floatIcon3 {
  0%, 100% {
    transform: translateY(0px) rotate(-10deg);
  }
  50% {
    transform: translateY(-6px) rotate(-8deg);
  }
}

@keyframes floatIcon4 {
  0%, 100% {
    transform: translateY(0px) rotate(-12deg);
  }
  50% {
    transform: translateY(7px) rotate(-14deg);
  }
}

@keyframes floatIcon5 {
  0%, 100% {
    transform: translateY(0px) rotate(8deg);
  }
  50% {
    transform: translateY(-6px) rotate(6deg);
  }
}
</style>
