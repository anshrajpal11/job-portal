import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

const connectCloudinary = async ()=>{
  cloudinary.config({
    api_key:process.env.API_KEY,
    cloud_name:process.env.API_NAME,
    api_secret:process.env.API_SECRET
  })
  console.log("cloudinary connected");
}

export default connectCloudinary