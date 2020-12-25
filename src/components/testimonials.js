import React from "react";
import PersonCard from "../components/personcard";
const Testimonials = () => {
  return (
    <section className="container mb-24">
      <div className="text-center my-8 sm:mt-12 sm:mb-11 md:mt-24 md:mb-16 lg:items-center lg:flex lg:flex-col">
        <h2 className="subheader mb-5 text-black-1">
          What Our Customers Are Saying
        </h2>
      </div>
      <div>
        <PersonCard />
        <PersonCard />
        <PersonCard />
      </div>
    </section>
  );
};

export default Testimonials;
