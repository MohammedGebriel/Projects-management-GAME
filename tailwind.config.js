/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: '#fff',
      black: '#000',
      darkColor: '#041116',
      brandColor: '#09242E',
      mainBorder: '#DBEDF5',
      primaryColor: '#A1A1A1',
    },
    extend: {},
  },
  plugins: [],
}