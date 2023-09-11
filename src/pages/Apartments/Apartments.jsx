import React from "react";
import Footer from "../../components/Footer";

import { APARTMENTS } from "../../constants/apartmentsData";
import ApartmentCard from "./ApartmentCard";

const Apartments = () => {
  return (
    <>
      <section className="mt-20 bg-gradient-to-b bg-sky-700 from-sky-50">
        <div className="w-10/12 flex flex-col mx-auto items-center ">
          <h2 className="text-2xl text-center uppercase mb-8 pt-4">
            Our Apartments
          </h2>
          <div className="mb-4 max-w-[320px] sm:max-w-[600px] sm:grid sm:grid-cols-2 sm:gap-x-4 md:grid-cols-3 md:max-w-none">
            {APARTMENTS.map((e) => {
              return <ApartmentCard app={e} key={e.id} />;
            })}
          </div>
        </div>
        <Footer classes="w-full mt-4 bg-transparent" />
      </section>
    </>
  );
};

export default Apartments;
