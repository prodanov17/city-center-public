import React from "react";
import {
  LinkIcon,
  LocationIcon,
  MapsIcon,
} from "../../../assets/AttractionIcons";
import { ExternalLink } from "../../../assets/Icons";
import Card from "../../../UI/Card";

const AttractionCard = (props) => {
  return (
    <Card bgColor="max-w-[300px] sm:flex sm:max-w-[825px] bg-white">
      <div className="relative w-[300px]s w-max h-[171px] overflow-hidden ">
        <img
          className="h-full object-cover w-[298px] sm:w-[300px] lg:w-[300px] rounded-t-lg sm:rounded-t-none sm:rounded-l-lg sm:rounded-tl-lg "
          src={props.attraction.img}
          alt={props.attraction.alt}
        />
        <span className="absolute inset-0 bg-transparent bg-gradient-to-t sm:hidden from-black"></span>
        <span className="absolute left-0 bottom-0 p-2 pl-4 sm:hidden">
          <p className="text-neutral-400 uppercase text-xs tracking-wide">
            {props.attraction.type}
          </p>
          <h2 className="text-white font-medium ">{props.attraction.title}</h2>
        </span>
      </div>
      <div className="flex flex-col justify-between">
        <span className="p-2 pb-0 pl-4 hidden sm:block">
          <p className="text-neutral-400 uppercase text-xs tracking-wide">
            {props.attraction.type}
          </p>
          <h2 className="text-black font-medium text-lg">
            {props.attraction.title}
          </h2>
        </span>
        <p className="text-neutral-600 p-4 pb-0">{props.attraction.desc}</p>
        <div className="flex flex-col gap-2 p-4 sm:flex-row">
          <span className="flex items-center gap-2">
            <span>
              <LocationIcon />
            </span>
            <span className="flex items-center gap-1">
              <strong className="font-medium">{props.attraction.km}</strong>
              <span className="text-sm text-neutral-500">km from Strumica</span>
            </span>
          </span>
          <span className="flex items-center gap-2">
            <span>
              <LinkIcon />
            </span>
            <a
              href={props.attraction.link}
              className="text-sm underline text-neutral-500"
            >
              Learn More
            </a>
          </span>
          <span className="flex items-center gap-2">
            <span>
              <MapsIcon />
            </span>
            <a
              href={props.attraction.maps}
              className="text-sm underline text-neutral-500"
            >
              Google Maps
            </a>
          </span>
        </div>
      </div>
    </Card>
  );
};

export default AttractionCard;
