import React,{useState} from "react";
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

const App = () => {
   const [id, setid] = useState({});
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp props={id} />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/otpverification" element={<Otpverification />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="profile" element={<UserProfile />} />
          <Route path="chat" element={<ChatUser />} />
          <Route path="bookmark" element={<Bookmark />} />
          <Route path="contact" element={<Contact />} />
          <Route path="setting" element={<Setting props={id} />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
