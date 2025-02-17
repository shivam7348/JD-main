import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const MiddleHeader = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-100 shadow-md z-20 ">
      {/* Left Side - Logo & Name */}
      <div className="flex flex-col md:flex-row items-center mx-auto text-center md:text-left">
        <img
          src="https://jdglobalschool.in/images/logo.jpeg"
          alt="Logo"
          className="h-16 md:h-20 w-auto"
        />
        <span className="text-2xl md:text-4xl font-semibold mt-2 md:mt-0 md:ml-5 text-red-800">
          J.D GLOBAL SCHOOL
        </span>
      </div>
      {/* Right Side - Mobile Number & Admission Button */}
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mt-3 md:mt-0">
        <span className="text-base md:text-lg font-semibold text-gray-700">
          📞 8882229658
        </span>
        <Link to="/admissionopen">
          <button className="px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-blue-800">
            ADMISSION OPEN
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MiddleHeader;
