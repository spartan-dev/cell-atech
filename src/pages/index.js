import React from "react";

import About from "../components/about";
import Contact from "../components/contact";
import Features from "../components/features";
import Footer from "../components/footer";
import Hero from "../components/hero";
import InfoSection from "../components/info";
import Testimonials from "../components/testimonials";

export default function Home() {
  return (
    <main>
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
