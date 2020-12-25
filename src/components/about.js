import React from "react";
import PersonCard from "./personcard";
const About = () => {
  return (
    <section className="container flex flex-col justify-center items-center">
      <div className="text-center my-8 sm:mt-12 sm:mb-11 md:mt-24 md:mb-16 lg:items-center lg:flex lg:flex-col">
        <h2 className="subheader mb-5 text-black-1">
          About Cella Technologies
        </h2>
        <p className="text-body text-black-3 lg:w-3/5">
          Our mission is to take the pain out of Warehouse Management and
          Inventory Control. Our dedication to innovation is second only to our
          commitment to our customers’ success.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <PersonCard />
      </div>
    </section>
  );
};

export default About;
