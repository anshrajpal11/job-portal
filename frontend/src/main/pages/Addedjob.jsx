import React from "react";
import AddedCard from "../components/AddedCard";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const AddedJobs = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [jobs, setJobs] = useState([]);
  const token = localStorage.getItem("token");
  const { id } = useParams();
  useEffect(() => {
    const fetchJobs = async () => {
      const response = await axios.get(backendUrl + `api/job/jobs/${id}`, {
        headers: { token: token },
      });
      setJobs(response.data);
    };
    fetchJobs();
  }, []);

  return (
    <div className="mx-4 md:mx-36 mb-120 mt-10">
      <p className="text-center text-4xl">
        {" "}
        MY <span className="font-bold text-gray-500">JOBS⎯⎯</span>{" "}
      </p>

      <div>
        {jobs.map((j) => {
          return <AddedCard job={j} />;
        })}
      </div>
    </div>
  );
};

export default AddedJobs;
