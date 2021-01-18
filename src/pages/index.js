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
    const checkpoint = 600;
    let opacity = 0;
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= checkpoint) {
    opacity = .5 + currentScroll / checkpoint;
  } else {
    opacity = 1;
  }
  document.querySelector(".allSection").style.opacity = opacity;
});
  
  }, [])


  return (
    <Layout>
      <SEO />
      <Hero />
      <div className="bg-white relative z-50 allSection">
        <InfoSection />
        <Features />
        <Testimonials />
        <Contact />
        <About />
      <Footer />
      </div>
    </Layout>
  );
}
