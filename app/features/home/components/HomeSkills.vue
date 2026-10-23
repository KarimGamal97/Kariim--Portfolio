<template>
  <div
    id="skills"
    class="sec-box skills section-padding bord-thin-bottom"
    data-scroll-index="2"
  >
    <div class="row">
      <div class="col-lg-4 valign">
        <div class="sec-head md-mb80 wow fadeIn">
          <h6 class="sub-title opacity-7 mb-15">My Skills</h6>
          <h3>
            <span>Skills </span>
            That Drive <span class="main-color"> Results</span>
          </h3>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="row">
          <div
            v-for="(item, index) in skills"
            :key="index"
            class="col-md-6"
          >
            <div class="item mb-30">
              <div class="d-flex align-items-center mb-30">
                <div class="mr-30">
                  <div class="img icon-img-40">
                    <img :src="item.photo" :alt="item.title" />
                  </div>
                </div>
                <div>
                  <h6 class="fz-18">{{ item.title }}</h6>
                </div>
              </div>
              <div class="skill-progress">
                <span class="progres" :data-value="item.persent"></span>
              </div>
              <span class="value">{{ item.persent }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SkillItem } from '~/features/home/types/home.types'

interface Props {
  skills: SkillItem[]
}

defineProps<Props>()
</script>

<style scoped>
.skills .item .icon-img-40 {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.skills .item .icon-img-40 img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>
