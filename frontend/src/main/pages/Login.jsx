import React from "react";
import LoginEmployee from "./LoginEmployee";
import LoginEmployer from "./LoginEmployer";

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around mx-4 md:mx-36 my-10 mb-50 gap-8">
      <LoginEmployee />
      <LoginEmployer />
    </div>
  );
};

export default Login;
