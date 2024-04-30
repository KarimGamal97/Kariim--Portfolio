<template>
  <div
    class="sec-box skills section-padding bord-thin-bottom"
    data-scroll-index="2"
  >
    <div class="row">
      <div class="col-lg-4 valign">
        <div class="sec-head md-mb80 wow fadeIn">
          <h6 class="sub-title opacity-7 mb-15">Our Skills</h6>
          <h3>
            <span>Spotlight </span> on
            <span class="main-color">Success </span> Route
          </h3>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="row">
          <div v-for="(item, index) in data" :key="index" class="col-md-6">
            <div class="item mb-30">
              <div class="d-flex align-items-center mb-30">
                <div class="mr-30">
                  <div class="img icon-img-40">
                    <img :src="item.photo" alt="" />
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
<script setup>
import data from "@/data/home/skills.json";
</script>
