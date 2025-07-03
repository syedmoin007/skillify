/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#7c3aed',
          light: '#a78bfa',
        },
        accent: '#0ea5e9',
      },
    },
  },
  plugins: [],
}
