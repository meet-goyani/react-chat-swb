import React,{useState} from "react";
import { Card, Row, Col, Form, Input, Button, Typography } from "antd";
import { Link } from "react-router-dom";
import image from "../../assets/images/ResetPassword.jpg";
import OtpInput from "react-otp-input";
import { MailTwoTone } from "@ant-design/icons";

const Otpverification = () => {
  const [code, setCode] = useState("");

  const handleChange = (code) => setCode(code);
  const { Title, Text } = Typography;
  return (
    <div>
      <Card
        className="chat_form_card"
        bordered={true}
        style={{
          height: 620,
          background: "white",
          display: "flex",
          alignItems: "center",
          margin: "60px auto",
          width: "80%",
          marginTop: "50px",
        }}
      >
        <div>
          <Row style={{ alignItems: "center" }}>
            <Col
              span={12}
              style={{
                  // boxShadow: " 0 1px 6px 0 rgba(32, 33, 36, 28)",
                  // borderRadius: "10px",
                width: "400px",
                height: "550px",
              }}
            >
              <Typography style={{ textAlign: "center", marginTop:"130px" }}>
                <Title>Enter Verification Code</Title>
                <Text style={{ fontSize: "18px" }}>
                  We have just sent a Verification <br />
                  code to your email &nbsp;
                  <MailTwoTone style={{fontSize:"20px"}} />
                </Text>
              </Typography>

              <Form
                style={{ margin: "30px", width: "90%" }}
                layout="vertical"
                //    onFinish={onFinish}
                //    onFinishFailed={onFinishFailed}
                //    autoComplete="off"
                //    initialValues={{
                //      remember: true,
                //    }}
              >
                <OtpInput
                  value={code}
                  onChange={handleChange}
                  numInputs={4}
                  separator={<span style={{ width: "10px" }}></span>}
                  isInputNum={true}
                  shouldAutoFocus={true}
                  inputStyle={{
                    border: "2px solid transparent",
                    borderRadius: "2px",
                    width: "54px",
                    height: "50px",
                    fontSize: "12px",
                    color: "black",
                    fontWeight: "400",
                    marginLeft:"35px",
                    caretColor: "blue",
                    backgroundColor: "lightgrey",
                  }}
                  focusStyle={{
                    border: "2px solid black",
                    outline: "none",
                  }}
                />
                   <br />
               <Form.Item>
                  <Button
                    size="large"
                    htmlType="submit"
                    style={{
                      width: "90%",
                      marginRight:"10px",
                      textAlign: "center",
                      borderRadius: "4px",
                      backgroundColor: "#007dfe",
                      color: "white",
                    }}
                  >
                   <Link to="/resetpassword">Verify</Link>
                  </Button>
                </Form.Item>
                <center>
                    <p>Didn't get code Yet ?</p>
                    <Link to="/forgotpassword">Resend OTP</Link>
                </center>
              </Form>
            </Col>
            <Col span={12}>
              <img src={image} style={{ width: "100%", height: "100%" }} />
            </Col>
          </Row>
        </div>
      </Card>
    </div>
  );
};

export default Otpverification;
