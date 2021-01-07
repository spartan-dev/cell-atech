import React, { useEffect, useState } from "react";
import Modal from "../components/modal";
import ContactForm from "../components/contactform";

const Contact = () => {
  const [body, setBody] = useState(null)
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined')
      setBody(document.getElementsByTagName('body')[0])
  }, [])

  useEffect(() => {
    if (body !== null)
      body.style.overflow = showModal ? 'hidden' : 'auto'
  }, [body, showModal])

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
      <p className="subheader text-black-1 text-center mb-8 sm:mb-12">
        Are you ready to empower your material <br className="hidden md:block lg:hidden" /> handling team?
      </p>
      <div className="flex flex-col justify-center items-center">
        <button onClick={() => setShowModal(true)} className="btn btn-red">
          Contact us
        </button>
      </div>
    </section>
  );
};

export default Contact;
