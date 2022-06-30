import React from "react";
import image from "../../assets/images/login.svg";
import { Card, Row, Col, Form, Input, Button, Typography, Divider } from "antd";
import { GoogleSquareFilled, FacebookOutlined } from "@ant-design/icons";
import "./SignIn.css";
import { Link } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";

const SignIn = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const { Title, Text } = Typography;
  return (
    <div>
      <Card
        className="chat_form_card"
        bordered={true}
        style={{
          height: 600,
          background: "white",
          margin: "60px auto",
          width: "80%",
        }}
      >
        <div>
          <Row style={{ alignItems: "center" }} className="chat_form_main">
            <Col
              span={12}
              className="chat_form_left"
              style={{ boxShadow: " 0 1px 6px 0 rgba(32, 33, 36, .28)" }}
            >
              <Typography style={{ textAlign: "center", marginTop: "5px" }}>
                <Title>Sign In</Title>
                <Text style={{ fontSize: "18px" }}>
                  Doesn't have an account yet? &nbsp;
                  <Link to="/signup">Sign Up</Link>
                </Text>
              </Typography>

              <Form
                name="basic"
                style={{ margin: "50px" }}
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                initialValues={{
                  remember: true,
                }}
              >
                <Form.Item
                  label="Email"
                  name="Email"
                  style={{ fontWeight: "bold", marginBottom: "5px" }}
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
                  <Input
                    placeholder="Enter Your Email"
                    style={{ borderRadius: "8px", padding: "10px" }}
                  />
                </Form.Item>
                <Form.Item
                  label="Password"
                  name="Password"
                  style={{
                    fontWeight: "bold",
                    marginBottom: "5px",
                    marginTop: "10px",
                  }}
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password
                    style={{ borderRadius: "8px", padding: "10px" }}
                    placeholder="Enter Password"
                  />
                </Form.Item>
                <Form.Item
                  style={{ marginTop: "30px" }}
                  className="chat_form_submit_button"
                >
                  <Button
                    size="large"
                    htmlType="submit"
                    style={{
                      width: "100%",
                      textAlign: "center",
                      borderRadius: "8px",
                      backgroundColor: "#007dfe",
                      color: "white",
                    }}
                  >
                    <Link to="/dashboard">Sign In</Link>
                  </Button>
                  &nbsp;
                  <div style={{ textAlign: "center" }}>
                    <Link to="/forgotpassword">Forgot Password ?</Link>
                  </div>
                </Form.Item>
                <Divider style={{ borderWidth: 2, borderColor: "grey" }}>
                  or Sign In With
                </Divider>
                <div
                  style={{ display: "flex", margin: "2%" }}
                  className="form_signin_btn"
                >
                  <Button
                    type="primary"
                    size="large"
                    danger
                    style={{
                      textAlign: "center",
                      borderRadius: "8px",
                      color: "white",
                      marginLeft: "12px",
                      width: "50%",
                    }}
                  >
                    <GoogleSquareFilled /> Google
                  </Button>
                  <Button
                    type="primary"
                    size="large"
                    style={{
                      textAlign: "center",
                      borderRadius: "8px",
                      color: "white",
                      marginLeft: "20px",
                      width: "50%",
                    }}
                  >
                    <FacebookOutlined />
                    Facebook
                  </Button>
                </div>
              </Form>
            </Col>
            <Col
              span={12}
              className="chat_form_right"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={image}
                style={{
                  width: "100%",
                }}
              />
            </Col>
          </Row>
        </div>
      </Card>
    </div>
  );
};
export default SignIn;
