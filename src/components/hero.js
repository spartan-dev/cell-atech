import React, { useEffect, useState } from "react";

import Background from "../images/svg/background-hero.svg";
import LogoHero from "../images/svg/logo-hero.svg";


const Hero = (props) => {
  const [body, setBody] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined")
      setBody(document.getElementsByTagName("body")[0]);
  }, []);

  return (
    <section className="hero bg-gr-red z-50 sticky w-full top-0">
      <div>
        <div className="container flex justify-between flex-col lg:flex-row">
          <div className="pt-8 md:pt-24 w-full md:w-3/4 lg:w-1/2">
            <LogoHero className="logo-white" />
            <h1 className="header text-white">
              Warehouse &amp; Inventory Solutions Transforming Material Handling
            </h1>
            <div className="my-4 md:my-5">
              <p className="text-body text-white">
                Providing true cloud WMS and WES. Cella Technologies{" "}
                <br className="hidden sm:block" />
              supports Plex customers' warehouse and production{" "}
                <br className="hidden sm:block" />
              facilities around the globe.
            </p>
            </div>
            <div className="pb-24 relative z-10">
              <button
                onClick={props.toggleModal}
                className="btn btn-white"
              >
                Contact Us
            </button>
            </div>
          </div>
          <Background className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
