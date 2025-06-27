import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const authEmployee = async (req, res, next) => {
  try {
    const token = req.headers.token;
    if (!token) {
      return res.json({ success: false, message: "not logged in" });
    }
    const { id, role } = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = id;
    req.role = role;
    if (role == "employee") {
      next();
    } else {
     return res.json("you dont have perms");
    }
  } catch (error) {
    console.log(error);
  }
};

export default authEmployee;
