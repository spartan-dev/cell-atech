const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ["./src/**/*.js"],
  target: "relaxed",
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        'red-bright': '#D8272F',
        grey: '#F8F8F8',
        'black-1': 'rgba(0, 0, 0, 0.85)',
        'black-2': 'rgba(0, 0, 0, 0.80)',
        'black-3': 'rgba(0, 0, 0, 0.75)',
        'black-4': 'rgba(0, 0, 0, 0.65)'
      },
      backgroundImage: {
        'gr-red': 'linear-gradient(237.68deg, #730D12 27.39%, #D8272F 71.33%);'
      },
    },
    fontFamily: {
      roboto: ['Roboto'],
      'open-sans': ['Open Sans']
    },
    boxShadow: {
      img: "0px 8.44413px 33.7765px rgba(87, 73, 73, 0.15)"
    }
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    margin: ["responsive", "hover", "focus", "active"],
  },
  plugins: [
    plugin(require('./tailwind-plugins/buttons')),
    plugin(require('./tailwind-plugins/containers')),
    plugin(require('./tailwind-plugins/sizes')),
    plugin(require('./tailwind-plugins/spaces')),
    plugin(require('./tailwind-plugins/typography'))
  ],
};
