import React from "react";
import Sidebar from "../components/Sidebar";
import Jobs from "../components/Jobs";

const Alljobs = () => {
  return (
    <div className="flex flex-col md:flex-row mx-2 md:mx-20">
      <Sidebar />
      <Jobs />
    </div>
  );
};

export default Alljobs;
