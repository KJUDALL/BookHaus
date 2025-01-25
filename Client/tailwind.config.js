//! created tailwind.config.js file in client directory here. -AJ

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*..{js,jsx,ts,tsx}",      //! configured tailwind css file to specify paths to all template files here. -AJ
    "./public/index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

