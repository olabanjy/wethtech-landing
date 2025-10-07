import React from "react";

const Caret = ({ open }) => {
  return (
    <svg
      className={`w-4 h-4 transform transition-transform duration-150 ${
        open ? "rotate-180" : ""
      }`}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M6 8l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Caret;
