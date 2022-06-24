import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, Avatar, Typography, Form, Button, Input } from "antd";
import { SendOutlined, SmileOutlined } from "@ant-design/icons";
import { Content } from "antd/lib/layout/layout";
import userImg2 from "../assets/images/user2.jpg";
import Bookmark from "../components/Bookmark";
import Contact from "../components/Contact/Contact";
import ChatUser from "../components/ChatUser/ChatUser";
import Navbar from "../components/Navbar/Navbar";
import Setting from "../components/Setting";
import UserProfile from "../components/UserProfile/UserProfile";
import "./dashboard.css";
import Message from "../components/message/Message";
const { Title } = Typography;
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
                <Route path="/" element={<ChatUser />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/bookmark" element={<Bookmark />} />
                <Route path="/setting" element={<Setting />} />
              </Routes>
            </div>
            <Content>
              <div className="chat-section">
                <div className="chat-header">
                  <div className="header-user">
                    <Avatar size={50} src={userImg2} />
                    <Title style={{ marginLeft: "10px" }} level={5}>
                      Mark
                    </Title>
                  </div>
                </div>
                <div className="message-section">
                  <Message />
                  <Message own={true} />
                </div>
                <div className="chat-footer">
                  <Form
                    layout="inline"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                    }}
                  >
                    <Form.Item style={{ width: "5%" }}>
                      <Button type="primary" ghost>
                        <SmileOutlined style={{ fontSize: "20px" }} />
                      </Button>
                    </Form.Item>
                    <Form.Item style={{ width: "80%" }}>
                      <Input placeholder="Type your message.." />
                    </Form.Item>
                    <Form.Item style={{ width: "5%" }}>
                      <Button type="primary">
                        <SendOutlined style={{ fontSize: "20px" }} />
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </Content>
          </div>
        </BrowserRouter>
      </Layout>
    </>
  );
}
