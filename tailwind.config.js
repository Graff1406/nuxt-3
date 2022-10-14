module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    // "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        success: "#16a34a",
        disabled: "#f3f4f6",
        error: "#e11d48",
      },
    },
  },
  plugins: [],
  safelist: ["bg-primary", "bg-success", "bg-disabled", "bg-error"],
};

/*
How install  
1 step
  npm install -D tailwindcss postcss@latest autoprefixer@latest
  npx tailwindcss init

2 step 
  create "assets/css/main.css" 
    and insert
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

3 step
  import { defineNuxtConfig } from 'nuxt';
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
  });

4 step
  tailwind.config.js
  module.exports = {
  content: [
    "./components/**\/\*\.{js,vue,ts}", Удалить все обратные косые
    "./layouts/**\/\*\.vue",
    "./pages/**\/\*\.vue",
    "./plugins/**\/\*\.{js,ts}",
    "./app.vue"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
*/
