import React from "react";

const ArrowLeft = (props) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 15L1 8L8 1"
        stroke="#424242"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 9C15.5523 9 16 8.55228 16 8C16 7.44772 15.5523 7 15 7V9ZM1 9H15V7H1V9Z"
        fill="#424242"
      />
    </svg>
  );
};

export default ArrowLeft;
