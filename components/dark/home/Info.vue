<template>
  <div
    class="sec-box contact section-padding bord-thin-top"
    data-scroll-index="5"
  >
    <div class="row">
      <div class="col-lg-5">
        <div class="sec-head md-mb80 wow fadeIn">
          <h6 class="sub-title mb-15 opacity-7">Get In Touch</h6>
          <h2 class="fz-50">
           Let's create <span class="main-color">solutions </span> that drive real results 
          </h2>
          <p class="fz-15 mt-10">
            If you would like to work with Me or just want to get in touch,
            Reach out, I am here to listen and assist!
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
      <div class="col-lg-7 valign">
        <div class="full-width wow fadeIn">
          <form ref="contactForm" @submit.prevent="submitForm">
            <!-- Status Message -->
            <div v-if="status" class="messages mb-30" :class="statusClass">
              {{ status }}
            </div>

            <div class="controls row">
              <div class="col-lg-6">
                <div class="form-group mb-30">
                  <input
                    id="form_name"
                    type="text"
                    name="name"
                    placeholder="Name"
                    v-model="form.name"
                    required
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
                    required
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
                    required
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
                    required
                  ></textarea>
                </div>
              </div>

              <!-- Spam Protection (hidden field) -->
              <input type="text" name="_gotcha" style="display:none" />

              <div class="col-12">
                <div class="mt-30">
                  <button type="submit" :disabled="isSubmitting">
                    <span class="text">
                      {{ isSubmitting ? 'Sending...' : 'Send A Message' }}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const contactForm = ref(null);
const status = ref("");
const isSubmitting = ref(false);

const statusClass = computed(() => {
  return status.value.includes('Success') ? 'text-success' : 'text-danger';
});

const submitForm = async () => {
  isSubmitting.value = true;
  status.value = "";
  
  const formData = new FormData();
  formData.append('name', form.value.name);
  formData.append('email', form.value.email);
  formData.append('subject', form.value.subject);
  formData.append('message', form.value.message);
  
  try {
    const res = await fetch('https://formspree.io/f/xldajzww', {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' }
    });
    
    if (res.ok) {
      status.value = 'Success! Your message has been sent.';
      form.value = { name: "", email: "", subject: "", message: "" };
    } else {
      status.value = 'Error! Please try again.';
    }
  } catch (error) {
    status.value = 'Error! Please try again.';
  } finally {
    isSubmitting.value = false;
  }
};
</script>