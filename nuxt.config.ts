import { googleFonts } from "@nuxtjs/google-fonts";

export default defineNuxtConfig({
  css: ["@/assets/css/main.scss"],
  googleFonts: {
    families: {
      Montserrat: {
        wght: [400, 500, 600, 700],
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
