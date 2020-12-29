import React from "react";

import PersonCard from "./personcard";
import about_img from "../images/assets/about-img.png";

const About = () => {
  return (
    <section className="container flex lg:justify-between items-center flex-col lg:flex-row my-16 sm:my-24 md:my-32 lg:mt-48 lg:mb-24 xl:my-32">
      <div className="lg:w-2/5 xl:w-1/2 flex flex-col -mb-12">
        <div className="text-center lg:text-left xl:mb-4 lg:flex lg:flex-col">
          <h2 className="subheader mb-5 xl:mb-2 text-black-1">
            About Cella Technologies
          </h2>
          <p className="text-body text-black-1 lg:pr-16 xl:pr-0">
            Our mission is to take the pain out of Warehouse Management
            <br className="hidden xl:block" /> and Inventory Control. Our
            dedication to innovation is second
            <br className="hidden xl:block" /> only to our commitment to our
            customers’ success.
          </p>
        </div>
        <PersonCard className="flex flex-col items-center lg:block" />
      </div>
      <img src={about_img} className="image hidden lg:block" />
    </section>
  );
};

export default About;
