import React from "react";
import { Link } from "react-router-dom";

function User(){
    return(
        <div className="flex justify-center items-center gap-10 h-screen">
            <Link to = "/freelancer" className="bg-red-50">Freelancer</Link>
            <Link to = "/company" className="bg-blue-50">Company</Link>
        </div>
    );
};

export default User;