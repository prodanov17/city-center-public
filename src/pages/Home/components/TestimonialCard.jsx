import React from "react";
import { EnglishFlag, QuoteIcons, StarIcon } from "../../../assets/Icons";
import Card from "../../../UI/Card";

const img = "https://source.unsplash.com/random/?Profile/";

const Components = {
  englishFlag: EnglishFlag,
};

const TestimonialCard = (props) => {
  return (
    <Card bgColor="bg-sky-200">
      <div className="flex p-4 gap-3 items-center relative">
        <div className="w-14 h-14 overflow-hidden object-cover rounded-full ">
          {/* <img src={img} alt="" /> */}
          <svg
            width="56"
            height="56"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 29 29"
            id="user"
            fill="currentColor"
            className="text-sky-900"
          >
            <path d="M14.5 2A12.514 12.514 0 0 0 2 14.5 12.521 12.521 0 0 0 14.5 27a12.5 12.5 0 0 0 0-25Zm7.603 19.713a8.48 8.48 0 0 0-15.199.008A10.367 10.367 0 0 1 4 14.5a10.5 10.5 0 0 1 21 0 10.368 10.368 0 0 1-2.897 7.213ZM14.5 7a4.5 4.5 0 1 0 4.5 4.5A4.5 4.5 0 0 0 14.5 7Z"></path>
          </svg>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-3 items-center">
            <h4 className="font-semibold text-sky-900">
              {props.testimonial.name}
            </h4>
            {/* <span>{<EnglishFlag />}</span> */}
            <span>
              {React.createElement(Components[props.testimonial.from])}
            </span>
          </div>
          <p className="text-xs text-neutral-500 ">
            stayed at{" "}
            <a href="#" className="text-sky-800 underline">
              {props.testimonial.stayed_at}
            </a>
          </p>
          <div className="flex mt-1">
            {[1, 2, 3, 4, 5].map((e, index) => {
              if (e <= props.testimonial.rating) {
                return (
                  <span key={index} className="text-sky-400">
                    <StarIcon key={index} />
                  </span>
                );
              } else {
                return (
                  <span key={index} className="text-sky-800">
                    <StarIcon key={index} />
                  </span>
                );
              }
            })}
          </div>
        </div>
        <span className="absolute top-4 right-5">
          <QuoteIcons />
        </span>
      </div>
      <p className="px-4 pb-4 text-sm text-neutral-800">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est libero
        impedit dolor repellat quos necessitatibus itaque quae quibusdam veniam
        maiores!
      </p>
    </Card>
  );
};

export default TestimonialCard;
