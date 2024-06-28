import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar"
import Home from "./Home";
import Jobs from "./Jobs";
import Profile from "./Profile";
import Logout from "./Logout";

function CompanySide(){
    return(
    <div className="grid grid-cols-custom h-screen">
      <div className="">
        <Sidebar />
      </div>
      <div>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="profile" element={<Profile />} />
          <Route path="logout" element={<Logout />} />
        </Routes>
      </div>
    </div>
    );
};

export default CompanySide;

