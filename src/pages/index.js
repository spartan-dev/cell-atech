import React, { useEffect } from "react";

import About from "../components/about";
import Contact from "../components/contact";
import Features from "../components/features";
import Footer from "../components/footer";
import Hero from "../components/hero";
import InfoSection from "../components/info";
import Testimonials from "../components/testimonials";
import SEO from "../components/seo";
import Layout from "../components/Main";

export default function Home() {

  useEffect(() => {
    let opacity = 0.5;
    const contentElement = document.querySelector(".info-section");
    window.addEventListener('scroll', () => {
      const rect = contentElement.getBoundingClientRect();
      opacity+= 0.009;
  
      console.log(opacity);
  
      if ( rect.y >= 0 && opacity <= 1) {
        contentElement.style.opacity = opacity;
      }
    })
  
    return () => {
      window.removeEventListener('scroll', () => {console.log('removed scroll listener')})
    }
  }, [])


  return (
    <Layout>
      <SEO />
      <Hero />
      <div className="bg-white relative z-50">
        <InfoSection />
        <Features />
        <Testimonials />
        <Contact />
        <About />
      </div>
      <Footer />
    </Layout>
  );
}
