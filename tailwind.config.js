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
      },
      screens: {
        'xs': '480px',  
        'sm': '640px', 
        'md': '768px',     
        'lg': '1024px',
        'xl': '1280px',     
        '2xl': '1536px',
        '3xl': '1800px'    
      },
    },
  },
  plugins: [],
}