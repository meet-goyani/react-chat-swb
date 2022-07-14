import React from "react";
import { Button, Tooltip } from "antd";
import { Link } from "react-router-dom";
export default function NavButton({ to, title, icon }) {
  return (
    <>
      <Link to={to}>
        <Tooltip placement="right" title={title}>
          <Button size="large" className={"btn"} icon={icon} type="text" />
        </Tooltip>
      </Link>
    </>
  );
}
