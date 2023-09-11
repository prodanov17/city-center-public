import React from "react";

const Card = (props) => {
  return (
    <div
      className={`rounded-xl shadow-xl border border-opacity-40 border-neutral-400 mb-4 ${props.bgColor}`}
    >
      {props.children}
    </div>
  );
};

export default Card;
