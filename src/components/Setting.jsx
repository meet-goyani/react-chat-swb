import React, { useState, useEffect } from "react";
import "./UserProfile/userprofile.css";
import { Typography, Button, Image, Tooltip, Modal, Input, Form } from "antd";
import {
  EditOutlined,
  HomeOutlined,
  MailTwoTone,
  MobileTwoTone,
} from "@ant-design/icons";
import { storage } from "../firebase";
import { addDoc, collection,getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import "../../src/components/setting.css";
import { ad } from "../firebase";


const { Title, Text } = Typography;

const Setting = () => {
  const docRef = collection(ad, "user");
  const [allDocs, setallDocs] = useState(null);
  const [visibleimg, setVisibleImg] = useState(false);
  const [image, setImage] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
   const [aboutme, setAboutMe] = useState("");
  const showdata = async () => {
    const data = await getDocs(docRef);
    if (data.exists()) {
      setallDocs(data.data());
      console.log("Document data:", data.data());
    } else {
      console.log("No such document!");
    }
  };
   const handle = () => {
     localStorage.setItem("aboutme", aboutme);
   };
  const imagesListRef = ref(storage, "images/");
  

  const uploadImg = () => {
    if (image == null) return;
    const imageRef = ref(storage, `images/${image.name}`);
    uploadBytes(imageRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls(() => [url]);
      });
    });
  };
  const userdetails = localStorage.getItem("userdetails");
  const jsondetails = JSON.parse(userdetails);
  async function onSubmitHandler(values) {
     await addDoc(docRef, {
      Name: values.Name,
      Email: values.Email,
      phoneNumber: values.PhoneNumber,
      AboutMe: values.AboutMe,
    });
    console.log("hiii", values);
  } 
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  useEffect(() => {
    showdata()
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls(() => [url]);
          console.log(imagesListRef, "img");
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
          footer={[]}
        >
          {/* <Input
            type="file"
            onChange={(event) => {
              setImage(event.target.files[0]);
            }}
            />
          <Button onClick={uploadImg}>Upload image</Button> */}

          <Form
            layout="vertical"
            onFinish={onSubmitHandler}
            autoComplete="off"
            initialValues={{ ...allDocs }}
          >
            {console.log(allDocs)}
            <Form.Item
              label="Name"
              name="Name"
              initialValue={jsondetails.Name.stringValue}
              rules={[
                {
                  required: true,
                  message: "Please input your Name!",
                },
              ]}
            >
              <Input placeholder="Enter Your Name" />
            </Form.Item>
           

            <Form.Item
              label="About Me"
              name="AboutMe"
              value={aboutme}
              onChange={(e) => setAboutMe(e.target.value)}
              initialValue={localStorage.getItem("aboutme")}
              rules={[
                {
                  required: true,
                  message: "Please Tell me About You!",
                },
              ]}
            >
              <Input placeholder="Write Something" />
            </Form.Item>
            <Form.Item
              label="Phone Number"
              name="PhoneNumber"
              initialValue={jsondetails.PhoneNumber.integerValue}
              rules={[
                {
                  required: true,
                  message: "Please input your Phone Number!",
                },
              ]}
            >
              <Input placeholder="Enter Your Phone Number" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="Email"
              initialValue={jsondetails.Email.stringValue}
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input placeholder="Enter Your Email" />
            </Form.Item>
            {/* <Button htmlType="submit" type="primary" loading={confirmLoading}>
              Update
            </Button> */}
              <button  type="primary" onClick={handle}>Submit</button>
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
                  className="img"
                  style={{
                    borderRadius: "50%",
                    width: "68%",
                    height: "30%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    display: "block",
                  }}
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
              <h5>{localStorage.getItem("aboutme")}</h5>
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
                  style={{ fontSize: "18px", marginRight: "10px" }}
                />
                <Title level={5}>{jsondetails.Email.stringValue}</Title>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Setting;
