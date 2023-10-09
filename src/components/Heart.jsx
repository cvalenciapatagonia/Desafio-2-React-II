import React from "react";

const Heart = ({color}) => {
  return (
    <svg
      fill={color ? '#ff0000' : '#CCCCCC'}
      width="64px"
      height="64px"
      viewBox="-16 -16 64.00 64.00"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#ff0000"
      strokeWidth="0.00032"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#CCCCCC"
        strokeWidth="0.576"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <title>hearts</title>{" "}
        <path d="M27.267 11.489c0.21 6.687-10.266 11.384-11.25 15.056-1.075-4.011-11.060-8.078-11.283-15.056-0.214-6.701 8.047-8.155 11.283-2.55 3.316-5.743 11.043-4.039 11.25 2.55z"></path>{" "}
      </g>
    </svg>
  );
};

export default Heart;
