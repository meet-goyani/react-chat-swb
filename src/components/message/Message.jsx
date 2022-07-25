import React from "react";
import "./message.css";
import { ad } from "../../firebase";
function Message({ own }) {
  return (
    <>
      <div className={own ? "message own" : "message"}>
        <div className={own ? "message-text own" : "message-text"}>
          <p>Lorem Ipsum
            Lorem Ipsum
          </p>
        </div>
      </div>
    </>
  );
}
export default Message;