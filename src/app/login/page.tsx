"use client";

import { Button, Col, Row } from "antd";
import { SubmitHandler } from "react-hook-form";
import Image from "next/image";
import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import loginImage from "../../assets/login-image.png";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/service/auth.services";
import { useRouter } from "next/navigation";

type FormValues = {
  id: string;
  password: string;
};

export default function LoginPage() {
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    const res = await userLogin(data).unwrap();
    storeUserInfo(res?.accessToken);
    router.push("/profile");
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      <Col sm={12} md={16} lg={10}>
        <Image src={loginImage} width={500} alt="login image" />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1 style={{ margin: "16px 0" }}>Please LogIn First</h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput name="id" type="text" size="large" label="User Id" />
            </div>
            <div style={{ margin: "10px 0" }}>
              <FormInput
                name="password"
                type="password"
                size="large"
                label="User Password"
              />
            </div>
            <Button type="primary" htmlType="submit">
              Log In
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
}
