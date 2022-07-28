import React, { useState } from "react";
import "./contact.css";
import userImg1 from "../../assets/images/user1.jpg";

import {
  Typography,
  Input,
  Avatar,
  Divider,
  Drawer,
  Image,
  Popconfirm,
  message,
} from "antd";
import {
  SearchOutlined,
  MessageOutlined,
  HomeOutlined,
  MobileOutlined,
  MailOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
const { Title, Text } = Typography;

function Chat() {
  const userdetails = localStorage.getItem("userdetails");
  const jsondetails = JSON.parse(userdetails)
  const [visible, setVisible] = useState(false);
  

  const confirm = () => {
    message.success("Deleted Successfully", 2);
  };
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
              <Avatar size={45} src={userImg1} />
              <Title style={{ marginLeft: "10px" }} level={5}>
                {jsondetails.Name.stringValue}
              </Title>
              <br />
            </div>
            <MessageOutlined style={{ fontSize: "18px" }} />
          </a>
          <Divider plain />

          <div className="contact-user">
            <a onClick={showDrawer} className="user-view">
              <div style={{ display: "flex", alignItems: "center" }}>
                <Avatar size={45} src={userImg1} />
                <Title style={{ marginLeft: "10px" }} level={5}>
                  {jsondetails.Name.stringValue}
                </Title>
                <br />
              </div>
              <MessageOutlined style={{ fontSize: "18px" }} />
            </a>
            <Divider plain />
          </div>
        </div>
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
                  objectFit: "cover",
                  WebkitBoxShadow: "0px 0px 34px 12px rgba(86,87,87,0.25)",
                  MozBoxShadow: "0px 0px 34px 12px  rgba(86,87,87,0.25)",
                  boxShadow: " 0px 0px 34px 12px  rgba(86,87,87,0.25)",
                  border: "4px solid rgba(77, 128, 209)",
                }}
                src={userImg1}
                width={160}
                height={160}
              />
              <Title style={{ marginTop: "10px" }} level={4}>
                {jsondetails.Name.stringValue}
              </Title>
              <div className="action">
                <MessageOutlined
                  style={{ fontSize: "25px", color: "#3061E5" }}
                />
                <Popconfirm
                  placement="bottom"
                  title="Are you sure to delete this contact ?"
                  onConfirm={confirm}
                  okText="Yes"
                  cancelText="No"
                >
                  <DeleteOutlined
                    style={{
                      fontSize: "25px",
                      marginLeft: "8px",
                      color: "#E82E2E",
                    }}
                  />
                </Popconfirm>
              </div>
            </div>
            <div className="user-about">
              <Title level={5}>About</Title>
              <Text>
                <h5>{localStorage.getItem("aboutme")}</h5>
              </Text>

              <div className="user-info">
                <div className="mobile">
                  <MobileOutlined
                    style={{ fontSize: "18px", marginRight: "10px" }}
                  />
                  <Title level={5}>
                    {jsondetails.PhoneNumber.integerValue}
                  </Title>
                </div>
                <div className="email">
                  <MailOutlined
                    style={{ fontSize: "18px", marginRight: "10px" }}
                  />
                  <Title level={5}>{jsondetails.Email.stringValue}</Title>
                </div>
              </div>
            </div>
          </div>
        </Drawer>
      </div>
    </>
  );
}
export default Chat;