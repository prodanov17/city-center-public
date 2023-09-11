import React from "react";
import {
  AirConditioning,
  ApartmentIcon,
  BalconyIcon,
  KitchenAmenity,
  NoSmokingIcon,
  WifiIcon,
} from "../../../assets/Icons";
import Card from "../../../UI/Card";

const Components = {
  airCond: AirConditioning,
  wifi: WifiIcon,
  balcony: BalconyIcon,
  apartment: ApartmentIcon,
  smoking: NoSmokingIcon,
  kitchen: KitchenAmenity,
};

const AmenitiesCard = (props) => {
  return (
    <Card bgColor="bg-white transition-all duration-300 hover:-translate-y-2 group">
      <div className="flex items-center px-4 py-4 gap-2">
        <span className="">
          {React.createElement(Components[props.amenity.icon])}
        </span>
        <h3 className="font-medium transition-colors delay-150 group-hover:text-amber-400">
          {props.amenity.title}
        </h3>
      </div>
      <p className="px-4 pb-4">{props.amenity.subtitle}</p>
    </Card>
  );
};

export default AmenitiesCard;
