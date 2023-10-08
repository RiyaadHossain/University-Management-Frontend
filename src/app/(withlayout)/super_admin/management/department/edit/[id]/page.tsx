"use client";

import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import {
  useGetDepartmentQuery,
  useUpdateDepartmentMutation,
} from "@/redux/api/departmentApi";
import { Row, Col, Button, message } from "antd";
import { useRouter } from "next/navigation";

type IDProps = {
  params: any;
};

export default function EditDepartmentPage({ params }: IDProps) {
  const { id } = params;
  const router = useRouter();

  const { data, isLoading } = useGetDepartmentQuery(id);
  const [updateDepartment] = useUpdateDepartmentMutation();

  const onSubmit = async (values: { title: string }) => {
    message.loading("Updating.....");
    try {
      await updateDepartment({ id, data: values });
      message.success("Department updated successfully");
      setTimeout(() => {
        router.push("/super_admin/management/department");
      }, 1000);
    } catch (err: any) {
      message.error(err.message);
    }
  };

  const defaultValues = {
    title: data?.title || "",
  };

  return (
    <div>
      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput size="large" name="title" label="Title" />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form>
    </div>
  );
}
