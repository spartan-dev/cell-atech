import React from "react";
import PersonCard from "./personcard";
import Image from "./Image";

const About = () => {
  return (
    <section className="about-section">
      <div className="container flex lg:justify-between items-center flex-col lg:flex-row">
        <div className=" items-center lg:w-1/2 flex flex-col -mb-12">
          <div className="text-center lg:text-left lg:flex lg:flex-col">
            <p className="subheader mb-5 xl:mb-2 text-black-1">
              About Cella Technologies
          </p>
            <p className="text-body text-black-3 lg:pr-24 xl:pr-12">
              Our mission is to take the pain out of Warehouse Management and
              Inventory Control. Our dedication to innovation is second only to
              our commitment to our customers’ success.
          </p>
          </div>
          <div className="flex flex-col justify-center items-center lg:block md:mt-16">
            <PersonCard className=" lg:block" />
          </div>
        </div>
        <div className="image hidden lg:block">
          <Image
            alt="About Cella Technologies"
            filename="hex-photo.png"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
