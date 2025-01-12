<template>
  <section class="intro-profile md-mb50">
    <div class="row rest">
      <div class="col-lg-4 box-img main-bg">
        <div class="cont valign">
          <div class="full-width">
            <div class="img">
              <img src="/assets/imgs/header/personal-pic.jpg" alt="" />
              <span class="icon">
                <img src="/assets/imgs/header/javascript.svg" alt="" />
              </span>
              <span class="icon">
                <img src="/assets/imgs/header/icon2.png" alt="" />
              </span>
              <span class="icon">
                <img src="/assets/imgs/header/vue.svg" alt="" />
              </span>
            </div>
            <div class="info text-center mt-30">
              <h5>Karim Gamal</h5>
              <p class="fz-13 text-u">Available For Freelance</p>
            </div>
            <div class="social text-center mt-20">
              <!-- <a href="https://github.com/KarimGamal97">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/karim-gamal-415b45126/">
                <i class="fab fa-linkedin-in"></i>
              </a> -->
              <a
                href="https://wa.me/+201094123678"
                v-tippy="{
                  content: 'whatsapp',
                  arrow: true,
                  interactive: true,
                  placement: 'bottom',
                  theme: 'light',
                }"
              >
                <i class="fab fa-whatsapp"></i>
              </a>
              <a
                href="https://www.upwork.com/freelancers/~0135c4f6a4f1fb875c"
                v-tippy="{
                  content: 'upwork',
                  arrow: true,
                  interactive: true,
                  placement: 'bottom',
                  theme: 'light',
                }"
              >
                <img
                  src="/assets/imgs/header/upwork.svg"
                  style="width: 18px"
                  alt=""
                />
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
              >
                <img
                  src="/assets/imgs/header/codewars.svg"
                  style="width: 18px"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-8 content main-bg">
        <h1>
          Hello, I’m <span class="main-color">Karim Gamal</span>,
          <span class="bord"> Front-end Developer <i></i> </span> Based in
          Egypt.
        </h1>
        <div class="stauts mt-80">
          <div class="d-flex align-items-center">
            <div class="mr-40">
              <div class="d-flex align-items-center">
                <h2>+4</h2>
                <p>
                  Years <br />
                  of Experience
                </p>
              </div>
            </div>
            <div class="mr-40">
              <div class="d-flex align-items-center">
                <h2>+25</h2>
                <p>
                  Clients <br />
                  Worldwide
                </p>
              </div>
            </div>
            <div>
              <div class="butn-presv">
                <a
                  href="https://drive.google.com/file/d/1P20ZkzLL3DRxW8_rCqZvGWuiN7diAWLf/view"
                  class="butn butn-md butn-bord radius-5"
                >
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
  color: #fff;
}
</style>
