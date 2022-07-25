import React, { useEffect, useState } from "react";
import "../../components/UserProfile/userprofile.css";
import userImg from "../../assets/images/user1.jpg";
import { Typography, Image, Skeleton } from "antd";
import { HomeOutlined, MailOutlined, MobileOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;
const UserProfile=()=> {
  // let storageRef = storage.ref();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

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
                objectFit: "cover",
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

          <Skeleton loading={loading} active>
            <div className="user-about">
              <Title level={5}>&nbsp; About Me</Title>
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
                  <Title level={5}>example@gmail.com</Title>
                </div>
              </div>
            </div>
          </Skeleton>
        </div>
      </div>
    </>
  );
}
export default UserProfile;