/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        "neutral-two": "#0E0600",
        "banana": "#ffe072",
        "cherry": "#FF8C7C",
        "kiwi": "#B1E380",
        "text": "#FFEEE2"
      }
    },
  },
  plugins: [],
}

