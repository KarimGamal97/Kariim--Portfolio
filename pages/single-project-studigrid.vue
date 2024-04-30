<template>
  <div>
    <Lines />
    <CommonLoader />
    <ContactUs />
    <CommonProgressScroll />
    <CommonCursor />
    <Nav />
    <main class="container">
      <Project />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Lines from "@/components/Common/Lines.vue";
import Footer from "~/components/dark/home/Footer.vue";
import ContactUs from "~/components/dark/home/ContactUs.vue";
import Nav from "~/components/dark/home/Nav.vue";
import Project from "@/components/dark/works/single-project/studigrid-proj.vue";
useHead({
  link: [
    { rel: "shortcut icon", href: "/assets/imgs/favicon.ico" },
    { rel: "stylesheet", href: "/assets/css/plugins.css" },
    { rel: "stylesheet", href: "/assets/css/style.css" },
  ],
});
</script>
