import React from "react";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/Signup/SignUp";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
     
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp/>}/>
        </Routes>
    </>
  );
}

export default App;
