module.exports = function ({ theme, addUtilities }) {
  addUtilities({
    ".container": {
      marginLeft: "auto",
      marginRight: "auto",
      "@media (min-width: 1280px)": {
        maxWidth: "1170px",
      },
      "@media (min-width: 1024px) and (max-width: 1279px)": {
        maxWidth: "970px",
      },
      "@media (min-width: 768px) and (max-width: 1023px)": {
        maxWidth: "670px",
      },
      "@media (min-width: 640px) and (max-width: 767px)": {
        maxWidth: "570px",
      },
      "@media (min-width: 426px) and (max-width: 639px)": {
        width: "420px",
      },
      "@media (max-width: 425px)": {
        maxWidth: "320px",
      }
    },
    ".modal": {
      "@media (min-width: 1280px)": {
        width: "470px",
        margin: "40px auto 0 auto",
        height: "473px"
      },
      "@media (min-width: 1024px) and (max-width: 1279px)": {
        width: "470px",
        margin: "40px auto 0 auto",
        height: "457px"
      },
      "@media (min-width: 768px) and (max-width: 1023px)": {
        width: "470px",
        margin: "40px auto 0 auto",
        height: "457px"
      },
      "@media (min-width: 426px) and (max-width: 767px)": {
        width: "370px",
        margin: "0px auto",
        height: "409px"
      },
      "@media (max-width: 425px)": {
        maxWidth: "320px",
        height: "100%"
      },
    },
    ".modal-close": {
      margin: "0 auto",
      "@media (min-width: 1280px)": {
        width: "890px",
        padding: "64px 156px 30px 156px"
      },
      "@media (min-width: 768px) and (max-width:1279px)": {
        width: "580px",
        padding: "35px 0",
        margin: "auto"
      },
      "@media (min-width: 426px) and (max-width: 767px)": {
        width: "480px",
        padding: "35px 0"
      },
      "@media (max-width: 425px)": {
        width: "296px",
        padding: "32px 0"
      },
    },
    ".card": {
      boxShadow: "0px 10px 40px rgba(87, 73, 73, 0.15)",
      borderRadius: "10px",
      background: theme("colors")["white"],
      padding: "26px",
      "@media (min-width: 1280px)": {
        width: "570px",
        height: "144px",
        padding: "18px 24px",
      },
      "@media (min-width: 1024px) and (max-width: 1279px)": {
        width: "370px",
        height: "280px",
      },
      "@media (min-width: 768px) and (max-width: 1023px)": {
        width: "670px",
        height: "144px",
      },
      "@media (min-width: 640px) and (max-width: 767px)": {
        width: "570px",
        height: "144px",
        padding: "19px 24px",
      },
      "@media (max-width: 639px)": {
        width: "320px",
        height: "272px",
        padding: "28px 16px",
      },
    },
    ".people-card-container": {
      "@media (min-width: 768px) and (max-width: 1023px)": {
        width: "319px",
        height: "243px"
      },
      "@media (min-width: 640px) and (max-width: 767px)": {
        width: "370px",
        height: "233px",
        margin: "46px 32px",
      },
      "@media (max-width: 639px)": {
        width: "320px",
        height: "227px",
        margin: "41px 0",
      },
    },
    ".dialog": {
      textAlign: "center",
      background: theme("colors")["grey"],
      borderRadius: "10px",
      position: "relative",
      "@media (min-width: 1024px)": {
        width: "358px",
        height: "144px",
        padding: "24px",
      },
      "@media (min-width: 768px) and (max-width: 1023px)": {
        width: "320px",
        height: "120px",
        padding: "16px 8px",
      },
      "@media (min-width: 426px) and (max-width: 767px)": {
        width: "370px",
        height: "128px",
        padding: "24px 16px",
      },
      "@media (max-width: 425px)": {
        width: "320px",
        height: "120px",
        padding: "12px 8px",
      },
    },
    ".image-card-container": {
      "@media (min-width: 1024px)": {
        width: "358px",
        height: "144px",
        padding: "12px",
      },
      "@media (min-width: 768px) and (max-width: 1023px)": {
        width: "320px",
        height: "120px",
        padding: "16px 8px",
      },
      "@media (min-width: 426px) and (max-width: 767px)": {
        width: "370px",
        height: "128px",
        padding: "24px 16px",
      },
      "@media (max-width: 425px)": {
        width: "320px",
        height: "120px",
        padding: "12px 8px",
      },
    },
    ".info-section": {
      "@media (min-width:1280px)": {
        paddingTop: "120px",
        paddingBottom: "190px"
      },
      "@media (min-width: 1024px) and (max-width: 1279px)": {
        paddingTop: "98px",
        paddingBottom: "210px"
      },
      "@media (min-width: 768px) and (max-width: 1023px)": {
        paddingTop: "98px",
        paddingBottom: "128px"
      },
      "@media (min-width: 426px) and (max-width: 767px)": {
        paddingTop: "50px",
        paddingBottom: "90px"
      },
      "@media (max-width: 425px)": {
        paddingTop: "35px",
        paddingBottom: "35px"
      },
    },
    ".testimonials-section": {
      "@media (min-width:1280px)": {
        paddingTop: "195px",
        paddingBottom: "220px"
      },
      "@media (min-width: 1024px) and (max-width: 1279px)": {
        paddingTop: "210px",
        paddingBottom: "210px"
      },
      "@media (min-width: 768px) and (max-width: 1023px)": {
        paddingTop: "130px",
        paddingBottom: "140px"
      },
      "@media (min-width: 426px) and (max-width: 767px)": {
        paddingTop: "76px",
        paddingBottom: "90px"
      },
      "@media (max-width: 425px)": {
        paddingTop: "56px",
        paddingBottom: "64px"
      },
    },
    ".about-section": {
      '@media (min-width: 1536px)': {
        paddingTop: "130px",
        paddingBottom: "148px"
      },
      '@media (min-width:1280px) and (max-width: 1535px)': {
        paddingTop: "320px",
        paddingBottom: "345px"
      },
      '@media (min-width:1024px) and (max-width: 1279px)': {
        paddingTop: "280px",
        paddingBottom: "215px"
      },
      "@media (min-width: 768px) and (max-width: 1023px)": {
        paddingTop: "140px",
        paddingBottom: "180px"
      },
      "@media (min-width: 426px) and (max-width: 767px)": {
        paddingTop: "90px",
        paddingBottom: "90px"
      },
      "@media (max-width: 425px)": {
        paddingTop: "64px",
        paddingBottom: "90px"
      }
    },
  });
};
