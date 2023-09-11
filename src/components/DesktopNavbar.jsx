import React from "react";
import { Link, NavLink } from "react-router-dom";

const DesktopNavbar = () => {
  return (
    <div className="flex gap-8 items-center">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isActive
            ? "text-sm hover:text-sky-700 transition-all opacity-75 text-sky-950 font-semibold"
            : "text-sm hover:text-sky-700 transition-all opacity-75"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/apartments"
        className={({ isActive, isPending }) =>
          isActive
            ? "text-sm hover:text-sky-700 transition-all opacity-75 text-sky-950 font-semibold"
            : "text-sm hover:text-sky-700 transition-all opacity-75"
        }
      >
        Apartments
      </NavLink>
      <NavLink
        to="/attractions"
        className={({ isActive, isPending }) =>
          isActive
            ? "text-sm hover:text-sky-700 transition-all opacity-75 text-sky-950 font-semibold"
            : "text-sm hover:text-sky-700 transition-all opacity-75"
        }
      >
        Attractions
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isActive
            ? "text-sm hover:text-sky-700 transition-all opacity-75 text-sky-950 font-semibold"
            : "text-sm hover:text-sky-700 transition-all opacity-75"
        }
      >
        Contact
      </NavLink>
      <Link
        to="/apartments"
        className="text-white bg-sky-900 hover:bg-sky-800 uppercase rounded text-sm px-4 py-2"
      >
        Book Now
      </Link>
    </div>
  );
};

export default DesktopNavbar;
