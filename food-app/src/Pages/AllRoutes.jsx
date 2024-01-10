import React from "react";
import { Routes, Route } from "react-router-dom";
 
 
import EmailPage from "./EmailPage";
import OtpComponent from "./OtpComponent";
import HomePage from "./HomePage";
import SinglePage from "./SinglePage";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<EmailPage />} />
      <Route path="/otp" element={<OtpComponent />} />
      <Route path="/home" element={<HomePage/>} />
      <Route path='/single' element={<SinglePage />} />
    </Routes>
  );
}

export default AllRoutes;