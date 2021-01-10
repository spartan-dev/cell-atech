import React, {useEffect} from "react";

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


  return (
    <Layout>
      <SEO />
      <Hero />
      <div className="bg-white relative z-50 container info-section">
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
