<template>
  <div class="sec-box portfolio section-padding" data-scroll-index="3">
    <div class="sec-head mb-30">
      <div class="row">
        <div class="col-lg-6">
          <h6 class="sub-title opacity-7 mb-15">My Portfolio</h6>
          <h3>
            Dive into projects & <br />
            give your
            <span class="main-color"> feedback</span>
          </h3>
        </div>
        <div class="col-lg-6 valign">
          <div class="go-more full-width d-flex justify-content-end">
            <NuxtLink to="/works" class="d-flex">
              <span>
                View All Works
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
              </span>
            </NuxtLink>
          </div>
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
</style>
