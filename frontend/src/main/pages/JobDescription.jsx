import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { CiLocationOn, CiCalendar } from "react-icons/ci";
import { TbMoneybag } from "react-icons/tb";
import { toast } from "react-toastify";

const JobDescription = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [job, setJob] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await axios.get(`${backendUrl}api/job/single/${id}`);
        setJob(res.data);
      } catch (err) {
        console.error("Failed to fetch job:", err);
      }
    };
    fetchJob();
  }, [id]);

  const handleApply = async () => {
    try {
      await axios.post(`${backendUrl}api/job/apply/${id}`, {}, {
        headers: { token },
      });
      toast.success("Applied successfully!");
      navigate("/appliedjobs");
    } catch {
      toast.error("Failed to apply");
    }
  };

  if (!job) return <div className="p-10 text-center text-red-500 text-xl">❌ Job Not Found</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 sm:px-10 py-12">
      {/* Job Header */}
      <section className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl p-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-8">
          <div className="flex items-center gap-6">
            <img src={job.employer.logo} alt="Logo" className="w-20 h-20 rounded-2xl object-contain bg-gray-100" />
            <div>
              <h1 className="text-4xl font-bold">{job.title}</h1>
              <p className="text-gray-600 text-lg">{job.employer.name}</p>
            </div>
          </div>
          <button
            onClick={handleApply}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold text-sm shadow-md"
          >
            Apply Now
          </button>
        </div>

        {/* Job Details */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-700 mb-6">
          <div className="flex items-center gap-2"><CiLocationOn className="text-blue-500" /> {job.location}</div>
          <div className="flex items-center gap-2"><TbMoneybag className="text-green-600" /> ₹{job.salary}</div>
          <div className="flex items-center gap-2"><CiCalendar className="text-gray-500" /> Posted 3 days ago</div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-10">
          <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium capitalize">{job.category}</span>
          <span className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium capitalize">{job.type}</span>
          <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm font-medium">2+ yrs exp</span>
        </div>

        {/* Description Section */}
        <div className="space-y-8 text-gray-700 leading-7">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Job Description</h2>
            <p className="whitespace-pre-line">{job.description || "We are looking for a motivated individual to join our growing team. You'll work on exciting projects, collaborate with cross-functional teams, and contribute to product strategy."}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Required Skills</h2>
            <ul className="list-disc list-inside pl-2">
              <li>ReactJS / JavaScript</li>
              <li>REST APIs</li>
              <li>Tailwind CSS / Styled Components</li>
              <li>Version control: Git, GitHub</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">About the Company</h2>
            <p>
              {job.employer.name} is a fast-growing tech company revolutionizing the hiring process. With a global team and a passion for innovation, we help businesses and candidates connect better.
            </p>
          </div>

          

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Deadline to Apply</h2>
            <p className="text-red-600 font-medium">July 15, 2025</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobDescription;
