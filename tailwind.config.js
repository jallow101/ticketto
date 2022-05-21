module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // screens: {
    //   'sm': '370px',
    //   // => @media (min-width: 576px) { ... }

    //   'md': '960px',
    //   // => @media (min-width: 960px) { ... }

    //   'lg': '1440px',
    //   // => @media (min-width: 1440px) { ... }
    // },
    extend: {
      backgroundImage: {
        'you': "url('./assets/you.jpg')",
        'popcaan': "url('./assets/popcaan.jpg')",
       
      }
    },
  },
  plugins: [],
}