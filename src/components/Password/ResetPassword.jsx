import React from "react";
import { Card, Row, Col, Form, Input, Button, Typography } from "antd";
import { Link } from "react-router-dom";
import image from "../../assets/images/ResetPassword.jpg";
import { ArrowLeftOutlined,LockTwoTone  } from "@ant-design/icons";

const ResetPassword = () => {
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
                //   boxShadow: " 0 1px 6px 0 rgba(32, 33, 36, 28)",
                //   borderRadius: "10px",
                width: "400px",
                height: "550px",
              }}
            >
              <Typography style={{ textAlign: "center", marginTop: "80px" }}>
                <Title>Reset Your Password ?</Title>
                <Text style={{ fontSize: "18px" }}>
                  Set Your New Password &nbsp;
                  <LockTwoTone />
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
                <Form.Item
                  label="Confirm Password"
                  name="Confirm Password"
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

                <Form.Item>
                  <Button
                    size="large"
                    htmlType="submit"
                    style={{
                      width: "100%",
                      textAlign: "center",
                      borderRadius: "4px",
                      backgroundColor: "#007dfe",
                      color: "white",
                    }}
                  >
                    <Link to="/signin">SUBMIT</Link>
                  </Button>
                </Form.Item>

                <div style={{ textAlign: "center", fontSize: "15px" }}>
                  <ArrowLeftOutlined />
                  &nbsp; Back to <Link to="/signin">Sign In</Link>
                </div>
              </Form>
            </Col>
            <Col span={12}>
              <img src={image}
                style={{ width: "100%", height: "100%" }} />
            </Col>
          </Row>
        </div>
      </Card>
    </div>
  );
};

export default ResetPassword;
