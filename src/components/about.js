import React from "react";

import PersonCard from "./personcard";
import about_img from "../images/assets/about-img.png";

const About = () => {
  return (
    <section className="container flex lg:justify-between items-center flex-col lg:flex-row about-section">
      <div className="lg:w-1/2 flex flex-col -mb-12">
        <div className="text-center lg:text-left lg:flex lg:flex-col">
          <h2 className="subheader mb-5 xl:mb-2 text-black-1">
            About Cella Technologies
          </h2>
          <p className="text-body text-black-1 lg:pr-24">
            Our mission is to take the pain out of Warehouse Management
            <br className="hidden xl:block" /> and Inventory Control. Our
            dedication to innovation is second
            <br className="hidden xl:block" /> only to our commitment to our
            customers’ success.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center lg:block md:mt-16">
          <PersonCard className=" lg:block" />
        </div>
      </div>
      <img src={about_img} className="image hidden lg:block" />
    </section>
  );
};

export default About;
