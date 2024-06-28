import React from "react";
import { Link } from "react-router-dom";

function User(){
    return(
        <div className="flex justify-center items-center h-screen w-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black">
            <div className="flex flex-col justify-center items-center gap-8">
                <div className="flex flex-col items-center gap-4">
                    <h1 className="text-white font-sans text-6xl font-bold">Welcome to FreelanceNest</h1>
                    <h2 className="text-white font-sans text-2xl">Who are you?</h2>
                </div>
                <div className="flex gap-10">
                    <Link to = "/freelancer" className="border border-customDarkerWhite border-opacity-50 hover:border-opacity-100 rounded-lg w-96 h-72 flex flex-col items-center justify-center">
                        <h3 className="font-sans text-white text-2xl font-medium">I'm a Freelancer</h3>
                        <p className="font-sans text-white text-center text-lg font-light mx-4">I want to work for someone else's project and get paid.</p>
                    </Link>
                    <Link to = "/company" className="border border-customDarkerWhite border-opacity-50 hover:border-opacity-100 rounded-lg w-96 h-72 flex flex-col items-center justify-center">
                        <h3 className="font-sans text-white text-2xl font-medium">I'm a Company</h3>
                        <p className="font-sans text-white text-center text-lg font-light mx-4">I want to hire someone to do my project and reward them.</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default User;