import React from "react";

const Heart = (props: any) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21.5999 9.5467C21.5999 9.7507 21.5897 9.9547 21.5693 10.1587C21.4979 10.9135 21.2939 11.6683 20.9879 12.3823C20.9777 12.3925 20.9777 12.4027 20.9777 12.4027C18.7745 17.5945 11.4 21.4501 11.4 21.4501C11.4 21.4501 4.02535 17.5945 1.82215 12.4027C1.82215 12.4027 1.82215 12.3925 1.81195 12.3823C1.50595 11.6683 1.30195 10.9237 1.23055 10.1587C1.21015 9.9547 1.19995 9.7507 1.19995 9.5467C1.19995 6.2623 3.48475 3.6001 6.29995 3.6001C9.11515 3.6001 11.4 6.2623 11.4 9.5467C11.4 6.2623 13.6847 3.6001 16.4999 3.6001C19.3151 3.6001 21.5999 6.2623 21.5999 9.5467Z"
        stroke="#BDBDBD"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Heart;
