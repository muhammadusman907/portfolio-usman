/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        'xm': {'min': '370px', 'max': '640px'},
        'xlm': {'min': '640px', 'max': '767px'},
      },
    },
  },
  plugins: [],
}

