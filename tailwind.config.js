const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ["./src/**/*.js"],
  target: "relaxed",
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        'red-dark': '#730D12',
        red: '#9B1C22',
        'red-bright': '#D8272F',
        grey: '#F8F8F8',
        'black-1': 'rgba(0, 0, 0, 0.85)',
        'black-2': 'rgba(0, 0, 0, 0.80)',
        'black-3': 'rgba(0, 0, 0, 0.75)',
        'black-4': 'rgba(0, 0, 0, 0.65)',
        'gr-red': 'linear-gradient(237.68deg, #730D12 27.39%, #D8272F 71.33%);'
      },

    },
    fontFamily: {
      roboto: ['Roboto'],
      'open-sans': ['Open Sans']
    },

  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
  },
  plugins: [
    plugin(require('./tailwind-plugins/buttons')),
    plugin(require('./tailwind-plugins/containers')),
    plugin(require('./tailwind-plugins/sizes')),
    plugin(require('./tailwind-plugins/spaces')),
    plugin(require('./tailwind-plugins/typography'))
  ],
};
