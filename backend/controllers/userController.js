import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { uploadToCloudinary } from "../helper/cloudinaryHelper.js";
import employerModel from "../models/employerModel.js";
import dotenv from "dotenv";
import employeeModel from "../models/employeeModel.js";

dotenv.config();

const employerRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const logo = req.file;

    const existingEmployer = await employerModel.findOne({ email });
    if (existingEmployer) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Employer with this email already exists.",
        });
    }

    if (!logo) {
      return res
        .status(400)
        .json({ success: false, message: "Company logo is required." });
    }

    const result = await uploadToCloudinary(logo.buffer);
    const logo_url = result.secure_url;

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newEmployer = await employerModel.create({
      name,
      email,
      password: hashedPassword,
      logo: logo_url,
      role: "employer",
    });

    const token = jwt.sign(
      { id: newEmployer._id, role: "employer" },
      process.env.JWT_SECRET
    );

    res.status(201).json({ success: true, token: token });
  } catch (error) {
    console.log("Error during employer registration:", error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};

const employeeRegister = async (req, res) => {
  try {
    const { name, email, password, skills } = req.body;
    const image = req.file;

    console.log(req.file);

    if (!image) {
      return res.json("image nhi h");
    }

    const result = await uploadToCloudinary(image.buffer);
    const image_url = result.secure_url;

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newEmployee = await employeeModel.create({
      name,
      email,
      password: hashedPassword,
      image: image_url,
      role: "employee",
      skills: skills,
    });

    const token = jwt.sign(
      { id: newEmployee._id, role: "employee" },
      process.env.JWT_SECRET
    );

    res.json({ success: true, token: token });
  } catch (error) {
    console.log(error);
  }
};

const employeeLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await employeeModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "user doesnt exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "invalid password" });
    } else {
      const token = jwt.sign(
        { id: user._id, role: "employee" },
        process.env.JWT_SECRET
      );
      return res.json({ success: true, token: token });
    }
  } catch (error) {
    return res.json(error);
  }
};

const employerLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await employerModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "user doesnt exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "invalid password" });
    } else {
      const token = jwt.sign(
        { id: user._id, role: "employer" },
        process.env.JWT_SECRET
      );
      return res.json({ success: true, token: token });
    }
  } catch (error) {
    return res.json(error);
  }
};

export { employeeRegister, employeeLogin, employerLogin, employerRegister };
