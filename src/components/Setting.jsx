import React, { useState } from "react";
import "./UserProfile/userprofile.css";
import userImg from "./../assets/images/user1.jpg";
import { Typography, Button, Image, Tooltip, Modal, Input, Form } from "antd";
import {
  EditOutlined,
  HomeOutlined,
  MailOutlined,
  MobileOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
export default function Setting() {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setVisible(true);
  };
  const handleCancel = () => {
    // console.log("Clicked cancel button");
    setVisible(false);
  };
  const handleUpdate = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  return (
    <>
      <div className="setting-profile">
        <div className="hedding">
          <Title level={3}>Settings</Title>
          <Tooltip placement="right" title="Edit Profile">
            <Button
              onClick={showModal}
              size="middle"
              type="primary"
              ghost="false"
            >
              <EditOutlined />
            </Button>
          </Tooltip>
        </div>
        <Modal
          title="Edit Profile"
          visible={visible}
          onOk={handleUpdate}
          onCancel={handleCancel}
          footer={[
            <Button onClick={handleCancel}>Cancle</Button>,
            <Button
              key="submit"
              type="primary"
              loading={confirmLoading}
              onClick={handleUpdate}
            >
              Update
            </Button>,
          ]}
        >
          <Form layout="vertical">
            <Form.Item label="Name:">
              <Input placeholder="Enter Name" />
            </Form.Item>
            <Form.Item label="About Me">
              <Input placeholder="Write Something" />
            </Form.Item>
            <Form.Item label="City">
              <Input placeholder="City" />
            </Form.Item>
            <Form.Item label="Mobile No.:">
              <Input placeholder="(+91) 9180527560" />
            </Form.Item>
            <Form.Item label="Email">
              <Input placeholder="example@gmail.com" />
            </Form.Item>
          </Form>
        </Modal>
        <div className="profile">
          <div className="user-img">
            <Image
              alt="avatar"
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
          <div className="user-about">
            <Title level={5}>About Me</Title>
            <Text>
              Lorem Ipsum is simply dummy text of the pri nting and typesetting
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
