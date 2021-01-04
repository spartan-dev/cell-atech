import React from "react";

const ContactForm = () => {
  return (
    <div className="modal">
      <div className="lg:items-center lg:flex lg:flex-col">
        <p className="subheader mt-6 mb-8 text-black-1">
          Send us your information, <br className="hidden sm:block" /> and we will be in touch soon.
        </p>
      </div>
      <form action="">
        <div className="text-black-4">
          <input
            className="w-full mb-10 sm:mb-8 md:mb-12 border-solid border-b border-black-2 pb-3 focus:outline-none"
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            className="w-full mb-10 sm:mb-8 md:mb-12 border-solid border-b border-black-2 pb-3 focus:outline-none"
            type="text"
            name="company"
            placeholder="Company"
          />
          <input
            className="w-full mb-10 sm:mb-8 md:mb-12 border-solid border-b border-black-2 pb-3 focus:outline-none"
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
