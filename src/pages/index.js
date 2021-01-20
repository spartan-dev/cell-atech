import React, { useEffect, useState } from "react";

import About from "../components/about";
import Contact from "../components/contact";
import Features from "../components/features";
import Footer from "../components/footer";
import Hero from "../components/hero";
import InfoSection from "../components/info";
import Testimonials from "../components/testimonials";
import SEO from "../components/seo";
import Layout from "../components/Main";
import Modal from '../components/modal';
import ContactForm from "../components/contactform";

export default function Home() {

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    console.log('toggleModal')
    setShowModal(prevState => setShowModal(!prevState.showModal) )
  }

  useEffect(() => {
    const checkpoint = 1200;
    let opacity = 0;
    const width = window.innerWidth;
    window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= checkpoint) {
      console.log(width)
      opacity = .5 + currentScroll / checkpoint;
    } if (width <= 768) {
      opacity = .8 + currentScroll / checkpoint;
    }
    document.querySelector(".allSection").style.opacity = opacity;
  });
    }, [])
 
  return (
    <Layout>
      <SEO />
      
        <Modal
          show={showModal}
          onClick={() => {
            setShowModal(false);
          }}
          children={<ContactForm />}
        />
        <Hero toggleModal={() => toggleModal()} />
      <div className='bg-white z-50 allSection relative'>
        <InfoSection />
        <Features />
        <Testimonials />
        <Contact toggleModal={() => toggleModal()}/>
        <About />
        <Footer />
      </div>
    </Layout>
  );
}
