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
      "@media (max-width: 639px)": {
        maxWidth: "320px",
      },
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
        width: "580px"
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
        marginTop: "120px",
        marginBottom: "160px"
      },
      "@media (min-width: 1024px) and (max-width: 1279px)": {
        marginTop: "98px",
        marginBottom: "210px"
      },
      "@media (min-width: 768px) and (max-width: 1023px)": {
        marginTop: "98px",
        marginBottom: "128px"
      },
      "@media (min-width: 426px) and (max-width: 767px)": {
        marginTop: "50px",
        marginBottom: "90px"
      },
      "@media (max-width: 425px)": {
        marginTop: "35px",
        marginBottom: "35px"
      },
    },
    ".testimonials-section": {
      "@media (min-width:1280px)": {
        marginTop: "180px",
        marginBottom: "220px"
      },
      "@media (min-width: 1024px) and (max-width: 1279px)": {
        marginTop: "200px",
        marginBottom: "210px"
      },
      "@media (min-width: 768px) and (max-width: 1023px)": {
        marginTop: "130px",
        marginBottom: "140px"
      },
      "@media (min-width: 426px) and (max-width: 767px)": {
        marginTop: "76px",
        marginBottom: "90px"
      },
      "@media (max-width: 425px)": {
        marginTop: "56px",
        marginBottom: "64px"
      },
    },
    ".about-section": {
      '@media (min-width: 1536px)': {
        marginTop: "130px",
        marginBottom: "148px"
      },
      '@media (min-width:1280px) and (max-width: 1535px)': {
        marginTop: "320px",
        marginBottom: "345px"
      },
      '@media (min-width:1024px) and (max-width: 1279px)': {
        marginTop: "280px",
        marginBottom: "215px"
      },
      "@media (min-width: 768px) and (max-width: 1023px)": {
        marginTop: "140px",
        marginBottom: "180px"
      },
      "@media (min-width: 426px) and (max-width: 767px)": {
        marginTop: "90px",
        marginBottom: "90px"
      },
      "@media (max-width: 425px)": {
        marginTop: "64px",
        marginBottom: "90px"
      },
    },
  });
};
