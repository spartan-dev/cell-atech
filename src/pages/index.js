import React, {useEffect} from "react";

import About from "../components/about";
import Contact from "../components/contact";
import Features from "../components/features";
import Footer from "../components/footer";
import Hero from "../components/hero";
import InfoSection from "../components/info";
import Testimonials from "../components/testimonials";
import SEO from "../components/seo";
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function Home() {

  useEffect(()=>{
    AOS.init();
  })

  return (
    <main>
      <SEO />
      <Hero />
      <InfoSection />
      <Features />
      <Testimonials />
      <Contact />
      <About />
      <Footer />
    </main>
  );
}
