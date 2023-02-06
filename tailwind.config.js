/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '375px',
      md: '1440px',
    },
    extend: {
      colors: {
      marineBlue: '#01152d',
      purplishBlue: '#07009e',
      pastelBlue: '#002ad6',
      lightBlue: '#e3edf4',
      strawberryRed: '#911723',
      coolRay: '#8e91a0',
      lightGray: 'hsl(229, 24%, 87%)',
      magnolia: '#005ef7',
      alabaster: '#0025fc',
      white: 'hsl(0, 0%, 100%)',
      }
    },
  },
  plugins: [],
}
