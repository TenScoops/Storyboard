/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'syne' : ['Syne Mono', 'Inter', 'sans-serif'],
        'spinnaker' : ['Spinnaker', 'Inter', 'sans-serif'],
        'varela' : ['Varela', 'Inter', 'sans-serif'],
        'sunshiney' : ['Sunshiney', 'Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}