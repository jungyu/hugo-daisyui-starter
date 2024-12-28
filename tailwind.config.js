/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: [
    "./content/**/*.{html,js,md}",
    "./layouts/**/*.{html}",
    "./assets/js/**.js",
    "./data/**/*.json"
  ],
  safelist: [],
  darkMode: "class",
  important: true,
  theme: {
    extend: {}
  },
  daisyui: {
    themes: ["fantasy", "dracula"],
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require("daisyui")
  ]
}

