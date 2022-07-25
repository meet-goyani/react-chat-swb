import React from "react";
import "./chat.css";
import userImg2 from "../../assets/images/user2.jpg";
import userImg3 from "../../assets/images/user3.jpg";
import userImg4 from "../../assets/images/user4.jpg";
import userImg5 from "../../assets/images/user5.jpg";
import { Typography, Button, Input, Tooltip } from "antd";
import { PlusCircleOutlined, SearchOutlined } from "@ant-design/icons";
import User from "./User";

const { Title } = Typography;
const ChatUser=()=> {
  return (
    <>
    
      <div className="chat">
        <div className="hedding">
          <Title level={3}>Chat</Title>
          <Tooltip placement="right" title="Add contact">
            <Button size="middle" type="primary" ghost="false">
              <PlusCircleOutlined />
            </Button>
          </Tooltip>
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
        <div className="chat-user">
          <User userImg={userImg2} userName="Max" />
          <User userImg={userImg3} userName="Berry" />
          <User userImg={userImg4} userName="Smith" />
          <User userImg={userImg5} userName="Wilson" />
          <User userImg={userImg2} userName="Max" />
          <User userImg={userImg3} userName="Berry" />
          <User userImg={userImg4} userName="Smith" />
          <User userImg={userImg5} userName="Wilson" />
          <User userImg={userImg2} userName="Max" />
          <User userImg={userImg3} userName="Berry" />
          <User userImg={userImg4} userName="Smith" />
          <User userImg={userImg5} userName="Wilson" />
          <User userImg={userImg2} userName="Max" />
          <User userImg={userImg3} userName="Berry" />
          <User userImg={userImg4} userName="Smith" />
          <User userImg={userImg5} userName="Wilson" />
        </div>
      </div>
    </>
  );
}
export default ChatUser;