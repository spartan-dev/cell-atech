import React, { useEffect, useState } from "react";


const Contact = (props) => {
  const [body, setBody] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined")
      setBody(document.getElementsByTagName("body")[0]);
  }, []);

  return (
    <section className="container">
      <p className="subheader text-black-1 text-center mb-8 sm:mb-12">
        Are you ready to empower your material{" "}
        <br className="hidden md:block lg:hidden" /> handling team?
      </p>
      <div className="flex flex-col justify-center items-center">
        <button onClick={props.toggleModal}  className="btn btn-red">
          Contact us
        </button>
      </div>
    </section>
  );
};

export default Contact;
