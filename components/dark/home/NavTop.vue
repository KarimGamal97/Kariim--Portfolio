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
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/karim-gamal-415b45126/"
              v-tippy="{
                content: 'linkedin',
                arrow: true,
                interactive: true,
                theme: 'light',
              }"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://wa.me/+201094123678"
              v-tippy="{
                content: 'whatsapp',
                arrow: true,
                interactive: true,
                theme: 'light',
              }"
            >
              <i class="fab fa-whatsapp"></i>
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
// import VueTippy from "vue-tippy";
import "tippy.js/dist/tippy.css";

export default {
  directives: {
    tippy: directive,
  },
};
</script>

<style>
.tippy-box[data-theme~="light"] {
  color: #c8f31d;
}
</style>
