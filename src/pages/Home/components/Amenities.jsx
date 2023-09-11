import React from "react";
import { AMENITIES_DATA } from "../../../constants/amenitiesData";
import AmenitiesCard from "./AmenitiesCard";

const Amenities = () => {
  return (
    <section className="flex flex-col items-center mt-20 mb-20">
      <h1 className="text-2xl uppercase mb-12">Amenities</h1>
      <div className="sm:grid sm:grid-cols-2 sm:gap-x-4 md:grid-cols-3 md:max-w-3xl w-4/5 md:w-full">
        {AMENITIES_DATA.map((e) => (
          <AmenitiesCard key={e.id} amenity={e} />
        ))}
      </div>
    </section>
  );
};

export default Amenities;
