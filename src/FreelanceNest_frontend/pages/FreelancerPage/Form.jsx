import React, { useState } from "react";
import { Link } from "react-router-dom"; // Impor Link dari react-router-dom

function FreelancerForm() {
  const [firstName, setFirstName] = useState("");
  const [firstNameTouched, setFirstNameTouched] = useState(false);

  const isFormValid = () => {
    return firstName.trim().length > 0;
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-gray-800 via-gray-900 to-black">
      <div className="flex flex-col justify-center items-center gap-16 rounded-md w-customWidth h-customHeight px-10">
        <h1 className="font-sans font-bold text-white text-5xl mb-6">Tell Us About Yourself!</h1>
        <div className="flex flex-col justify-evenly items-center gap-8 w-full">
          <div className="flex flex-row gap-6 w-full">
            <div className="w-1/2">
              <h1 className="font-sans font-medium text-white text-xl mb-2">
                FIRST NAME <span className="text-red-500">*</span>
              </h1>
              <input
                className="rounded-md p-3 h-12 w-full bg-black text-white"
                type="text"
                placeholder="e.g George"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                onBlur={() => setFirstNameTouched(true)}
              />
              {firstNameTouched && firstName.trim().length === 0 && (
                <p className="text-red-500 text-sm mt-1">First Name is required</p>
              )}
            </div>
            <div className="w-1/2">
              <h1 className="font-sans font-medium text-white text-xl mb-2">
                LAST NAME (OPTIONAL)
              </h1>
              <input
                className="rounded-md p-3 h-12 w-full bg-black text-white"
                type="text"
                placeholder="e.g Hansel"
              />
            </div>
          </div>
          <div className="w-full">
            <h1 className="font-sans font-medium text-white text-xl mb-2">
              BIO (OPTIONAL)
            </h1>
            <textarea
              className="rounded-md p-3 h-52 w-full bg-black text-white resize-none"
              placeholder="e.g 5 Years as a Front End Developer"
            />
          </div>
          <div className="w-full">
            <h1 className="font-sans font-medium text-white text-xl mb-2">
              SOCIAL ACCOUNTS (OPTIONAL)
            </h1>
            <input
              className="rounded-md p-3 h-12 w-full bg-black text-white"
              type="text"
              placeholder="e.g linkedin.com/in/username"
            />
          </div>
          <Link
            to="/freelancer-page" // Tentukan rute tujuan
            className={`border border-white flex justify-center items-center bg-black h-16 w-1/4 self-end mt-8 text-white text-lg rounded-md ${
              isFormValid()
                ? "hover:bg-white hover:text-black"
                : "opacity-50 cursor-not-allowed"
            }`}
            onClick={(e) => (!isFormValid() ? e.preventDefault() : null)} // Mencegah navigasi jika form tidak valid
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FreelancerForm;
