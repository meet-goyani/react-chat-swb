import React, { useState, useEffect } from "react";
import InputEmoji from "react-input-emoji";
import { Content } from "antd/lib/layout/layout";
import userImg1 from "../assets/images/user1.jpg";
import Navbar from "../components/Navbar/Navbar";
import "./dashboard.css";
import Message from "../components/message/Message";
import Bookmark from "../components/Bookmark";
import Contact from "../components/Contact/Contact";
import UserProfile from "../components/UserProfile/UserProfile";
import ChatUser from "../components/ChatUser/ChatUser";
import Setting from "../components/Setting";
import { useLocation } from "react-router-dom";
import { storage } from "../firebase";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { Layout, Typography, Form, Button, Dropdown, Menu } from "antd";
import { MoreOutlined, DeleteOutlined, UserOutlined } from "@ant-design/icons";
import { Image } from "antd";
import { addDoc, collection } from "firebase/firestore";
import { ad } from "../firebase";

const { Title } = Typography;
const Dashboard = () => {
  const [visibleimg, setVisibleImg] = useState(false);
  const [imageUrls, setImageUrls] = useState([]);
  const docRef = collection(ad, "message");
  const userdetails = localStorage.getItem("userdetails");
  const jsondetails = JSON.parse(userdetails);
  const [text, setText] = useState("");

  const imagesListRef = ref(storage, "images/");
  const handleOnEnter = async (text) => {
    await addDoc(docRef, {
      value: text,
    });
    console.log("enter", text);
  };
  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls(() => [url]);
          console.log(imagesListRef, "img");
        });
      });
    });
  }, []);

  const location = useLocation();

  return (
    <>
      <Layout>
        <div className="main-body">
          <Navbar />
          {/* <div className="sidebar"> */}
          {location.state === "profile" ? <UserProfile /> : null}
          {location.state === "chat" ? <ChatUser /> : null}
          {location.state === "contact" ? <Contact /> : null}
          {location.state === "setting" ? <Setting /> : null}
          {location.state === "bookmark" ? <Bookmark /> : null}
          {/* </div> */}
          <Content>
            <div className="chat-section">
              <div className="chat-header">
                <div className="header-left">
                  {/* <Avatar size={50} src={userImg1} /> */}
                  {imageUrls.map((url) => {
                    return (
                      <Image
                        preview={{
                          visibleimg: false,
                        }}
                        onClick={() => setVisibleImg(true)}
                        src={url}
                        style={{
                          width: "50px",
                          borderRadius: "58%",
                          height: "45px",
                        }}
                      />
                    );
                  })}
                  <Title style={{ marginLeft: "10px" }} level={5}>
                    {jsondetails.Name.stringValue}
                  </Title>
                </div>
                <div className="header-right">
                  <Dropdown
                    overlay={
                      <Menu
                        items={[
                          {
                            label: (
                              <>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    fontSize: "14px",
                                  }}
                                >
                                  <UserOutlined style={{ fontSize: "14px" }} />
                                  <a target="_blank">Profile</a>
                                </div>
                              </>
                            ),
                          },
                          {
                            label: (
                              <>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    fontSize: "14px",
                                  }}
                                >
                                  <DeleteOutlined
                                    style={{ fontSize: "14px" }}
                                  />
                                  <a target="_blank">Delete</a>
                                </div>
                              </>
                            ),
                          },
                        ]}
                      />
                    }
                    placement="bottom"
                  >
                    <Button type="primary" ghost>
                      <MoreOutlined style={{ fontSize: "15px" }} />
                    </Button>
                  </Dropdown>
                </div>
              </div>
              <div className="message-section">
                <Message />
                <Message own={true} />
                <Message />
                <Message own={true} />
                <Message />
                <Message own={true} />
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
                    // height: "150PX",
                  }}
                >
                  <Form.Item style={{ width: "95%", marginRight: "5%" }}>
                    {/* <Button type="primary" ghost>
                      <SmileOutlined style={{ fontSize: "20px" }} />
                    </Button> */}
                  </Form.Item>
                </Form>
                <InputEmoji
                  value={text}
                  className="emoji_main"
                  onChange={setText}
                  onEnter={handleOnEnter}
                  cleanOnEnter
                  placeholder="Type a message"
                />
              </div>
            </div>
          </Content>
        </div>
      </Layout>
    </>
  );
};
export default Dashboard;
