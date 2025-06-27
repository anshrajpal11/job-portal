import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { TbMoneybag } from "react-icons/tb";
import { CiCalendar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Job = ({
  title,
  description,
  location,
  salary,
  category,
  type,
  id,
  date,
  logo,
  name,
}) => {
  return (
    <div className="w-full max-w-xs p-4 md:p-6 rounded-2xl shadow-lg bg-white border border-gray-100 hover:shadow-2xl hover:border hover:border-gray-400 transition-all flex flex-col gap-4 mx-auto">
      {/* Logo */}
      <div className="flex justify-center">
        <img
          src={logo}
          className="w-16 h-16 object-contain"
          alt="Company Logo"
        />
      </div>

      {/* Title and Company */}
      <div className="text-center">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900">
          {name}
        </h3>
        <p className="text-xs md:text-sm text-gray-500">{title}</p>
      </div>

      {/* Info Row */}
      <div className="flex flex-col gap-2 text-xs md:text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <CiLocationOn className="text-lg" />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-2">
          <TbMoneybag className="text-lg" />
          <span>₹{salary}</span>
        </div>
        <div className="flex items-center gap-2">
          <CiCalendar className="text-lg" />
          <span>Posted on: {date}</span>
        </div>
      </div>

      {/* Tags */}
      <div className="flex gap-2 mt-2 flex-wrap">
        <span className="text-xs px-3 py-1 rounded-full bg-pink-100 text-pink-700 border border-pink-300">
          {category}
        </span>
        <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700 border border-blue-300">
          {type}
        </span>
      </div>

      {/* Button */}
      <Link
        to={`/job/${id}`}
        className="mt-4 w-full py-2 rounded-lg bg-gray-600 text-white hover:bg-gray-800 transition font-medium text-center text-xs md:text-base"
      >
        More Details
      </Link>
    </div>
  );
};

export default Job;
