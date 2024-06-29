import React from "react";
import { ratings } from "./Rating";
import StarIcon from "../assets/icon/star.svg";

const Statistics = () => {
  return (
    <div className="w-full h-full p-2">
      <h2 className="text-3xl font-bold mb-4 text-white">Project Ratings</h2>
      {ratings.map((rating, index) => (
        <div key={index} className="relative mb-4 p-4 border border-white bg-black rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <img
              src={rating.companyLogo}
              alt={rating.companyName}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold text-white">{rating.companyName}</h3>
              <p className="text-gray-400">{rating.projectTitle}</p>
            </div>
          </div>
          <p className="mb-2 text-gray-300">{rating.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">{rating.submitDate}</span>
          </div>
          <div className="absolute top-4 right-4 flex items-center">
            <span className="border border-white text-white px-2 py-1 rounded flex items-center bg-black">
              <img src={StarIcon} alt="Star Icon" className="w-4 h-4 mr-1" />
              {rating.rating}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
