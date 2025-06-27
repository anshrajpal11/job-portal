import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { TbMoneybag } from "react-icons/tb";
import { CiCalendar } from "react-icons/ci";
import { IoStarSharp } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";

const Partners = ({ name, img }) => {
  return (
    <div className="w-full max-w-xs mx-auto my-4 md:my-8 p-4 md:p-6 border rounded-xl shadow-md border-gray-300 bg-white flex flex-col items-center gap-4 transition hover:shadow-xl">
      <img
        src={img}
        className="w-16 h-16 md:w-20 md:h-20 object-contain"
        alt="Microsoft Logo"
      />

      <div className="text-center">
        <p className="text-lg md:text-2xl font-bold text-gray-800">{name}</p>
        <div className="flex mt-2 justify-center">
          <IoStarSharp className="text-yellow-500 text-base md:text-xl" />
          <IoStarSharp className="text-yellow-500 text-base md:text-xl" />
          <IoStarSharp className="text-yellow-500 text-base md:text-xl" />
          <IoStarSharp className="text-yellow-500 text-base md:text-xl" />
          <IoStarSharp className="text-gray-500 text-base md:text-xl" />
        </div>
      </div>

      <div className="flex items-center text-gray-500 gap-2 text-xs md:text-sm">
        <CiLocationOn className="text-lg" />
        <span>Delhi</span>
      </div>

      <div className="flex items-center text-gray-500 gap-2 text-xs md:text-sm">
        <FaLink className="text-lg" />
        <span className="text-blue-500"> www.microsoft.com </span>
      </div>

      <div className="flex items-center text-gray-500 gap-2 text-xs md:text-sm">
        <CiCalendar className="text-lg" />
        <span>Since 2020</span>
      </div>

      <button className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition text-xs md:text-base">
        More Details
      </button>
    </div>
  );
};

export default Partners;
