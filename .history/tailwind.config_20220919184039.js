/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {

      'sm': {'min': '640px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '799px'},
      // => @media (min-width: 768px and max-width: 819px) { ... }

      'lg': {'min': '800px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'xl': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      '2xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '3xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
