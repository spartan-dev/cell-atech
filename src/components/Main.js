import React, { useEffect } from "react";
//import AOS from "aos";
import "aos/dist/aos.css";

const Layout = ({ children }) => {
  let AOS;
  useEffect(() => {
    const AOS = require("aos");
    AOS.init();
  }, []);
  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });
  return <main>{children}</main>;
};

export default Layout;
