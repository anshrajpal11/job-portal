import React, { useEffect } from 'react'
import { useState,useContext } from 'react';
import { FilterContext } from '../context/FilterContent';
import dummyJobs from '../../assets/dummyJobs.js';
import Job from './Job.jsx';
import axios from 'axios';

const Jobs = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  
  const [products,setProducts] = useState([]);
  useEffect(()=>{
    const fetchJobs =async()=>{
      const response = await axios.get(backendUrl+'api/job/list');
      setProducts(response.data);
    }
    fetchJobs();
  },[])
  
  const {search,
      setSearch,
      sort,
      setSort,
      category,
      setCategory,
      type,
      setType} = useContext(FilterContext);


  const filterdProducts = products
  .filter(p=>p.title.toLowerCase().includes(search))
  .filter(p=> category? p.category===category :p )
  .filter(p=>type?p.type===type:p)

  return (
    <div className='mx-2 md:mx-15 my-6 md:my-10 flex flex-wrap justify-center gap-6 md:gap-12'>
      
      {
        filterdProducts.map((j)=>{
          return <Job title={j.title} description={j.description} location={j.location} salary ={j.salary} category={j.category} type={j.type} id={j._id} logo={j.employer.logo} name={j.employer.name} date={new Date(j.createdAt).toLocaleDateString()} />
        })
      }

    </div>
  )
}

export default Jobs
