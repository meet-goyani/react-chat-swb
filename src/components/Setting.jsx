import React, { useState,useEffect } from "react";
import "./UserProfile/userprofile.css";
import userImg from "./../assets/images/user1.jpg";
import { Typography, Button, Image, Tooltip, Modal, Input, Form } from "antd";
import {
  EditOutlined,
  HomeOutlined,
  MailTwoTone ,
  MobileTwoTone 
} from "@ant-design/icons";
import { storage } from "../firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  } from "firebase/storage";
import "../../src/components/setting.css";


const { Title, Text } = Typography;

const Setting = () => {
   const [visibleimg, setVisibleImg] = useState(false);
  const [image, setImage] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
 const imagesListRef = ref(storage, "images/");
  
  const uploadImg = () => {
    if (image == null) return;
    const imageRef = ref(storage, `images/${image.name }`);
    uploadBytes(imageRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls(() => [url]);
      });
    });
  }
  const userdetails = localStorage.getItem("userdetails");
  const jsondetails = JSON.parse(userdetails);
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls(() => [url]);
          console.log(imagesListRef, "img")
        });
      });
    });
  }, []);

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
          <Input
            type="file"
            onChange={(event) => {
              setImage(event.target.files[0]);
            }}
          />
          <Button onClick={uploadImg}>Upload image</Button>

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
            {/* <Image
              alt="avatar"
              src={userImg}
              width={160}
              height={160}
              /> */}

            {imageUrls.map((url) => {
              return (
                <Image
                  preview={{
                    visibleimg: false,
                  }}
                  onClick={() => setVisibleImg(true)}
                  src={url}
                  style={{ borderRadius: "60%", width: "70%", height: "30%" ,marginLeft:"35px"}}
                />
              );
            })}
            <Title style={{ marginTop: "10px" }} level={4}>
              {jsondetails.Name.stringValue}
            </Title>
          </div>
          <div className="user-about">
            <Title level={5}>About Me</Title>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
            <div className="user-info">
              <div className="mobile">
                <MobileTwoTone
                  style={{ fontSize: "18px", marginRight: "10px" }}
                />
                <Title level={5}>{jsondetails.PhoneNumber.integerValue}</Title>
              </div>
              <div className="email">
                <MailTwoTone 
                style={{ fontSize: "18px", marginRight: "10px" }}/>
                <Title level={5}>{jsondetails.Email.stringValue}</Title>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Setting;