import React from "react";
import { useState } from "react";
import { ChevronDown, ChevronUp, QuestionMark } from "../../../assets/Icons";

const Question = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setExpanded((prev) => !prev);
        }}
        className="flex items-center justify-between px-8 py-3 border-y w-full transition-all duration-150 hover:bg-neutral-100"
      >
        <span className="flex items-center gap-2 font-semibold text-left">
          <span>
            <QuestionMark />
          </span>
          <p>{props.data.question}</p>
        </span>
        <span>{expanded ? <ChevronUp /> : <ChevronDown />}</span>
      </button>
      <div>
        <div
          className={`px-8 w-full transition-all origin-top ${
            expanded ? "scale-y-100 py-4" : "h-0 scale-y-0"
          }`}
        >
          <p>{props.data.answer}</p>
        </div>
      </div>
    </>
  );
};

export default Question;
