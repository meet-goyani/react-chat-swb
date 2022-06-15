import React from "react";
import "../../components/UserProfile/userprofile.css";
import userImg from "../../assets/images/user1.jpg";
import { Typography, Image } from "antd";
import { HomeOutlined, MailOutlined, MobileOutlined } from "@ant-design/icons";
const { Title, Text } = Typography;
export default function UserProfile() {
  return (
    <>
      <div className="user-profile">
        <div className="hedding">
          <Title level={3}>Profile</Title>
        </div>
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
              src={userImg}
              width={160}
              height={160}
            />
            <Title style={{ marginTop: "10px" }} level={4}>
              Diana Myhre
            </Title>
          </div>
          <div className="user-about">
            <Title level={5}>About Me</Title>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
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
      </div>
    </>
  );
}
