<template>
  <div class="sec-box portfolio section-padding" data-scroll-index="3">
    <div class="sec-head mb-30">
      <div class="row">
        <div class="col-lg-6">
          <h6 class="sub-title opacity-7 mb-15">My Portfolio</h6>
          <h3>
            Dive into  projects & <br />
            give  your
            <span class="main-color"> feedback</span>
          </h3>
        </div>
        <div class="col-lg-6 valign">
          <div class="go-more full-width d-flex justify-content-end">
            <a href="/works" class="d-flex">
              <span
                >View All Works
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
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="gallery">
      <div class="row">
        <div
          v-for="(item, index) in data.slice(o, 6)"
          :key="index"
          class="col-md-4 col-sm-12 items"
        >
          <div class="item mt-50 wow fadeInUp" data-wow-delay=".2s">
            <div class="img">
              <a :href="item.link">
                <img :src="item.photo" alt="" />
              </a>
            </div>
            <div class="cont mt-30 d-flex align-items-center">
              <div>
                <span class="tag">{{ item.tag }}</span>
                <h6 class="line-height-1">
                  <a :href="item.link">{{ item.title }}</a>
                </h6>
              </div>
              <div class="ml-auto">
                <div class="arrow">
                  <a :href="item.link">
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
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import data from "@/data/home/less-works.json";
</script>
