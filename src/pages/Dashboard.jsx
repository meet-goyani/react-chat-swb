import { Layout } from "antd";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bookmark from "../components/Bookmark";
import Chat from "../components/Chat/Chat";
import Contact from "../components/Contact/Contact";
import Navbar from "../components/Navbar/Navbar";
import Setting from "../components/Setting";
import UserProfile from "../components/UserProfile/UserProfile";
import "./dashboard.css";

export default function Dashboard() {
  return (
    <>
      <Layout>
        <BrowserRouter>
          <div className="main-body">
            <Navbar />
            <div className="sidebar">
              <Routes>
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/" element={<Chat />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/bookmark" element={<Bookmark />} />
                <Route path="/setting" element={<Setting />} />
              </Routes>
            </div>
            <div className="content"></div>
          </div>
        </BrowserRouter>
      </Layout>
    </>
  );
}
