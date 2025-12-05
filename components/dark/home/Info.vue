<template>
  <div
    class="sec-box contact section-padding bord-thin-top"
    data-scroll-index="5"
  >
    <div class="row">
      <div class="col-lg-12">
        <div class="sec-head md-mb80 wow fadeIn">
          <h6 class="sub-title mb-15 opacity-7">Get In Touch</h6>
          <h2 class="fz-50">
            Let's make your brand <span class="main-color">brilliant </span>!
          </h2>
          <p class="fz-15 mt-10">
            If you would like to work with us or just want to get in touch,
            Reach out, we're here to listen and assist!
          </p>
          <div class="phone fz-30 fw-600 mt-30 underline">
            <a href="https://wa.me/+201094123678"> +(20)10 9412 3678 </a>
          </div>
          <ul class="rest social-text d-flex mt-60">
            <li class="mr-30">
              <a href="https://github.com/KarimGamal97" class="hover-this">
                <span class="hover-anim">Github</span>
              </a>
            </li>

            <li class="mr-30">
              <a
                href="https://www.linkedin.com/in/karim-gamal-415b45126/"
                class="hover-this"
              >
                <span class="hover-anim">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://wa.me/+201094123678" class="hover-this">
                <span class="hover-anim">Whatsapp </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- <div class="col-lg-7 valign">
        <div class="full-width wow fadeIn">
          <form id="contact-form" @submit.prevent="submitForm">
            <div class="messages"></div>
            <div class="controls row">
              <div class="col-lg-6">
                <div class="form-group mb-30">
                  <input
                    id="form_name"
                    type="text"
                    name="name"
                    placeholder="Name"
                    v-model="form.name"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mb-30">
                  <input
                    id="form_email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    v-model="form.email"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="form-group mb-30">
                  <input
                    id="form_subject"
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    v-model="form.subject"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <textarea
                    id="form_message"
                    name="message"
                    placeholder="Message"
                    rows="4"
                    style="resize: none"
                    v-model="form.message"
                  ></textarea>
                </div>
              </div>
              <div class="col-12">
                <div class="mt-30">
                  <button type="submit">
                    <span class="text">Send A Message</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import emailjs from "emailjs-com";
import { ref } from "vue";
const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const submitForm = () => {
  console.log(form.value);
  emailjs
    .send("service_wf44yg6", "template_pc3nm35", form.value)
    .then((res) => {
      console.log("SUCCESS!", res.status, res.text);
    })
    .catch((e) => {
      console.log(e);
    });
  console.log(form.value, "2");
};
</script>
