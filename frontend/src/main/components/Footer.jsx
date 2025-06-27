import React from "react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div>
      <div className="mx-2 md:mx-36 flex flex-col md:flex-row justify-between gap-8 md:gap-0">
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
          <img src={logo} className="my-2 h-10 " alt="" />
          <p className="my-2 text-[12px] text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="w-full md:w-1/3 flex items-center flex-col">
          <p className="text-[1.25rem] font-bold text-gray-800 my-1">Company</p>
          <p className="text-[12px] text-gray-400 my-1">
            <p>Home</p>
            <p>About us</p>
            <p>Delivery</p>
            <p>Privacy rules</p>
          </p>
        </div>
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <p className="text-[1.25rem] font-bold text-gray-800 my-1">
            Get in touch
          </p>
          <p className="text-[12px] text-gray-400 my-1">
            <p>+123-456-789</p>
            <p>someone@gmail.com</p>
            <p>Instagram</p>
            <p>Twitter</p>
          </p>
        </div>
      </div>
      <hr className="my-3 mx-2 md:mx-36 text-gray-400" />
      <p className="text-center text-gray-600">
        Copyright 2025@SourPunk All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
