import React from "react";
import { RiChatSearchLine } from "react-icons/ri";
import { IoPodiumSharp } from "react-icons/io5";
import { GrUserExpert } from "react-icons/gr";

const Specialities = () => {
  return (
    <div className="mx-2 md:mx-36 my-10 flex flex-col md:flex-row gap-5 justify-around border border-gray-200 p-5 mb-10 md:mb-40">
      <div className="flex flex-col w-full md:w-[20rem] justify-center items-center gap-4 border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0">
        <RiChatSearchLine className="text-4xl" />
        <p className="text-xl md:text-2xl text-gray-600 font-bold text-center">
          Search millions of jobs
        </p>
        <p className="text-sm text-gray-300 text-center">
          We offer large quantity and quality of jobs Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Minima, natus.{" "}
        </p>
      </div>
      <div className="flex flex-col w-full md:w-[20rem] justify-center items-center gap-4 border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0">
        <IoPodiumSharp className="text-4xl" />
        <p className="text-xl md:text-2xl text-gray-600 font-bold text-center">
          Search millions of jobs
        </p>
        <p className="text-sm text-gray-300 text-center">
          We offer large quantity and quality of jobs Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Minima, natus.{" "}
        </p>
      </div>
      <div className="flex flex-col w-full md:w-[20rem] justify-center items-center gap-4">
        <GrUserExpert className="text-4xl" />
        <p className="text-xl md:text-2xl text-gray-600 font-bold text-center">
          Search millions of jobs
        </p>
        <p className="text-sm text-gray-300 text-center">
          We offer large quantity and quality of jobs Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Minima, natus.{" "}
        </p>
      </div>
    </div>
  );
};

export default Specialities;
