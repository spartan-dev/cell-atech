import React from "react";

const ContactForm = () => {
  return (
    <div className="px-5 sm:px-8">
      <div className="text-center my-8 sm:mt-12 sm:mb-11 md:mt-24 md:mb-16 lg:items-center lg:flex lg:flex-col">
        <h2 className="subheader mb-5 text-black-1">
          Send us your information, and we will be in touch soon.
        </h2>
      </div>
      <form action="">
        <div className="mb-10">
          <input
            className="w-full mb-8 border-solid border-b-2 border-gray-600 pb-3 focus:border-transparent focus:outline-none"
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            className="w-full mb-8 border-solid border-b-2 border-gray-600 pb-3  focus:border-transparent focus:outline-none"
            type="text"
            name="company"
            placeholder="Company"
          />
          <input
            className="w-full mb-8 border-solid border-b-2 border-gray-600 pb-3  focus:border-transparent focus:outline-none"
            type="text"
            name="email"
            placeholder="Email"
          />
        </div>

        <button className="btn btn-red" type="submit">
          SEND
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
