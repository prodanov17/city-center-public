import React from "react";
import {
  BedIcon,
  ExternalLink,
  KitchenIcon,
  PersonIcon,
  SquareMetersIcon,
} from "../../assets/Icons";
import Card from "../../UI/Card";

// const img = "https://source.unsplash.com/random/?Apartment/";

const ApartmentCard = (props) => {
  return (
    <Card bgColor="md:max-w-[300px]">
      <div className="w-full aspect-video object-contain overflow-hidden">
        <img src={props.app.img} alt="" className="rounded-t-xl" />
      </div>
      <div className="px-4 py-4 rounded-b-xl bg-neutral-50">
        <h4 className="text-xs uppercase text-neutral-400 tracking-wide">
          {props.app.type}
        </h4>
        <h3 className="text-lg font-medium truncate">{props.app.name}</h3>
        <div className="flex gap-2 mt-1">
          <span className="flex gap-2 items-center">
            <SquareMetersIcon />{" "}
            <span className="text-sm text-neutral-500">
              {props.app.size} m<sup>2</sup>
            </span>
          </span>
          <span className="flex gap-2 items-center text-sm text-neutral-500">
            <BedIcon />
            {props.app.beds} Bed
          </span>
          <span className="flex gap-2 items-center text-sm text-neutral-500">
            <PersonIcon />
            {props.app.persons}
          </span>
        </div>
        <div className="flex items-baseline justify-between -mt-2">
          <div className="flex gap-1 items-center">
            <p className="text-sky-900 font-semibold">€{props.app.price}</p>
            <span className="text-sm"> / night</span>
          </div>
          <a
            href={props.app.link}
            target={"_blank"}
            className="border border-sky-900 text-sky-900 hover:bg-sky-900 hover:text-white hover:border-opacity-0 transition-all px-2 py-1 mt-3 rounded flex items-center gap-2"
          >
            View
            <ExternalLink />
          </a>
        </div>
      </div>
    </Card>
  );
};

export default ApartmentCard;
