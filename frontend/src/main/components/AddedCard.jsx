import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { TbMoneybag } from "react-icons/tb";
import { CiCalendar } from "react-icons/ci";

const AddedCard = ({job}) => {
  return (
    <div className="mt-6 mb-4 p-4 sm:p-6 border border-gray-200 rounded-xl shadow-sm flex flex-col sm:flex-row items-center justify-between bg-white hover:shadow-md transition-all">

      {/* Logo */}
      <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
        <img
          src={job.employer.logo}
          alt="Microsoft Logo"
          className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
        />
        <div>
          <p className="font-semibold text-base md:text-lg text-gray-900"> {job.employer.name} </p>
          <p className="text-xs md:text-sm text-gray-500">{job.title}</p>
          <div className="flex gap-2 mt-2 flex-wrap">
            <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700 border border-blue-300">
              {job.category}
            </span>
            <span className="text-xs px-3 py-1 rounded-full bg-pink-100 text-pink-700 border border-pink-300">
              {job.type}
            </span>
          </div>
        </div>
      </div>

      {/* Job Info */}
      <div className="mt-4 sm:mt-0 flex flex-col gap-1 text-xs md:text-sm text-gray-600 w-full sm:w-auto">
        <div className="flex items-center gap-2">
          <CiCalendar className="text-gray-500" />
          <span>Posted on {new Date(job.createdAt).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center gap-2">
          <CiLocationOn className="text-gray-500" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <TbMoneybag className="text-gray-500" />
          <span>${job.salary}</span>
        </div>
      </div>

      {/* Status */}
      <div className="mt-4 sm:mt-0 flex items-center gap-2 w-full sm:w-auto justify-start sm:justify-end">
        <span className="inline-block w-3 h-3 rounded-full bg-green-500"></span>
        <span className="text-xs md:text-sm font-medium text-green-700">Posted</span>
      </div>
    </div>
  );
};

export default AddedCard;
