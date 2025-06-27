import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Addjob = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const token = localStorage.getItem("token");
  const employer = localStorage.getItem("id");

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();

    const jobData = {
      title,
      description,
      location,
      salary,
      category,
      type,
    };

    const response = await axios.post(backendUrl + "api/job/post", jobData, {
      headers: { token: token },
    });
    toast.success("Job posted successfully!");
    navigate("/addedjobs");
    console.log(response.data);
  };

  return (
    <div className="min-h-screen bg-gray-200 py-6 px-2 sm:py-12 sm:px-4 md:px-6 lg:px-8">
      <div className="w-full max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-4 sm:p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Post a New Job
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Job Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="e.g. Frontend Developer"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Job responsibilities, expectations, etc."
              rows="4"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                name="location"
                placeholder="e.g. Remote, Delhi"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Salary (in ₹)
              </label>
              <input
                type="number"
                name="salary"
                placeholder="e.g. 50000"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Job Type
              </label>
              <select
                name="type"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                onChange={(e) => setType(e.target.value)}
              >
                <option value="">Select</option>
                <option value="wfo">Work From Office</option>
                <option value="remote">Remote</option>
                <option value="semiwfh">Hybrid</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                name="category"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select</option>
                <option value="fulltime">Full-Time</option>
                <option value="parttime">Part-Time</option>
                <option value="intern">Internship</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md font-medium hover:bg-gray-800 transition"
          >
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addjob;
