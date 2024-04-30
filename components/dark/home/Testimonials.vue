<template>
  <div class="sec-box testimonials section-padding">
    <div class="pad-left">
      <div class="sec-head mb-80 wow fadeInUp">
        <div class="row">
          <div class="col-lg-7">
            <h6 class="sub-title opacity-7 mb-15">Testimonials</h6>
            <h3>
              A Trusted Choice for <span class="main-color"> Clients</span>
            </h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-9">
          <div class="testim-swiper wow fadeIn">
            <div class="testim">
              <Swiper
                effect="fade"
                id="content-carousel-container-unq-testim"
                class="swiper-container"
                v-bind="swiperOptions"
                :loop="true"
              >
                <SwiperSlide>
                  <div class="item">
                    <div class="icon-img-60 mr-60">
                      <img src="/assets/imgs/svg-assets/quote.png" alt="" />
                    </div>

                    <div>
                      <div class="cont mb-30">
                        <div class="d-flex align-items-center">
                          <div class="rate-stars fz-12">
                            <span class="rate main-color">
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                            </span>
                            <span class="fz-12 opacity-7 ml-10">
                              (10 Reviews)
                            </span>
                          </div>
                        </div>
                        <p class="fz-20 mt-15">
                          Karim helped us to optimize our html code with
                          success. Thank you for your time and help!
                        </p>
                      </div>
                      <div class="d-flex align-items-center">
                        <div>
                          <div class="img">
                            <img
                              src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairSides&accessoriesType=Blank&hairColor=BrownDark&facialHairType=BeardMajestic&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Brown"
                            />
                          </div>
                        </div>
                        <div class="ml-30">
                          <div class="info">
                            <h6 class="main-color">Fernando J Marcano</h6>
                            <span class="fz-13 mt-10 opacity-8">
                              Upwork customer
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="item d-flex">
                    <div>
                      <div class="icon-img-60 mr-60">
                        <img src="/assets/imgs/svg-assets/quote.png" alt="" />
                      </div>
                    </div>
                    <div>
                      <div class="cont mb-30">
                        <div class="d-flex align-items-center">
                          <div class="rate-stars fz-12">
                            <span class="rate main-color">
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                            </span>
                            <span class="fz-12 opacity-7 ml-10">
                              (26 Reviews)
                            </span>
                          </div>
                        </div>
                        <p class="fz-20 mt-15">
                          Very good designer. Finished work fast and he solved
                          all the problems we faced during the project. I highly
                          recommend him. Thank you so much!
                        </p>
                      </div>
                      <div class="d-flex align-items-center">
                        <div>
                          <div class="img">
                            <img
                              src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesar&accessoriesType=Kurt&hairColor=SilverGray&facialHairType=BeardMedium&facialHairColor=Blonde&clotheType=GraphicShirt&clotheColor=White&graphicType=Skull&eyeType=Surprised&eyebrowType=FlatNatural&mouthType=Default&skinColor=Brown"
                            />
                          </div>
                        </div>
                        <div class="ml-30">
                          <div class="info">
                            <h6 class="main-color">Abdullah Almolhem</h6>
                            <span class="fz-13 mt-10 opacity-8">
                              Upwork customer
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="item d-flex">
                    <div>
                      <div class="icon-img-60 mr-60">
                        <img src="/assets/imgs/svg-assets/quote.png" alt="" />
                      </div>
                    </div>
                    <div>
                      <div class="cont mb-30">
                        <div class="d-flex align-items-center">
                          <div class="rate-stars fz-12">
                            <span class="rate main-color">
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                            </span>
                            <span class="fz-12 opacity-7 ml-10">
                              (26 Reviews)
                            </span>
                          </div>
                        </div>
                        <p class="fz-20 mt-15">
                          Great developer, worked perfectly on my emergency
                          project and quickly mastered everything I needed.
                          respectable We will work together again soon
                        </p>
                      </div>
                      <div class="d-flex align-items-center">
                        <div>
                          <div class="img">
                            <img
                              src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShaggyMullet&accessoriesType=Prescription02&hairColor=Brown&facialHairType=BeardMajestic&facialHairColor=Black&clotheType=BlazerSweater&eyeType=Close&eyebrowType=SadConcerned&mouthType=Twinkle&skinColor=Tanned"
                            />
                          </div>
                        </div>
                        <div class="ml-30">
                          <div class="info">
                            <h6 class="main-color">Trippie Fady</h6>
                            <span class="fz-13 mt-10 opacity-8">
                              Upwork customer
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div class="col-lg-3 d-flex align-items-end justify-content-end">
          <div
            class="swiper-controls testim-controls arrow-out d-flex mr-20 ml-auto"
          >
            <div
              class="swiper-button-prev"
              tabIndex="0"
              role="button"
              aria-label="Previous slide"
              aria-disabled="true"
            >
              <span class="left">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </div>
            <div
              class="swiper-button-next ml-50"
              tabIndex="0"
              role="button"
              aria-label="Next slide"
              aria-disabled="false"
            >
              <span class="right">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <span class="icon-qoute">
      <i class="fas fa-quote-left"></i>
    </span>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper";

const swiperOptions = {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 1000,

  navigation: {
    nextEl: ".testimonials .swiper-button-next",
    prevEl: ".testimonials .swiper-button-prev",
  },
};
</script>
