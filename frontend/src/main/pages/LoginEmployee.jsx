import React, { useState, useContext } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { Route, useNavigate, Link } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { toast } from "react-toastify";

const LoginEmployee = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken, setRole, setId, setIsLogin } = useContext(UserContext);
  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(backendUrl + "api/user/login/employee", {
        email,
        password,
      });

      const decoded = jwtDecode(res.data.token);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", decoded.role);
      localStorage.setItem("id", decoded.id);
      localStorage.setItem("isLogin", true);
      setToken(res.data.token);
      setId(decoded.id);
      setRole(decoded.role);
      setIsLogin(true);
      toast.success("Login successful!");
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <form
      onSubmit={loginHandler}
      className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded"
    >
      <h2 className="text-xl font-bold mb-4 text-center">Employee Login</h2>
      <input
        type="email"
        placeholder="Email"
        className="w-full mb-3 px-3 py-2 border rounded"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full mb-3 px-3 py-2 border rounded"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="w-full bg-black text-white py-2 rounded">
        Login
      </button>

      <Link to={"/register/employee"} className="text-blue-400 text-center">
        Register here
      </Link>
    </form>
  );
};

export default LoginEmployee;
