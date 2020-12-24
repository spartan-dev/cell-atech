module.exports = function ({ theme, addUtilities }) {
  addUtilities({
    '.header': {
      fontWeight: '500',
      fontFamily: theme('fontFamily')['roboto'],
      fontStyle: 'normal',
      '@media (min-width: 1280px)': {
        fontSize: '43px',
        letterSpacing: '1px',
        lineHeight: '48px'
      },
      '@media (min-width: 768px) and (max-width: 1279px)': {
        fontSize: '30px',
        letterSpacing: '0.78px',
        lineHeight: '40px'
      },
      '@media (max-width: 767px)': {
        fontSize: '28px',
        letterSpacing: '0.78px',
        lineHeight: '32px'
      }
    },
    '.subheader': {
      fontWeight: '400',
      fontFamily: theme('fontFamily')['roboto'],
      fontStyle: 'normal',
      '@media (min-width: 1280px)': {
        fontSize: '36px',
        lineHeight: '48px'
      },
      '@media (min-width: 768px) and (max-width: 1279px)': {
        fontSize: '30px',
        lineHeight: '40px'
      },
      '@media (max-width: 767px)': {
        fontSize: '28px',
        lineHeight: '40px'
      }
    },
    '.text-company': {
      fontWeight: '500',
      fontFamily: theme('fontFamily')['roboto'],
      fontStyle: 'normal',
      lineHeight: '153.19%',
      '@media (min-width: 1280px)': {
        fontSize: '20px',
      },
      '@media (min-width: 768px) and (max-width: 1279px)': {
        fontSize: '18px'
      },
      '@media (max-width: 767px)': {
        fontSize: '16px'
      }
    },
    '.text-title': {
      fontWeight: '600',
      fontFamily: theme('fontFamily')['open-sans'],
      fontStyle: 'normal',
      lineHeight: '153.19%',
      '@media (min-width: 768px)': {
        fontSize: '18px'
      },
      '@media (max-width: 767px)': {
        fontSize: '16px'
      }
    },
    '.text-name': {
      fontWeight: '400',
      fontFamily: theme('fontFamily')['open-sans'],
      fontStyle: 'normal',
      '@media (min-width: 1280px)': {
        fontSize: '18px',
        lineHeight: '153.19%'
      },
      '@media (min-width: 768px) and (max-width: 1279px)': {
        fontSize: '16px',
        lineHeight: '24px'
      },
      '@media (max-width: 767px)': {
        fontSize: '14px',
        lineHeight: '24px'
      }
    },
    '.text-body': {
      fontWeight: '400',
      fontFamily: theme('fontFamily')['open-sans'],
      fontStyle: 'normal',
      lineHeight: '24px',
      '@media (min-width: 768px)': {
        fontSize: '18px'
      },
      '@media (max-width: 767px)': {
        fontSize: '16px'
      }
    },
    '.text-small': {
      fontFamily: theme('fontFamily')['open-sans'],
      fontStyle: 'normal',
      lineHeight: '24px',
      '@media (min-width: 640px)': {
        fontSize: '16px'
      },
      '@media (max-width: 639px)': {
        fontSize: '14px'
      }
    },
    '.text-footer': {
      fontFamily: theme('fontFamily')['open-sans'],
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '16px',
      lineHeight: '153.19%',
      '@media (max-width: 678px)': {
        fontSize: '14px'
      },
    }
  });
};