import { Col, Row } from "antd";
import Image from "next/image";
import type { Metadata } from "next";
import loginImage from "../../assets/login-image.png";
import LogInForm from "@/components/ui/LogInForm";

export const metadata: Metadata = {
  title: "Log In - University Management",
  description: "University Management Log In Page",
};

export default function LoginPage() {
  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      <Col sm={12} md={16} lg={10}>
        <Image src={loginImage} width={500} alt="login image" />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <LogInForm />
      </Col>
    </Row>
  );
}
