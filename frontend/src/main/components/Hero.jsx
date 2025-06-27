import React from "react";
import hero_img from "../../assets/hero_img.jpg";
const Hero = () => {
  return (
    <div className="my-4 mx-2 md:mx-40">
      <div className="flex flex-col md:flex-row border border-gray-500 justify-between prata-regular items-center">
        <div className="ml-0 md:ml-40 mb-6 md:mb-0">
          <p className="text-gray-500 text-center md:text-left">
            We have 450,000 great job offers you deserve
          </p>
          <p className="text-3xl md:text-7xl font-bold text-center md:text-left">
            ⎯⎯Your Dream
          </p>
          <p className="text-3xl md:text-7xl text-center md:text-left">
            Job is Waiting⎯⎯
          </p>
        </div>
        <div>
          <img
            src={hero_img}
            alt=""
            className="h-48 w-48 md:h-130 md:w-110 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
