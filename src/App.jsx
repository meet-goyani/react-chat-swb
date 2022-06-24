import React from "react";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/Signup/SignUp";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ForgotPassword from "./components/Password/ForgotPassword";
import ResetPassword from "./components/Password/ResetPassword"

function App() {
  return (
    <>
     
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<ResetPassword/>}/>
        </Routes>
    </>
  );
}

export default App;
