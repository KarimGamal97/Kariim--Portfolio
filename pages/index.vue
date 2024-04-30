<template>
  <main>
    <dark />
  </main>
</template>

<script setup>
// import Navbar from "@/components/home/Navbar";
// import Lines from "@/components/Common/Lines";
import dark from "../pages/dark.vue";

// = Page Metadata
definePageMeta({
  layout: "default",
});
useHead({
  link: [
    { rel: "shortcut icon", href: "/assets/imgs/favicon.ico" },
    { rel: "stylesheet", href: "/assets/css/plugins.css" },
    { rel: "stylesheet", href: "/assets/css/style.css" },
  ],
});
</script>
