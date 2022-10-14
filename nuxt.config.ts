import { defineNuxtConfig } from 'nuxt'
const path = require('path')

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },

  css: [
    '@/assets/css/main.css',
  ],

  resolve:{
    alias:{
      '@' : path.resolve(__dirname, './src')
    },
  },
})
