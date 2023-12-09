/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        'xm': {'min': '390px', 'max': '640px'},
        'xlm': {'min': '640px', 'max': '767px'},
      },
    },
  },
  plugins: [],
}

