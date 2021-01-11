import React, { useState } from "react";

import Sent from "../images/svg/sent.svg";

const ContactForm = () => {
  const [form, setForm] = useState({});
  const [sent, setSent] = useState(false);

  const valid = Object.values(form).length === 3;

  const onChange = (e) => {
    e.persist();
    setForm((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div>
      {sent ? (
        <div
          className="modal flex flex-col items-center 
            justify-center sm:justify-start sm:pt-4"
        >
          <Sent className="-mt-8 sm:mt-12 md:mt-24" />
          <p className="mt-6 subheader text-black-1">Message sent.</p>
        </div>
      ) : (
          <div className="modal">
            <p className="subheader mt-6 md:mt-0 mb-8 text-black-1">
              Send us your information, <br className="hidden sm:block" /> and we
            will be in touch soon.
          </p>
            <form action="">
              <div className="text-black-4">
                <input
                  className="w-full mb-10 sm:mb-8 md:mb-12 border-solid border-b border-black-2 pb-3 focus:outline-none"
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={onChange}
                />
                <input
                  className="w-full mb-10 sm:mb-8 md:mb-12 border-solid border-b border-black-2 pb-3 focus:outline-none"
                  type="text"
                  name="company"
                  placeholder="Company"
                  onChange={onChange}
                />
                <input
                  className="w-full mb-10 sm:mb-8 md:mb-12 border-solid border-b border-black-2 pb-3 focus:outline-none"
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={onChange}
                />
              </div>

              <button
                className="btn btn-red"
                type="submit"
                disabled={!valid}
                onClick={() => setSent(true)}
              >
                SEND
            </button>
              <div className="mt-4 text-white text-xs">margin</div>
            </form>
          </div>
        )}
    </div>
  );
};

export default ContactForm;
