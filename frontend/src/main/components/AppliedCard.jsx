import React from "react";
import { CiLocationOn, CiCalendar } from "react-icons/ci";
import { TbMoneybag } from "react-icons/tb";

// Helper function for status color
const getStatusColor = (status) => {
  switch (status) {
    case "approved":
      return { dot: "bg-green-500", text: "text-green-700" };
    case "rejected":
      return { dot: "bg-red-500", text: "text-red-700" };
    case "pending":
    default:
      return { dot: "bg-yellow-500", text: "text-yellow-700" };
  }
};

const AppliedCard = ({ app }) => {
  const status = app.applicants[0]?.status || "pending";
  const appliedDate = new Date(
    app.applicants[0]?.appliedOn
  ).toLocaleDateString();
  const { dot, text } = getStatusColor(status);

  return (
    <div className="mt-6 mb-4 p-4 sm:p-6 border border-gray-200 rounded-xl shadow-sm flex flex-col sm:flex-row items-center justify-between bg-white hover:shadow-md transition-all">
      {/* Employer Info */}
      <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
        <img
          src={app.employer.logo}
          alt={app.employer.name}
          className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-full border"
        />
        <div>
          <p className="font-semibold text-base md:text-lg text-gray-900">
            {app.employer.name}
          </p>
          <p className="text-xs md:text-sm text-gray-500">{app.title}</p>
          <div className="flex gap-2 mt-2 flex-wrap">
            <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700 border border-blue-300">
              {app.type}
            </span>
            <span className="text-xs px-3 py-1 rounded-full bg-pink-100 text-pink-700 border border-pink-300">
              {app.category}
            </span>
          </div>
        </div>
      </div>

      {/* Job Info */}
      <div className="mt-4 sm:mt-0 flex flex-col gap-1 text-xs md:text-sm text-gray-600 w-full sm:w-auto">
        <div className="flex items-center gap-2">
          <CiCalendar className="text-gray-500" />
          <span>Applied on {appliedDate}</span>
        </div>
        <div className="flex items-center gap-2">
          <CiLocationOn className="text-gray-500" />
          <span>{app.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <TbMoneybag className="text-gray-500" />
          <span>${app.salary}</span>
        </div>
      </div>

      {/* Application Status */}
      <div className="mt-4 sm:mt-0 flex items-center gap-2 w-full sm:w-auto justify-start sm:justify-end">
        <span className={`inline-block w-3 h-3 rounded-full ${dot}`}></span>
        <span className={`text-xs md:text-sm font-medium ${text}`}>
          {status}
        </span>
      </div>
    </div>
  );
};

export default AppliedCard;
