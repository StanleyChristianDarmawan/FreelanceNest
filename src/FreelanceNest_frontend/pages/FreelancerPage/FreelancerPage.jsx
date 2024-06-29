import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "../FreelancerPage/Components/Sidebar";
import Home from "../FreelancerPage/Components/Home";
import Jobs from "../FreelancerPage/Components/Jobs";
import Profile from "../FreelancerPage/Components/Profile";
import Logout from "../FreelancerPage/Components/Logout";
import DetailJobs from "./Components/DetailJobs";
import Project from "./Components/Project";

function FreelancerPage(){
    return(
    <div className="grid grid-cols-custom h-screen">
      <div>
        <Sidebar />
      </div>
      <div className="m-10">
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="project" element={<Project />} />
          <Route path="profile" element={<Profile />} />
          <Route path="logout" element={<Logout />} />
          <Route path="/detailjob/:id" element={<DetailJobs/>} />
        </Routes>
      </div>
    </div>
    );
};

export default FreelancerPage;