"use client";

import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import { departmentSchema } from "@/schema/deaprtment";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row } from "antd";

export default function page() {
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Create Department</h1>
      <Form submitHandler={onSubmit} resolver={yupResolver(departmentSchema)}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput size="large" name="title" label="Title" />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          add
        </Button>
      </Form>
    </div>
  );
}
