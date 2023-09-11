import React from "react";
import { ReloadIcon } from "../../../assets/Icons";
import Card from "../../../UI/Card";
import TestimonialCard from "./TestimonialCard";

import { TESTIMONIALS_DATA } from "../../../constants/testimonialsData";
import { useState } from "react";

Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};

const Testimonials = () => {
  const [getTestimonials, setTestimonials] = useState(TESTIMONIALS_DATA);
  const [showTestimonials, setShowTestimonials] = useState([
    getTestimonials[0],
    getTestimonials[1],
  ]);

  const shuffleHandler = () => {
    if (getTestimonials.filter((e) => !e.visited).length < 2) {
      setTestimonials((prev) => {
        return prev.map((p) => {
          return { ...p, visited: false };
        });
      });
    }
    let i =
      getTestimonials.filter((e) => !e.visited).random() || getTestimonials[1];
    i.visited = true;
    let g =
      getTestimonials.filter((e) => !e.visited).random() || getTestimonials[0];
    g.visited = true;
    setShowTestimonials([i, g]);

    showTestimonials.forEach((e) => {
      setTestimonials((prev) => {
        return prev.map((p) => {
          if (p.id === e.id) {
            return { ...p, visited: true };
          } else {
            return p;
          }
        });
      });
    });
  };

  return (
    <section className="flex flex-col items-center bg-sky-300">
      <h2 className="text-center text-2xl uppercase text-white p-4 mb-2">
        Testimonials
      </h2>
      <div className="w-5/6 max-w-[400px] md:flex md:max-w-3xl md:gap-4">
        {showTestimonials.map((e) => {
          return <TestimonialCard testimonial={e} key={e.id} />;
        })}
      </div>
      <button
        onClick={shuffleHandler}
        className="my-4 border flex items-center gap-2 transition-colors duration-300 border-white px-12 py-2 uppercase text-white hover:bg-sky-100 hover:text-sky-600"
      >
        <ReloadIcon />
        <span>Shuffle</span>
      </button>
    </section>
  );
};

export default Testimonials;
