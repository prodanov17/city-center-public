import React from "react";
import { NavLink } from "react-router-dom";
import { PhoneIcon, EmailIcon, TriangleShape } from "../assets/Icons";

const MobileNavbar = (props) => {
  return (
    <div className={`h-screen bg-inherit ${props.hidden ? "hidden" : ""}`}>
      <div className="mb-8 mt-4 flex flex-col gap-2">
        <NavLink
          onClick={props.nav}
          to="/"
          className={({ isActive, isPending }) =>
            isActive
              ? "text-sm px-8 hover:bg-sky-200 opacity-75 text-sky-950 font-semibold"
              : "text-sm px-8 hover:bg-sky-200 opacity-75"
          }
        >
          Home
        </NavLink>
        <NavLink
          onClick={props.nav}
          to="/apartments"
          className={({ isActive, isPending }) =>
            isActive
              ? "text-sm px-8 hover:bg-sky-200 opacity-75 text-sky-950 font-semibold"
              : "text-sm px-8 hover:bg-sky-200 opacity-75"
          }
        >
          Apartments
        </NavLink>
        <NavLink
          onClick={props.nav}
          to="/attractions"
          className={({ isActive, isPending }) =>
            isActive
              ? "text-sm px-8 hover:bg-sky-200 opacity-75 text-sky-950 font-semibold"
              : "text-sm px-8 hover:bg-sky-200 opacity-75"
          }
        >
          Attractions
        </NavLink>
        <NavLink
          onClick={props.nav}
          to="/contact"
          className={({ isActive, isPending }) =>
            isActive
              ? "text-sm px-8 hover:bg-sky-200 opacity-75 text-sky-950 font-semibold"
              : "text-sm px-8 hover:bg-sky-200 opacity-75"
          }
        >
          Contact
        </NavLink>
      </div>
      <div className="px-8">
        <h2 className=" text-neutral-950 text-semibold mb-2">
          Contact Information
        </h2>
        <div className="flex gap-2 items-center mb-1">
          <PhoneIcon />{" "}
          <p className="text-sm text-neutral-600">+389 78 253 212</p>
        </div>
        <div className="flex gap-2 items-center mb-2">
          <EmailIcon />{" "}
          <p className="text-sm text-neutral-600">citycentersr@gmail.com</p>
        </div>
        <div className="text-sm">mk | en</div>
      </div>
      <span className="absolute bottom-16 left-0">
        <TriangleShape />
      </span>
    </div>
  );
};

export default MobileNavbar;
