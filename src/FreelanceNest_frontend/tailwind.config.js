/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        customBlack: '#0A0A0A',
        customLighterBlack: '#0B0B0B',
        customGray: '#3A3C45',
        customDarkerGray: '#2D2F36',
        customDarkerWhite: '#F0F0F0'
      },
      gridTemplateColumns: {
        'custom': '1fr 5.5fr'
      },
      fontFamily:{
        sora: ['sora', 'sans-serif']
      }
    },
  },
  plugins: [],
}
