<template>
  <div id="works" class="sec-box portfolio section-padding" data-scroll-index="3">
    <div class="sec-head mb-30">
      <div class="row">
        <div class="col-12">
          <h6 class="sub-title opacity-7 mb-15">My Best Creations</h6>
          <h3>
            Dive into projects & <br />
            give your
            <span class="main-color"> feedback</span>
          </h3>
        </div>
      </div>
    </div>
    <div class="gallery">
      <div class="row">
        <div
          v-for="(item, index) in projects.slice(0, 6)"
          :key="index"
          class="col-md-4 col-sm-12 items"
        >
          <div class="item mt-50 wow fadeInUp" data-wow-delay=".2s">
            <div class="img">
              <NuxtLink :to="item.link">
                <img v-if="item.photo" :src="item.photo" :alt="item.title" />
                <div v-else class="project-img-placeholder">
                  <i class="fas fa-image fz-30 opacity-7"></i>
                </div>
              </NuxtLink>
            </div>
            <div class="cont mt-30 d-flex align-items-center">
              <div>
                <span class="tag">{{ item.tag }}</span>
                <h6 class="line-height-1">
                  <NuxtLink :to="item.link">{{ item.title }}</NuxtLink>
                </h6>
              </div>
              <div class="ml-auto">
                <div class="arrow">
                  <NuxtLink :to="item.link">
                    <svg
                      class="arrow-right"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 34.2 32.3"
                      xml:space="preserve"
                      style="stroke-width: 2"
                    >
                      <line x1="0" y1="16" x2="33" y2="16"></line>
                      <line x1="17.3" y1="0.7" x2="33.2" y2="16.5"></line>
                      <line x1="17.3" y1="31.6" x2="33.5" y2="15.4"></line>
                    </svg>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="view-all-wrapper mt-60 text-center">
      <NuxtLink to="/works" class="view-all-btn">
        <span>View All Works</span>
        <svg
          class="arrow-right"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.2 32.3"
          xml:space="preserve"
          style="stroke-width: 2"
        >
          <line x1="0" y1="16" x2="33" y2="16"></line>
          <line x1="17.3" y1="0.7" x2="33.2" y2="16.5"></line>
          <line x1="17.3" y1="31.6" x2="33.5" y2="15.4"></line>
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProjectItem } from '~/features/projects/types/project.types'

interface Props {
  projects: ProjectItem[]
}

defineProps<Props>()
</script>

<style scoped>
.project-img-placeholder {
  width: 100%;
  height: 240px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px dashed rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c8f31d;
  transition: all 0.3s ease;
}

.item:hover .project-img-placeholder {
  border-color: rgba(200, 243, 29, 0.5);
  background: rgba(200, 243, 29, 0.05);
}

/* Bottom View All Works CTA */
.view-all-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.view-all-btn {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  padding: 14px 36px;
  border-radius: 40px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  cursor: pointer;
}

.view-all-btn .arrow-right {
  width: 22px;
  height: 22px;
  stroke: #fff;
  fill: none;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.3s ease;
}

.view-all-btn:hover {
  background: rgba(200, 243, 29, 0.08);
  border-color: rgba(200, 243, 29, 0.4);
  color: #c8f31d;
  box-shadow: 0 0 25px rgba(200, 243, 29, 0.2);
  transform: translateY(-2px);
}

.view-all-btn:hover .arrow-right {
  animation: arrowMove 0.9s infinite ease-in-out;
  stroke: #c8f31d;
}

@keyframes arrowMove {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(8px);
  }
}
</style>
