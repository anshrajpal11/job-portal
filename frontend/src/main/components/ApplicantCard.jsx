import React from "react";
import { useState } from "react";
import { CiLocationOn, CiCalendar } from "react-icons/ci";
import { TbMoneybag } from "react-icons/tb";
import axios from "axios";
const ApplicantCard = ({ app }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const formattedDate = new Date(app.appliedOn).toLocaleDateString();
  const [status, setStatus] = useState(app.status);
  const token = localStorage.getItem("token");
  const handleStatusChange = async (newStatus) => {
    setStatus(newStatus);
    const jobId = app.jobId;
    const employeeId = app.employee._id;
    const response = await axios.patch(
      `${backendUrl}api/job/changeStatus/${jobId}/${employeeId}`,
      { status: newStatus },
      { headers: { token: token } }
    );
    console.log(response.data);
  };

  return (
    <div className="mt-6 mb-4 p-4 sm:p-6 border border-gray-200 rounded-xl shadow-sm flex flex-col sm:flex-row items-center justify-between bg-white hover:shadow-md transition-all">
      {/* Employee Info */}
      <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
        <img
          src={app.employee?.image}
          alt={app.employee?.name}
          className="w-20 h-20 sm:w-32 sm:h-32 object-cover rounded-full border"
        />
        <div>
          <p className="font-semibold text-base md:text-lg text-gray-900">
            {app.employee?.name}
          </p>
          <p className="text-xs md:text-sm text-gray-500">
            Applied for role - {app.jobTitle}
          </p>
          <div className="flex gap-2 mt-2 flex-wrap">
            <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700 border border-blue-300">
              {app.jobCategory}
            </span>
            <span className="text-xs px-3 py-1 rounded-full bg-pink-100 text-pink-700 border border-pink-300">
              {app.jobType}
            </span>
          </div>
        </div>
      </div>

      {/* Job Details */}
      <div className="mt-4 sm:mt-0 flex flex-col gap-1 text-xs md:text-sm text-gray-600 w-full sm:w-auto">
        <div className="flex items-center gap-2">
          <CiCalendar className="text-gray-500" />
          <span>Applied on {formattedDate}</span>
        </div>
        <div className="flex items-center gap-2">
          <CiLocationOn className="text-gray-500" />
          <span>{app.jobLocation}</span>
        </div>
        <div className="flex items-center gap-2">
          <TbMoneybag className="text-gray-500" />
          <span>${app.jobSalary}</span>
        </div>
      </div>

      {/* Application Status */}
      <div className="mt-4 sm:mt-0 flex items-center gap-2 w-full sm:w-auto justify-start sm:justify-end">
        <select
          name="status"
          id="status"
          value={status}
          className="border p-1 border-gray-300 rounded text-xs md:text-sm"
          onChange={(e) => {
            handleStatusChange(e.target.value);
          }}
        >
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>
    </div>
  );
};

export default ApplicantCard;
