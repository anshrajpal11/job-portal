import express from "express";
import {
  employeeRegister,
  employeeLogin,
  employerRegister,
  employerLogin,
} from "../controllers/userController.js";

import upload from "../middlewares/multer.js";

const userRouter = express.Router();

userRouter.post("/register/employee",upload.single("image"), employeeRegister);
userRouter.post("/register/employer",upload.single("logo"),employerRegister);
userRouter.post("/login/employee", employeeLogin);
userRouter.post("/login/employer", employerLogin);

export default userRouter;
