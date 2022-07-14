import React from "react";
import userImg from "../../assets/images/user1.jpg";
import logo from "../../assets/images/chatcoin-chat-logo.svg";
import { Avatar, Popover, Typography, Tooltip, Button } from "antd";

import {
  UserOutlined,
  WechatOutlined,
  ContactsOutlined,
  SettingOutlined,
  BookOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import NavButton from "./NavButton";
import { Link } from "react-router-dom";


const { Text } = Typography;

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <Avatar size={45} src={logo} />
        <div className="nav-btn">
          <Link to="profile" state="profile">
            <Tooltip placement="right" title="">
              <Button
                size="large"
                className={"btn"}
                icon={
                  <UserOutlined
                    style={{ fontSize: "20px", color: "rgb(225, 225, 225)" }}
                  />
                }
                type="text"
              />
            </Tooltip>
          </Link>
          <Link to="chat" state="chat">
            <Tooltip placement="right" title="">
              <Button
                size="large"
                className={"btn"}
                icon={
                  <WechatOutlined
                    style={{ fontSize: "20px", color: "rgb(225, 225, 225)" }}
                  />
                }
                type="text"
              />
            </Tooltip>
          </Link>
          <Link to="contact" state="contact">
            <Tooltip placement="right" title="">
              <Button
                size="large"
                className={"btn"}
                icon={
                  <ContactsOutlined
                    style={{ fontSize: "20px", color: "rgb(225, 225, 225)" }}
                  />
                }
                type="text"
              />
            </Tooltip>
          </Link>
          <Link to="setting" state="setting">
            <Tooltip placement="right" title="">
              <Button
                size="large"
                className={"btn"}
                icon={
                  <SettingOutlined
                    style={{ fontSize: "20px", color: "rgb(225, 225, 225)" }}
                  />
                }
                type="text"
              />
            </Tooltip>
          </Link>
          <Link to="bookmark" state="bookmark">
            <Tooltip placement="right" title="">
              <Button
                size="large"
                className={"btn"}
                icon={
                  <BookOutlined
                    style={{ fontSize: "20px", color: "rgb(225, 225, 225)" }}
                  />
                }
                type="text"
              />
            </Tooltip>
          </Link>
        </div>
        <Popover
          trigger="click"
          placement="rightBottom"
          content={
            <div style={{ display: "flex", alignItems: "center" }}>
              <LogoutOutlined style={{ fontSize: "15px" }} />
              <Text style={{ fontSize: "15px", marginLeft: "8px" }}>
                Logout
              </Text>
            </div>
          }
        >
          <Avatar
            style={{ border: "2px solid #377FFC" }}
            size={45}
            src={userImg}
          />
        </Popover>
      </div>
    </>
  );
}
