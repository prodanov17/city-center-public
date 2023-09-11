import React from "react";
import { useState } from "react";
import {
  ArrowRight,
  CloudFlipped,
  CloudSVG,
  StarIcon,
} from "../../../assets/Icons";
import { HeroIcon } from "../../../assets/HeroIcon";
import { hero } from "../../../constants/translation";

const Hero = () => {
  const [englishLang, setEnglishLang] = useState(true);
  return (
    <section className=" w-full mt-28">
      <span className="absolute -z-10 left-3 top-14 md:left-56">
        <CloudSVG />
      </span>
      <span className="absolute -z-10 -right-3 top-24 md:right-48">
        <CloudFlipped />
      </span>
      <div className="flex items-center justify-center lg:gap-12">
        <div className="w-9/12 max-w-[380px] md:px-8">
          <h3 className="uppercase tracking-wide text-neutral-500 mb-6">
            City Center Apartments
          </h3>
          <h1 className="text-3xl uppercase font-semibold mb-7">
            {/* Stay in the heart of Strumica */}
            {englishLang ? hero.heading : hero.heading_mk}
          </h1>
          <p className="text-sm font-[Roboto] text-neutral-600 mx-auto mb-9">
            Choose from our variety of nicely furnished apartments
          </p>
          <button
            className="bg-sky-900 flex items-center"
            onClick={() => {
              setEnglishLang((prev) => !prev);
            }}
          >
            <span className="text-sky-100 px-8 py-1.5 md:text-lg uppercase">
              Learn More
            </span>
            <span className="p-3 bg-sky-400 flex items-center">
              <ArrowRight />
            </span>
          </button>
        </div>
        <span className="hidden md:block">
          <HeroIcon classes="w-[422px] h-[422px] lg:w-[492px] lg:h-[492px]" />
        </span>
      </div>
      <div className="flex justify-center items-center gap-2 mt-12">
        <span className="text-sky-400">
          <StarIcon />
        </span>{" "}
        8.6 average rating based on 140+ reviews
      </div>
    </section>
  );
};

export default Hero;
