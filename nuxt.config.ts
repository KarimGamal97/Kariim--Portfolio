import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
  ssr: false,
  typescript: {
    shim: false,
  },
  nitro: {},
  alias: {
    "@": fileURLToPath(new URL("./", import.meta.url)),
  },
  app: {
    head: {
      title: "Kariim",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
        {
          "http-equiv": "X-UA-Compatible",
          content: "IE=edge",
        },
        {
          name: "keywords",
          content:
            "Kariim Personal Portfolio , vue.js frontend developer , nuxt developer , html5 , css3 , javascript",
        },
        {
          name: "description",
          content: "Kariim Personal Portfolio",
        },
        {
          name: "author",
          content: "Kariim",
        },
      ],

      script: [
        { src: "/assets/js/jquery-3.6.0.min.js" },
        { src: "/assets/js/jquery-migrate-3.4.0.min.js" },
        { src: "/assets/js/plugins.js" },
        { src: "/assets/js/scripts.js" },
        { src: "/assets/js/three.min.js", defer: true },
      ],
    },
  },
  css: ["@/styles/globals.css"],
  webpack: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        layouts: true,
      },
    },
  },
});
