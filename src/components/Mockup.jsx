import React from "react";
import ImgMockup from "../assets/mockup.png";

export const Mockup = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-10">
      <img src={ImgMockup} alt="Liso Password Manager" />
    </div>
  );
};
