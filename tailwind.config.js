module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    colors: {
      'primary': '#D5AC8D',
      'primary-light': '#E8C892',
      'secondary': '##C3C3A7',
      'light': '#F5F4F4',
      'dark': '#5E5433',
    },

    extend: {

      fontFamily: {
        'sans':  'Fira Sans ,sans-serif ' ,
      },

    },
  },
  plugins: [],
}
