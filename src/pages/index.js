import React from "react";
import Hero from "../components/hero";
import InfoSection from "../components/info";
import Testimonials from "../components/testimonials";
import Contact from "../components/contact";
import About from "../components/about";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <InfoSection />
      <Testimonials />
      <Contact />
      <About />
      <Footer />
    </div>
  );
}
