import React from "react";
import "./message.css";
export default function Message({ own }) {
  return (
    <>
      <div className={own ? "message own" : "message"}>
        <div className={own ? "message-text own" : "message-text"}>
          <p>Lorem Ipsum</p>
        </div>
      </div>
    </>
  );
}
