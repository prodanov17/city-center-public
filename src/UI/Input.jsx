import React from "react";

const Input = (props) => {
  return (
    <div className="relative">
      <input
        className="w-full bg-white rounded-lg border border-neutral-400 px-4 py-2 focus:outline-none focus:border-2 focus:border-sky-800 valid:border valid:border-sky-900 peer"
        type="text"
        autoComplete="off"
        required
        name={props.name || "text"}
      />
      <label
        className="absolute left-4 px-1 translate-y-2 pointer-events-none transition-all ease-linear duration-150  text-neutral-400 peer-focus:-translate-y-1/2 peer-focus:scale-75 peer-focus:bg-white peer-focus:left-1 peer-valid:-translate-y-1/2 peer-valid:scale-75 peer-valid:bg-white peer-valid:left-1"
        htmlFor=""
      >
        {props.label}
      </label>
    </div>
  );
};

export default Input;
