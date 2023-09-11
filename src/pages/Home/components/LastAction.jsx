import React from "react";
import { Link } from "react-router-dom";
import { TravelIcon } from "../../../assets/HeroIcon";

const LastAction = () => {
  return (
    <section className="w-5/6 max-w-3xl mx-auto flex-col-reverse text-center mb-20 flex md:items-center md:justify-between md:flex-row md:text-left ">
      <div className="">
        <h1 className="text-3xl mb-4 font-medium">What are you waiting for?</h1>
        <h3 className="mb-8">
          Book now on{" "}
          <a
            href="booking.com"
            target={"_blank"}
            className="hover:underline text-blue-600"
          >
            booking.com
          </a>{" "}
          or check out our apartments by pressing the button below.
        </h3>
        <Link
          to="/apartments"
          className="text-white bg-sky-900 hover:bg-sky-800 uppercase rounded text-sm px-4 py-2"
        >
          Book Now
        </Link>
      </div>
      <div className="w-full flex justify-center md:block md:w-auto md:-mr-4 mr-0">
        <TravelIcon />
      </div>
    </section>
  );
};

export default LastAction;
