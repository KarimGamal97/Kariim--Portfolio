<template>
  <div
    class="sec-box services section-padding bord-thin-bottom"
    data-scroll-index="1"
  >
    <div class="sec-head mb-80 wow fadeInUp">
      <div class="row justify-content-center">
        <div class="col-lg-6 text-center">
          <h6 class="sub-title opacity-7 mb-15">Our Services</h6>
          <h3>
            Turn Ideas
            <span class="main-color">Into Actionable</span> Insights
          </h3>
        </div>
      </div>
    </div>
    <div class="row">
      <div v-for="(item, index) in data" :key="index" class="col-md-4">
        <div class="item mb-40 wow fadeIn" data-wow-delay=".2s">
          <span class="icon-img-70 mb-30 opacity-7">
            <img :src="item.icon" alt="" />
          </span>
          <h6 class="text-u ls1 mb-15">{{ item.title }}</h6>
          <p>{{ item.description }}</p>
          <div class="bord-color"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import data from "../../../data/home/services.json";
</script>
