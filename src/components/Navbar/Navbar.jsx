import React from "react";
import userImg from "../../assets/images/user1.jpg";
import logo from "../../assets/images/chatcoin-chat-logo.svg";
import { Avatar, Tooltip } from "antd";

import {
  UserOutlined,
  WechatOutlined,
  ContactsOutlined,
  SettingOutlined,
  BookOutlined,
} from "@ant-design/icons";
import NavButton from "./NavButton";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <Avatar size={45} src={logo} />
        <div className="nav-btn">
          <NavButton
            icon={
              <UserOutlined
                style={{ fontSize: "20px", color: "rgb(225, 225, 225)" }}
              />
            }
            to="/profile"
            title="Profile"
          />
          <NavButton
            icon={
              <WechatOutlined
                style={{ fontSize: "20px", color: "rgb(225, 225, 225)" }}
              />
            }
            to="/"
            title="Chat"
          />
          <NavButton
            icon={
              <ContactsOutlined
                style={{ fontSize: "20px", color: "rgb(225, 225, 225)" }}
              />
            }
            to="/contact"
            title="Contact"
          />
          <NavButton
            icon={
              <BookOutlined
                style={{ fontSize: "20px", color: "rgb(225, 225, 225)" }}
              />
            }
            to="/bookmark"
            title="Bookmark"
          />
          <NavButton
            icon={
              <SettingOutlined
                style={{ fontSize: "20px", color: "rgb(225, 225, 225)" }}
              />
            }
            to="/setting"
            title="Setting"
          />
        </div>
        <Tooltip placement="right" title="Profile">
          <Avatar size={45} src={userImg} />
        </Tooltip>
      </div>
    </>
  );
}
