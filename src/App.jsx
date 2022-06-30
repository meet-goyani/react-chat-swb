import React from "react";
import Dashboard from "./pages/Dashboard";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/Signup/SignUp";
import { Routes, Route } from "react-router-dom";
import ForgotPassword from "./components/Password/ForgotPassword";
import ResetPassword from "./components/Password/ResetPassword";
import Otpverification from "./components/otp/Otpverification";
import Bookmark from "./components/Bookmark";
import Contact from "./components/Contact/Contact";
import ChatUser from "./components/ChatUser/ChatUser";
import Setting from "./components/Setting";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
  return (
    <>
      {/* <Dashboard /> */}
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/otpverification" element={<Otpverification />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}
export default App;
