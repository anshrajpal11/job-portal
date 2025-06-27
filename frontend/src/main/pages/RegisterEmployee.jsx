import React, { useState } from "react";
import axios from "axios";
import { UserContext } from "../context/userContext";
import { useContext } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const RegisterEmployee = () => {
  const navigate = useNavigate();

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [skills, setSkills] = useState("");
  const [image, setImage] = useState();

  const { token, role, setToken, setRole, id, setId } = useContext(UserContext);

  const registerEmployeeHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("skills", skills);
    formData.append("image", image);
    const response = await axios.post(
      backendUrl + "api/user/register/employee",
      formData
    );
    const decode = jwtDecode(response.data.token);

    setToken(response.data.token);
    setId(decode.id);
    setRole(decode.role);

    navigate("/login/employee");
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-8 p-4 sm:p-8 shadow-lg border border-gray-400 rounded-2xl bg-white space-y-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-center">
        Register as Employee
      </h2>

      <form onSubmit={registerEmployeeHandler} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="text"
          name="skills"
          placeholder="Skills (e.g. HTML, CSS, React)"
          className="w-full border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          onChange={(e) => setSkills(e.target.value)}
        />

        <div>
          <label className="block font-semibold mb-2">
            Upload Profile Image
          </label>
          <input
            type="file"
            accept="image/*"
            className="mb-2"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <input
          type="submit"
          className="w-full bg-black border-gray-400 text-white py-2 rounded-md hover:bg-gray-800 transition"
          value="Register"
        />
      </form>
    </div>
  );
};

export default RegisterEmployee;
