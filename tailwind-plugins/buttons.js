module.exports = function ({ theme, addUtilities }) {
  addUtilities({
    '@responsive': {
      '.btn': {
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: '500',
        textTransform: 'uppercase',
        fontFamily: theme('fontFamily')['roboto'],
        fontStyle: 'normal',
        lineHeight: '134.69%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        letterSpacing: '1px',
        width: '192px',
        height: '56px',
        '&:disabled': {
          cursor: 'not-allowed',
          opacity: "0.8"
        },
        '&:focus': {
          outline: 'none'
        },
      },
      '.btn-white': {
        backgroundColor: theme('colors')['white'],
        color: theme('colors')['red'],
        '&:hover': {
          filter: 'drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.25))'
        }
      },
      '.btn-red': {
        backgroundColor: theme('colors')['red-bright'],
        color: theme('colors')['white'],
        '&:hover': {
          filter: 'drop-shadow(0px 0px 15px rgba(216, 39, 47, 0.5))'
        }
      }
    }
  });
};