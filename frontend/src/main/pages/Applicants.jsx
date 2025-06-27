import React, { useEffect, useState } from "react";
import axios from "axios";
import ApplicantCard from "../components/ApplicantCard";

const Applicants = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${backendUrl}api/job/applications/employer/${id}`,
          { headers: { token: token } }
        );

        if (Array.isArray(res.data)) {
          setData(res.data);
        } else {
          setError(res.data.message || "Unexpected response from server.");
        }
      } catch (err) {
        setError("Failed to fetch applicants.");
        console.error("Fetch error:", err);
      }
    };

    fetchData();
  }, []);

  const flattenedApplicants = Array.isArray(data)
    ? data.flatMap((job) =>
        job.applicants.map((applicant) => ({
          jobId: job._id, // ← Add this line!
          employee: applicant.employee,
          status: applicant.status,
          appliedOn: applicant.appliedOn,
          jobTitle: job.title,
          jobLocation: job.location,
          jobSalary: job.salary,
          jobCategory: job.category,
          jobType: job.type,
        }))
      )
    : [];

  return (
    <div className="mx-4 md:mx-36 mb-50 mt-10">
      <p className="text-center text-4xl">
        MY <span className="font-bold text-gray-500">APPLICANTS⎯⎯</span>
      </p>

      {error && (
        <p className="text-center text-red-500 mt-6 text-lg">{error}</p>
      )}

      <div>
        {flattenedApplicants.length > 0 ? (
          flattenedApplicants.map((app, index) => (
            <ApplicantCard key={index} app={app} />
          ))
        ) : !error ? (
          <p className="text-center text-gray-400 mt-10">
            No applicants found.
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Applicants;
