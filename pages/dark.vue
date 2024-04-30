<template>
  <div>
    <Lines />
    <CommonLoader />
    <ContactUs />
    <CommonProgressScroll />
    <CommonCursor />
    <NavTop />
    <main class="container">
      <Profile />
      <Navbar />
      <div class="in-box">
        <Service />
        <Skills />
        <Portfolio />
        <Testimonials />
        <Info />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Lines from "~/components/Common/Lines.vue";
import ContactUs from "~/components/dark/home/ContactUs.vue";
import Footer from "~/components/dark/home/Footer.vue";
import Info from "~/components/dark/home/Info.vue";
import NavTop from "~/components/dark/home/NavTop.vue";
import Navbar from "~/components/dark/home/Navbar.vue";
import Portfolio from "~/components/dark/home/Portfolio.vue";
import Profile from "~/components/dark/home/Profile.vue";
import Service from "~/components/dark/home/Service.vue";
import Skills from "~/components/dark/home/Skills.vue";
import Testimonials from "~/components/dark/home/Testimonials.vue";

useHead({
  link: [
    { rel: "shortcut icon", href: "/assets/imgs/favicon.ico" },
    { rel: "stylesheet", href: "/assets/css/plugins.css" },
    { rel: "stylesheet", href: "/assets/css/style.css" },
  ],
});
</script>
