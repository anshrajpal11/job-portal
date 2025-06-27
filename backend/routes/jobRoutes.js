import express from "express";
import {
  postJob,
  removeJob,
  applyJob,
  listJob,
  singleJob,
  employerJob,
  employeeApplications,
  employerApplications,
  changeStatus
} from "../controllers/jobController.js";
import authEmployee from "../middlewares/authEmployee.js";
import authEmployer from "../middlewares/authEmployer.js";

const jobRouter = express.Router();

jobRouter.post("/post", authEmployer, postJob);
jobRouter.post("/remove/:id", authEmployer, removeJob);
jobRouter.post("/apply/:id", authEmployee, applyJob);
jobRouter.get("/list", listJob);
jobRouter.get("/single/:id", singleJob);
jobRouter.get("/jobs/:id", authEmployer, employerJob);
jobRouter.get("/applications/:id", authEmployee, employeeApplications);
jobRouter.get("/applications/employer/:id", authEmployer, employerApplications);
jobRouter.patch("/changeStatus/:jobId/:employeeId", authEmployer, changeStatus);

export default jobRouter;
