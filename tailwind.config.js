/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      gridTemplateColumns:{
        app:"repeat(auto-fit,minmax(200px, 1fr))",
        profile:"max-content 1fr min-content",
        form:"minmax(7.5rem,17.5rem ) minmax(25rem, 1fr) minmax(0, 15rem)"
      },
      backgroundColor: {
        'my_bg': '#292C34',
      },
      backgroundImage: {
        'my_bg_image' : "url('../public/bg.png')",
      },
      fontFamily: {
        sans:["var(--font-roboto)"]
      }
    },
  },
  plugins: [],
}

