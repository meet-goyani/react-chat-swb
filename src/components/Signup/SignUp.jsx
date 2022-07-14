import React from "react";
import image from "../../assets/images/SignUp.jpg";
import {Card,Row,Col,Form,Input,Button,Typography,Divider,InputNumber} from "antd";
import { GoogleSquareFilled, FacebookOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { ad } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";

const SignUp = () => {
  const navigate = useNavigate();
  const docRef = collection(ad, "user");
  const { Title, Text } = Typography;
  const onFinish = async (values) => {
    navigate("/signin");
    await addDoc(docRef, {
      Name: values.Name,
      Email: values.Email,
      PhoneNumber: values.PhoneNumber,
      Password: values.Password,
      ConfirmPassword: values.ConfirmPassword,
    });

    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

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
          <Row style={{ alignItems: "center" }} className="chat_form_main">
            <Col
              span={12}
              className="chat_form_left"
              style={{
                boxShadow: " 0 1px 6px 0 rgba(32, 33, 36, 28)",
                borderRadius: "10px",
              }}
            >
              <Typography style={{ textAlign: "center", marginTop: "2px" }}>
                <Title>Sign Up</Title>
                <Text style={{ fontSize: "18px" }}>
                  Already have an account ? &nbsp;
                  <Link to="/signin">Sign In</Link>
                </Text>
              </Typography>

              <Form
                style={{ margin: "0 60px" }}
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                initialValues={{
                  remember: true,
                }}
              >
                <Form.Item
                  label="Name"
                  name="Name"
                  style={{ fontWeight: "bold", marginBottom: "5px" }}
                  rules={[
                    {
                      required: true,
                      message: "Please input your Name!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter Your Name"
                    style={{ borderRadius: "8px", padding: "10px" }}
                  />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="Email"
                  style={{ fontWeight: "bold", marginBottom: "5px" }}
                  layout="vertical"
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
                  label="Phone Number"
                  name="PhoneNumber"
                  style={{ fontWeight: "bold", marginBottom: "5px" }}
                  layout="vertical"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Phone Number!",
                    },
                  ]}
                >
                  <InputNumber
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                      padding: "3px",
                    }}
                    placeholder="Enter Your Phone Number"
                  />
                </Form.Item>
                <Row
                  gutter={6}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Col span={12}>
                    <Form.Item
                      label="Password"
                      name="Password"
                      style={{ fontWeight: "bold" }}
                      rules={[
                        {
                          required: true,
                          message: "Please input your Password!",
                        },
                      ]}
                      hasFeedback
                    >
                      <Input.Password placeholder="Enter Your Password" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      className="password"
                      label="ConfirmPassword"
                      name="ConfirmPassword"
                      style={{ fontWeight: "bold" }}
                      dependencies={["Password"]}
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Please confirm your password!",
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || getFieldValue("Password") === value) {
                              return Promise.resolve();
                            }
                            return Promise.reject(
                              new Error(
                                "The two passwords that you entered do not match!"
                              )
                            );
                          },
                        }),
                      ]}
                    >
                      <Input.Password placeholder="Confirm password" />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item className="chat_form_submit_button">
                  <Button
                    size="large"
                    htmlType="submit"
                    style={{
                      width: "100%",
                      textAlign: "center",
                      borderRadius: "2px",
                      backgroundColor: "#007dfe",
                      color: "white",
                    }}
                  >
                    Sign Up
                  </Button>
                </Form.Item>
                <Divider style={{ borderWidth: 2, borderColor: "grey" }}>
                  or Sign Up With
                </Divider>

                <div
                  className="form_signup_btn"
                  style={{
                    display: "flex",
                    margin: "2%",
                    paddingBottom: "20px",
                  }}
                >
                  <Button
                    type="primary"
                    size="large"
                    danger
                    style={{
                      textAlign: "center",
                      borderRadius: "8px",
                      color: "white",
                      marginLeft: "8px",
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
            <Col span={12} className="chat_form_right">
              <img
                src={image}
                style={{ width: "100%", height: "100%", marginLeft: "10px" }}
              />
            </Col>
          </Row>
        </div>
      </Card>
    </div>
  );
};

export default SignUp;
