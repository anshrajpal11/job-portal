import React from "react";
import AppliedCard from "../components/AppliedCard";
import { useState,useEffect } from "react";
import axios from "axios";

const AppliedJobs = () => {

  const id = localStorage.getItem('id');
  const [data,setData] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const token = localStorage.getItem('token');
  useEffect(()=>{
      const fetchData = async()=>{
        const response = await axios.get(backendUrl+`api/job/applications/${id}`,{headers:{token:token}});
        setData(response.data);
      }
      fetchData();
    },[]);
    console.log("API response:", data);

  return <div className="mx-4 md:mx-36 mb-120 mt-10">
    <p className='text-center text-4xl'> MY <span className='font-bold text-gray-500'>APPLICATIONS⎯⎯</span> </p>

    <div>
    {
      data.map((d)=>{
        return <AppliedCard app={d} />
      })
    }

    </div>


  </div>;
};

export default AppliedJobs;
