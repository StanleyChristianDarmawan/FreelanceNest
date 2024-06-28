import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

function Landing() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-r from-gray-800 via-gray-900 to-black">
            <Header />
            <Body />
            <Footer />
        </div>
    );
}

export default Landing;
