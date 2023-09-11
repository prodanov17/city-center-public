import React from "react";
import { ATTRACTIONS_DATA } from "../../../constants/attractionsData";
import AttractionCard from "./AttractionCard";

const TopAttractions = () => {
  return (
    <article className="flex flex-col justify-center items-center pb-12 bg-gradient-to-b bg-[#B3E6F0] from-sky-50">
      <h1 className="text-2xl">Top Attractions</h1>
      <div className="mt-8 flex flex-col w-11/12 items-center">
        {ATTRACTIONS_DATA.map((e) => (
          <AttractionCard key={e.id} attraction={e} />
        ))}
      </div>
    </article>
  );
};

export default TopAttractions;
