import React from "react";
import PersonCard from "../components/personcard";
const Testimonials = () => {
  return (
    <section className="container my-16 sm:my-20 md:my-32 lg:my-48 xl:mb-56">
      <div className="text-center mb-8 sm:mb-11 md:mb-16 lg:items-center lg:flex lg:flex-col">
        <h2 className="subheader mb-5 text-black-1">
          What Our Customers Are Saying
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center md:auto-rows-max md:place-content-center   md:grid md:grid-cols-2 md:gap-4">
        <PersonCard />
        <PersonCard />
        <PersonCard />
      </div>
    </section>
  );
};

export default Testimonials;
