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
      margin: "0 auto",
      "@media (min-width: 768px)": {
        maxWidth: "470px",
      },
      "@media (min-width: 426px) and (max-width: 767px)": {
        maxWidth: "370px",
      },
      "@media (max-width: 425px)": {
        maxWidth: "320px",
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
        height: "243px",
        marginRight: "32px",
      },
      "@media (min-width: 640px) and (max-width: 767px)": {
        width: "370px",
        height: "233px",
        margin: "46px 32px",
      },
      "@media (max-width: 639px)": {
        width: "320px",
        height: "227px",
        margin: "41px 41px",
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
  });
};
