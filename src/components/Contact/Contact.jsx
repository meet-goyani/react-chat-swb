import React, { useState } from "react";
import "./contact.css";
import userImg2 from "../../assets/images/user2.jpg";

import { Typography, Input, Avatar, Divider, Drawer, Image } from "antd";
import {
  SearchOutlined,
  MessageOutlined,
  HomeOutlined,
  MobileOutlined,
  MailOutlined,
} from "@ant-design/icons";
const { Title, Text } = Typography;
export default function Chat() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <div className="contact">
        <div className="hedding">
          <Title level={3}>Contacts</Title>
        </div>
        <div className="search">
          <Input
            style={{ borderRadius: "12px" }}
            size="large"
            placeholder="Search"
            prefix={<SearchOutlined />}
            className="user-search"
          />
        </div>
        <div className="contact-user">
          <a onClick={showDrawer} className="user-view">
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar size={45} src={userImg2} />
              <Title style={{ marginLeft: "10px" }} level={5}>
                Mark
              </Title>
            </div>
            <MessageOutlined style={{ fontSize: "18px" }} />
          </a>
          <Divider plain />
          <Drawer
            title="Contact Profile"
            placement="right"
            onClose={onClose}
            visible={visible}
          >
            <div className="profile">
              <div className="user-img">
                <Image
                  style={{
                    borderRadius: "50%",
                    WebkitBoxShadow: "0px 0px 34px 12px rgba(86,87,87,0.25)",
                    MozBoxShadow: "0px 0px 34px 12px  rgba(86,87,87,0.25)",
                    boxShadow: " 0px 0px 34px 12px  rgba(86,87,87,0.25)",
                    border: "4px solid rgba(77, 128, 209)",
                  }}
                  src={userImg2}
                  width={160}
                  height={160}
                />
                <Title style={{ marginTop: "10px" }} level={4}>
                  Mark
                </Title>
                <MessageOutlined style={{ fontSize: "25px" }} />
              </div>
              <div className="user-about">
                <Title level={5}>About</Title>
                <Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Text>

                <div className="user-info">
                  <div className="location">
                    <HomeOutlined
                      style={{ fontSize: "18px", marginRight: "10px" }}
                    />
                    <Title level={5}>California, US</Title>
                  </div>
                  <div className="mobile">
                    <MobileOutlined
                      style={{ fontSize: "18px", marginRight: "10px" }}
                    />
                    <Title level={5}>918052470</Title>
                  </div>
                  <div className="email">
                    <MailOutlined
                      style={{ fontSize: "18px", marginRight: "10px" }}
                    />
                    <Title level={5}>example@gamil.com</Title>
                  </div>
                </div>
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    </>
  );
}
