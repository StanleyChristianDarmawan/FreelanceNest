import React from "react";
import logo from "./assets/logo.png";

function Header() {
    return (
        <div className="w-screen h-24 border-b border-b-white border-opacity-75 flex items-center justify-between px-16 fixed top-0 left-0 z-30">
            <img className="w-14" src={logo} alt="FreelanceNest Logo" />
            <button className="border-2 border-white text-white font-sans p-1 rounded-md hover:bg-white hover:text-black w-24 h-10">Sign In</button>
        </div>
    );
};

export default Header;
