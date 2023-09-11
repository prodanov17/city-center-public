import React from "react";
import Footer from "../../components/Footer";
import HeroAttractions from "./components/HeroAttractions";
import TopAttractions from "./components/TopAttractions";

const Attractions = () => {
  return (
    <div>
      <div className="w-screen max-h-[474px] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="/strumica.jpg"
          alt="Cover image of Strumica"
        />
      </div>
      <HeroAttractions />
      <TopAttractions />
      <Footer />
    </div>
  );
};

export default Attractions;
