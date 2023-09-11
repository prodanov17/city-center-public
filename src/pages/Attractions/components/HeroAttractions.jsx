import React from "react";
import { LandMarkIcon } from "../../../assets/AttractionIcons";

const HeroAttractions = () => {
  return (
    <section className="w-4/5 mx-auto flex flex-col items-center my-8 sm:flex-row sm:justify-around">
      <div className="mb-8 max-w-[330px]">
        <h1 className="uppercase font-semibold text-2xl mb-4 ">
          Best tourist attractions in Strumica
        </h1>
        <p className="text-sm">
          Strumica is the largest city in southeastern North Macedonia, near the
          Novo Selo-Petrich border crossing with Bulgaria. About 55,000 people
          live in the region surrounding the city. It is named after the
          Strumica River which runs through it. The city of Strumica is the seat
          of Strumica Municipality.
        </p>
      </div>
      <div className="hidden sm:block">
        <LandMarkIcon />
      </div>
    </section>
  );
};

export default HeroAttractions;
