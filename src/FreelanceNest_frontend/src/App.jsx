import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FreelancerPage from "../pages/FreelancerPage/FreelancerPage";
import CompanyPage from "../pages/CompanyPage/CompanyPage"
import FreelancerForm from "../pages/FreelancerPage/form";
import CompanyForm from "../pages/CompanyPage/form";
import Landing from "../pages/LandingPage/LandingPage"
import User from "./User"
import "./index.scss"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/user" element={<User />} />
          <Route path="/freelancer-regist" element={<FreelancerForm />} />
          <Route path="/company-regist" element={<CompanyForm />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
