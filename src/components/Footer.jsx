import React from "react";
import { Link } from "react-router-dom";
import { EmailIcon, PhoneIcon } from "../assets/Icons";

const Footer = (props) => {
  return (
    <footer
      id="footer"
      className={` bg-sky-800 text-white flex flex-col gap-6 items-center ${props.classes}`}
    >
      <div className="text-center py-4 flex flex-col gap-6 md:flex-row md:gap-16 lg:gap-36 md:text-left">
        <h2 className="text-3xl">
          City Center <br />
          Apartments
        </h2>
        <div className="flex flex-col">
          <h2 className="text-neutral-50 font-semibold mb-1">Navigation</h2>
          <Link>Home</Link>
          <Link>Attractions</Link>
          <Link>Contact</Link>
          <Link>About us</Link>
        </div>
        <div className="flex flex-col">
          <h2 className="text-neutral-50 font-semibold mb-1">Legal</h2>
          <Link>Terms of Service</Link>
          <Link>Privacy Policy</Link>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h2 className=" text-neutral-50 font-semibold mb-2">
            Contact Information
          </h2>
          <div className="flex gap-2 items-center mb-1">
            <PhoneIcon />{" "}
            <p className="text-sm text-neutral-200">+389 78 253 212</p>
          </div>
          <div className="flex gap-2 items-center mb-2">
            <EmailIcon />{" "}
            <p className="text-sm text-neutral-200">citycentersr@gmail.com</p>
          </div>
          <div className="text-sm">mk | en</div>
        </div>
      </div>
      <p className="text-xs text-neutral-300 my-2">
        &copy; 2023 All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
