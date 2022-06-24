import React from "react";
import { Badge, Avatar, Typography, Divider } from "antd";
const { Title } = Typography;
export default function User({ userImg, userName }) {
  return (
    <>
      <div className="user">
        <Badge dot>
          <Avatar size={45} src={userImg} />
        </Badge>
        <Title style={{ marginLeft: "10px" }} level={5}>
          {userName}
        </Title>
      </div>
      <Divider plain />
    </>
  );
}
