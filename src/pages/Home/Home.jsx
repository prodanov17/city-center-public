import React from "react";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Footer from "../../components/Footer";
import Background from "./components/Background";
import Amenities from "./components/Amenities";
import FAQ from "./components/FAQ";
import LastAction from "./components/LastAction";

const Home = () => {
  return (
    <>
      <Hero />
      <Amenities />
      <Testimonials />
      <FAQ />
      <Background />
      <LastAction />
      <Footer />
    </>
  );
};

export default Home;
