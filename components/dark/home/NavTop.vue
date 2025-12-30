<template>
  <div class="nav-top pt-30 pb-30">
    <div class="container">
      <div class="row">
        <div class="col-md-4 valign">
          <a href="#" class="logo icon-img-60">
            <h3>Kariim</h3>
          </a>
        </div>
        <div class="col-md-4 valign">
          <div class="social text-center full-width">
            <a
              href="https://github.com/KarimGamal97"
              v-tippy="{
                content: 'github',
                arrow: true,
                interactive: true,
                theme: 'light',
              }"
              target="_blank"
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              href="https://www.codewars.com/users/KarimGamal97"
              v-tippy="{
                content: 'codewars',
                arrow: true,
                interactive: true,
                placement: 'bottom',
                theme: 'light',
              }"
              target="_blank"
            >
              <img
                src="/assets/imgs/header/codewars.svg"
                style="width: 18px"
                alt=""
              />
            </a>
          </div>
        </div>
        <div class="col-md-4 valign">
          <div class="full-width info">
            <div class="d-flex justify-content-end">
              <a href="mailto:kariimgamal1997@gmail.com">
                <span class="sub-title fz-14" style="text-transform: none"
                  >kariimgamal1997@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="nav-butn">
        <span class="pe-7s-menu"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { directive } from "vue-tippy";
import { onMounted } from "vue";
import "tippy.js/dist/tippy.css";

export default {
  directives: {
    tippy: directive,
  },
  mounted() {
    console.log("NavTop component mounted");
    console.log("jQuery available:", typeof $ !== "undefined");

    if (typeof $ !== "undefined") {
      // Handle menu button click
      const navButn = document.querySelector(".nav-butn");
      console.log("navButn element found:", navButn);

      if (navButn) {
        navButn.addEventListener("click", function () {
          console.log("Menu button clicked!");
          const navbar = $(".navbar");
          console.log("Navbar element:", navbar);
          console.log("Navbar has 'active' class:", navbar.hasClass("active"));
          navbar.slideToggle().toggleClass("active");
        });
      }

      // Close menu when clicking on a nav item
      $(".navbar .nav-item").on("click", function () {
        console.log("Nav item clicked");
        if ($(".navbar").hasClass("active")) {
          console.log("Closing menu");
          $(".navbar").slideUp().removeClass("active");
        }
      });
    }
  },
};
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
