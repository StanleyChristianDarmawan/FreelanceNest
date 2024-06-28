import React from "react";
import img1 from "./assets/freelance-pic-1.png";
import img2 from "./assets/freelance-pic-2.png";
import { Link } from "react-router-dom";


function Body() {
  return (
    <div className="w-1/2 ml-40 mt-28 flex flex-col justify-center items-center overflow-hidden pt-24 gap-8 ">
      <div className="gap-14 flex flex-col">
        <h1 className="text-white text-9xl font-bold font-sans">FreelanceNest</h1>
        <p className="text-white text-5xl font-normal font-sans">Find Your Freelancing Opportunities Here!</p>
      </div>
      <div className= "self-start mt-24 ml-10">
        <Link to="/user" className="border-2 border-white text-white font-sans rounded-md hover:bg-white hover:text-black w-72 h-20 text-2xl font-medium p-4 flex items-center justify-center">
             Getting Started
        </Link>
      </div>
    </div>
  );
}

export default Body;
