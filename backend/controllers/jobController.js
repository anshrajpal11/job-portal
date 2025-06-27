import mongoose from "mongoose";
import jobModel from "../models/jobModel.js";
import employeeModel from "../models/employeeModel.js";
import employerModel from "../models/employerModel.js";

const postJob = async(req,res)=>{
  try {
    const {title,description,location,salary,category,type} = req.body;
    const id = req.userId;
  
    const job = await jobModel.create({
      title,
      description,
      location,
      salary,
      employer:id,
      category,
      type
    })
  
    return res.json({success:true,message:"job added"})
  } catch (error) {
    return res.json({success:false,message:error.message})
  }

}


const listJob = async(req,res)=>{
  try {
    const result = await jobModel.find({}).populate('employer');
    return res.json(result);
  } catch (error) {
    return res.json({success:false})
  }
}

const employerJob = async (req, res) => {
  try {
    const id = req.params.id;

    const jobs = await jobModel
      .find({ employer: id })
      .populate('employer'); 

    return res.json(jobs);
  } catch (error) {
    console.error("Error in employerJob:", error);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};





const singleJob = async(req,res)=>{
    const jobId = req.params.id;
    const result = await jobModel.findById(jobId).populate('employer');
    res.json(result);
}



const removeJob = async (req, res) => {
  try {
     const job = await jobModel.findById(jobId);
    const employerId = req.userId;
     
  const jobId = req.params.id;
  if(job.employer.toString()!=employerId){
    return res.json("not authorized");
  }

    const result = await jobModel.findByIdAndDelete(jobId);

    if (!result) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }

    res.json({ success: true, message: "Job deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};


const applyJob = async(req,res)=>{
    const jobId = req.params.id;
    const job =await jobModel.findById(jobId);
    const employeeId = req.userId;

    const employee = await employeeModel.findById(employeeId);
  
    employee.applications.push(jobId);
    job.applicants.push({employee:employeeId});

    await employee.save();
    await job.save();
    
    return res.json({ success: true, message: "Applied to job successfully" })

}

const employeeApplications = async(req,res)=>{

  const {id} = req.params;
  const employee = await employeeModel.findById(id)
  .populate({
    path: 'applications',
    populate: {
      path: 'employer',
      model: 'Employer'
    }
  });

  return res.json(employee.applications);

}

const employerApplications = async(req,res)=>{
  const {id} = req.params;
  const data = await jobModel.find({employer:id}).populate({
    path:'applicants.employee',
    model:'Employee'
  });
  

  return res.json(data);

}


const changeStatus = async(req,res)=>{
   const {jobId,employeeId} = req.params;
   const {status} = req.body;
   const job = await jobModel.findById(jobId);
   const applicant = job.applicants.find((j)=>{
    return j.employee.toString() == employeeId;
   })
   applicant.status = status;
   await job.save();
   return res.status(200).json({ success: true, message: "Status updated successfully" });
}



export {postJob,listJob,singleJob,applyJob,removeJob,employerJob,employeeApplications,employerApplications,changeStatus}


