import React from "react";
import { Card, Row, Col, Form, Input, Button, Typography } from "antd";
import { Link } from "react-router-dom";
import image from "../../assets/images/ResetPassword.jpg";
import { MailTwoTone } from "@ant-design/icons";

const Otpverification = () => {
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
                <Title>Enter Verification Code</Title>
                <Text style={{ fontSize: "18px" }}>
                  We have just sent a Verification <br />
                  code to your email &nbsp;
                  <MailTwoTone />
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
                

                <br />
                <h3>Send the Code again</h3>

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
                    <Link to="/resetpassword">Verify</Link>
                  </Button>
                </Form.Item>
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
