/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('https://ghasedak.com/files/grad.png')",
      }

    },
    colors:{
      "bgf":"#1E1645",
      "goldtext":"#FFCC50",
      "whitec":"#FFFFFF",
      "grayt":"#BCBCBC",
      "graypro":"#85868C",
      "grayinput":"#F9F9F9",
      "bordercolor":"#828282",
      "headingpro":"#404040",
      "redd":"#FF0000",
      "green":"#00BF1D"
    }
  },
  plugins: [],
}
