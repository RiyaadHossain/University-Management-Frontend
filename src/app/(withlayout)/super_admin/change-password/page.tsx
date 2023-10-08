"use client";

import { Button, Col, Row } from "antd";
import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { passwordChangeSchema } from "@/schema/change-password";

export default function ChangePasswordPage() {
  const onSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{ margin: "100px 0", display: "flex", justifyContent: "center" }}
    >
      <Form
        submitHandler={onSubmit}
        resolver={yupResolver(passwordChangeSchema)}
      >
        <h2 style={{ marginBottom: "10px" }}>Reset Password</h2>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={24} style={{ margin: "10px 0" }}>
            <FormInput
              size="large"
              name="oldPassword"
              label="Old password"
              type="password"
            />
          </Col>
          <Col span={24} style={{ margin: "10px 0" }}>
            <FormInput
              size="large"
              name="newPassword"
              label="New password"
              type="password"
            />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          submit
        </Button>
      </Form>
    </div>
  );
}
