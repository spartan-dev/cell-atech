import React, { useState } from "react";
import Modal from "../components/modal";
import ContactForm from "../components/contactform";
const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="container">
      {showModal && (
        <Modal
          show={showModal}
          onClick={() => {
            setShowModal(false);
          }}
          children={<ContactForm />}
        />
      )}
      <div className="pt-4 text-center mb-8 sm:mb-11 md:mb-16 lg:items-center lg:flex lg:flex-col">
        <h2 className="subheader mb-5 text-black-1 xl:pt-0">
          Are you ready to empower your material handling team?
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center">
        <button onClick={() => setShowModal(true)} className="btn btn-red">
          Contact us
        </button>
      </div>
    </section>
  );
};

export default Contact;
