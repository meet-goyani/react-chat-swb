import React from "react";
import {Card,Row,Col,Form,Input,Button,Typography} from "antd";
import { Link } from "react-router-dom";
import image from "../../assets/images/forgotPassword.png";
import { ArrowLeftOutlined,MailTwoTone  } from "@ant-design/icons";



const ForgotPassword = () => {
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
               <Title>
                 Forgot <br /> Your Password ?
               </Title>
               <Text style={{ fontSize: "18px" }}>
                 Enter Your Register Email Id <MailTwoTone />
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
                   placeholder="Enter Your Email Address"
                   style={{ borderRadius: "8px", padding: "10px" }}
                 />
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
                   <Link to="/resetpassword">Reset Password</Link>
                 </Button>
               </Form.Item>

               <div style={{ textAlign: "center", fontSize: "15px" }}>
                 <ArrowLeftOutlined />
                 &nbsp; Back to <Link to="/signin">Sign In</Link>
               </div>
             </Form>
           </Col>
           <Col span={12}>
             <img
               src={image}
               style={{ width: "100%", height: "100%" }}
             />
           </Col>
         </Row>
       </div>
     </Card>
   </div>
 );

}

export default ForgotPassword;
