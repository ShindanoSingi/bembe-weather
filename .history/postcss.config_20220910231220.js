const tailwindcss = require("tailwindcss")
module.exports = {
  theme: {
    screens: {
      xs: "300px",
      // => @media (min-width: 300px) { ... }

      sm: "480px",
      // => @media (min-width: 480px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [
    tailwindcss("./tailwind.config.js"),
    require("autoprefixer", "@tailwindcss/aspect-ratio"),
  ],
}
