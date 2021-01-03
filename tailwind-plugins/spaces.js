module.exports = function ({ theme, addUtilities }) {
  addUtilities({
    '.hero-space': {
      '@media (min-width: 1024px)': {
        marginTop: '13vh'
      },
      '@media (min-width: 768px) and (max-width: 1023px)': {
        marginTop: '10vh'
      },
      '@media (max-width: 767px)': {
        marginTop: '6vh'
      }
    },
    '.middle-card': {
      '@media (min-width:1024px) and (max-width:1279px)': {
        marginLeft: '54px',
        marginBottom: '77px'
      },
      '@media (min-width: 768px) and (max-width: 1023px)': {
        marginLeft: '32px',
        marginBottom: '46px'
      }
    }
  });
};