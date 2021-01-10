import React from "react";
import PersonCard from "../components/personcard";
const Testimonials = () => {
  return (
    <section className="bg-white relative z-50 container testimonials-section">
      <div className="text-center sm:mb-11 md:mb-16 lg:items-center lg:flex lg:flex-col">
        <p className="subheader md:mb-5 text-black-1">
          What Our Customers Are Saying
        </p>
      </div>
      <div data-aos="fade-up" data-aos-duration='1000' data-aos-anchor-placement='top-center'  className="flex flex-wrap justify-center xl:flex-nowrap xl:justify-between">
        <PersonCard />
        <PersonCard className="middle-card" />
        <PersonCard />
      </div>
    </section>
  );
};

export default Testimonials;
