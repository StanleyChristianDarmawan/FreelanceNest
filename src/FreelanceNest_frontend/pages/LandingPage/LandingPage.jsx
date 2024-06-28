import React from "react";
import { Link } from "react-router-dom";


function Landing(){
    return(
        <div className="flex justify-center items-center h-screen">
            <Link to = "/user" className="w-64 bg-black text-white">Sign in</Link>
        </div>
    );
};


export default Landing;