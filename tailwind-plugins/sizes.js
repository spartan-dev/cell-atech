module.exports = function ({ theme, addUtilities }) {
  addUtilities({
    '.logo-white': {
      height: 'auto',
      '@media (min-width: 1280px)': {
        width: '171px'
      },
      '@media (min-width: 768px) and (max-width: 1279px)': {
        width: '168px'
      },
      '@media (max-width: 767px)': {
        width: '120px',
        marginBottom: '6vh'
      },
      '@media (min-width:768px) and (max-width: 1023px)': {
        marginBottom: '10vh'
      },
      '@media (min-width:1024px)': {
        marginBottom: '13vh'
      }
    },
    '.logo-color': {
      height: 'auto',
      '@media (min-width: 1280px)': {
        width: '165px'
      },
      '@media (min-width: 1024px) and (max-width: 1279px)': {
        width: '170px'
      },
      '@media (min-width: 426px) and (max-width: 1023px)': {
        width: '136px'
      },
      '@media (max-width: 425px)': {
        width: '118px'
      }
    },
    '.icon': {
      width: 'auto',
      '@media (min-width: 1280px)': {
        height: '92px'
      },
      '@media (min-width: 1024px) and (max-width: 1279px)': {
        height: '70px'
      },
      '@media (min-width: 426px) and (max-width: 1023px)': {
        height: '92px'
      },
      '@media (max-width: 425px)': {
        height: '70px'
      }
    },
    '.icon-text': {
      height: 'auto',
      '@media (min-width: 1280px)': {
        width: '402px'
      },
      '@media (min-width: 1024px) and (max-width: 1279px)': {
        width: '322px'
      },
      '@media (min-width:768px) and (max-width: 1023px)': {
        width: '502px'
      },
      '@media (min-width:640px) and (max-width: 767px)': {
        width: '402px'
      },
      '@media (max-width: 639px)': {
        width: '288px'
      }
    },
    '.sent': {
      width: 'auto',
      '@media (min-width: 1280px)': {
        height: '92px'
      },
      '@media (max-width: 1279px)': {
        height: '80px'
      }
    },
    '.image': {
      height: 'auto',
      '@media (min-width: 1536px)': {
        width: '705px',
        marginRight: '-135px'
      },
      '@media (min-width:1280px) and (max-width: 1535px)': {
        width: 'calc(50vw - 15px)',
        position: 'absolute',
        right: '0px'
      },
      '@media (min-width:1024px) and (max-width: 1279px)': {
        width: '560px',
        position: 'absolute',
        right: '0px'
      },
      '@media (min-width:768px) and (max-width: 1023px)': {
        width: '670px'
      },
      '@media (min-width:426px) and (max-width: 767px)': {
        width: '570px'
      },
      '@media (max-width: 425px)': {
        width: '320px'
      }
    },
  });
};