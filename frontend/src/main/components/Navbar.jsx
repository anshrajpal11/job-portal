import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { IoIosLogOut } from "react-icons/io";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, role, setToken, setRole, setId, setIsLogin, isLogin } =
    useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const logoutHandler = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("role", "");
    localStorage.setItem("isLogin", false);
    localStorage.setItem("id", "");

    setToken("");
    setRole("");
    setId("");
    setIsLogin(false);
    toast.info("Logged out successfully!");
    navigate("/login");
  };
  const id = localStorage.getItem("id");

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between md:justify-around mx-2 md:mx-20 my-2 items-center roboto gap-4 relative">
        <img src={logo} alt="k" className="h-12" />
        <button
          className="md:hidden absolute right-4 top-4 z-20"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <div
          className={`flex-col md:flex-row flex gap-6 md:gap-10 items-center md:static absolute top-16 left-0 w-full md:w-auto bg-white md:bg-transparent z-10 transition-all duration-300 ${
            menuOpen ? "flex" : "hidden md:flex"
          }`}
        >
          <Link to="/" className="text-md" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link
            to="/jobs"
            className="text-md"
            onClick={() => setMenuOpen(false)}
          >
            Jobs
          </Link>
          {role === "employee" && (
            <Link
              to={`/appliedjobs/${id}`}
              className="text-md"
              onClick={() => setMenuOpen(false)}
            >
              Applied Jobs
            </Link>
          )}
          {role === "employer" && (
            <Link
              to={`/addedjobs/${id}`}
              className="text-md"
              onClick={() => setMenuOpen(false)}
            >
              My Jobs
            </Link>
          )}
          {role === "employer" && (
            <Link
              to="/addjob"
              className="text-md"
              onClick={() => setMenuOpen(false)}
            >
              Add Job
            </Link>
          )}
          {role === "employer" && (
            <Link
              to="/applicants"
              className="text-md"
              onClick={() => setMenuOpen(false)}
            >
              Applicants
            </Link>
          )}
          <Link
            to="/contact"
            className="text-md"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          {!isLogin && (
            <Link
              to="/login"
              className="bg-black text-white p-2 w-20 text-center"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
          )}
          {isLogin && (
            <div className="flex gap-3 items-center">
              <img
                src="https://static.vecteezy.com/system/resources/previews/014/194/215/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg"
                className="h-10"
                alt=""
              />
              <p>Name</p>
              <button
                className=""
                onClick={() => {
                  setMenuOpen(false);
                  logoutHandler();
                }}
              >
                <IoIosLogOut className="h-13 w-6 cursor-pointer" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
