"use client";
import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import { Col, Row } from "antd";
import { SubmitHandler } from "react-hook-form";

export default function AdminCreatePage() {
  const onSubmit: SubmitHandler<any> = async (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Admin Create Page</h1>
      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={8}>
            <FormInput
              type="text"
              name="firstName"
              size="large"
              label="First Name"
            />
          </Col>
          <Col className="gutter-row" span={8}>
            <FormInput
              type="text"
              name="firstName"
              size="large"
              label="First Name"
            />
          </Col>
          <Col className="gutter-row" span={8}>
            <FormInput
              type="text"
              name="firstName"
              size="large"
              label="First Name"
            />
          </Col>
          <Col className="gutter-row" span={24}>
            <FormInput
              type="text"
              name="firstName"
              size="large"
              label="First Name"
            />
          </Col>
        </Row>
      </Form>
    </div>
  );
}
