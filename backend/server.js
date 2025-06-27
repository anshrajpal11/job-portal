import express from "express";
import dotenv from "dotenv";
import connectDb from "./utils/connectDb.js";
import userRouter from "./routes/userRoutes.js";
import connectCloudinary from "./utils/connectCloudinary.js";
import jobRouter from "./routes/jobRoutes.js";
import cors from 'cors';

const app = express();




connectDb();

dotenv.config();
connectCloudinary();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/user",userRouter)
app.use("/api/job",jobRouter);


const port = process.env.PORT;





app.listen(process.env.PORT,()=>{
  console.log(`serving running on port ${port}`)
})