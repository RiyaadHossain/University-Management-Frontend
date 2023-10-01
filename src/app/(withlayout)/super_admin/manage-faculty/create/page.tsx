"use client";
import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import { Button, Col, Row } from "antd";
import { SubmitHandler } from "react-hook-form";
import style from "./styles.module.css";
import FormSelect from "@/components/Form/FormSelect";
import {
  acDepartmentOptions,
  bloodGroupOptions,
  departmentOptions,
  facultyOptions,
  genderOptions,
} from "@/constant/global";
import { UploadImage } from "@/components/Form/UploadImage";
import FormTextArea from "@/components/Form/FormTextArea";
import FormDatePicker from "@/components/Form/FormDatePicker";
import { yupResolver } from "@hookform/resolvers/yup";
import { facultySchema } from "@/schema/faculty";
import { Dayjs } from "dayjs";

export default function FacultyCreatePage() {
  const onDateChange = (date: Dayjs | null, dateString: string) => {
    console.log(date, dateString);
  };

  const onSubmit: SubmitHandler<any> = async (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ marginTop: "15px" }}>
      <h1 style={{ marginBottom: "10px" }}>Create Faculty Form</h1>
      <Form submitHandler={onSubmit} resolver={yupResolver(facultySchema)}>
        {/* Faculty Info */}
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <p
            style={{
              fontSize: "18px",
              marginBottom: "10px",
            }}
          >
            Faculty Information
          </p>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className={`gutter-row ${style.field_mb}`} span={24}>
              <UploadImage />
            </Col>
            <Col className={`gutter-row ${style.field_mb}`} span={8}>
              <FormInput
                type="text"
                name="faculty.name.firstName"
                size="large"
                label="First Name"
              />
            </Col>
            <Col className={`gutter-row ${style.field_mb}`} span={8}>
              <FormInput
                type="text"
                name="faculty.name.middleName"
                size="large"
                label="Middle Name"
              />
            </Col>
            <Col className={`gutter-row ${style.field_mb}`} span={8}>
              <FormInput
                type="text"
                name="faculty.name.lastName"
                size="large"
                label="Last Name"
              />
            </Col>
            <Col className={`gutter-row ${style.field_mb}`} span={8}>
              <FormInput
                type="password"
                name="password"
                size="large"
                label="Password"
              />
            </Col>
            <Col className={`gutter-row ${style.field_mb}`} span={8}>
              <FormSelect
                name="faculty.gender"
                label="Gender"
                size="large"
                placeholder="Select a gender"
                options={genderOptions}
              />
            </Col>
            <Col className={`gutter-row ${style.field_mb}`} span={8}>
              <FormSelect
                name="faculty.academicFaculty"
                label="Academic Faculty"
                size="large"
                placeholder="Select a faculty"
                options={facultyOptions}
              />
            </Col>
            <Col className={`gutter-row ${style.field_mb}`} span={8}>
              <FormSelect
                name="faculty.academicDepartment"
                label="Academic Department"
                size="large"
                placeholder="Select a department"
                options={acDepartmentOptions}
              />
            </Col>
          </Row>
        </div>

        {/* Basic Info */}
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <p
            style={{
              fontSize: "18px",
              marginBottom: "10px",
            }}
          >
            Faculty Information
          </p>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <FormInput
                type="email"
                name="faculty.email"
                size="large"
                label="Email address"
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <FormInput
                type="text"
                name="faculty.contactNo"
                size="large"
                label="Contact No."
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <FormInput
                type="text"
                name="faculty.emergencyContactNo"
                size="large"
                label="Emergency Contact No."
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <FormDatePicker
                onChange={onDateChange}
                name="faculty.dateOfBirth"
                label="Date of birth"
                size="large"
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <FormSelect
                size="large"
                name="faculty.bloodGroup"
                options={bloodGroupOptions}
                label="Blood group"
                placeholder="Select blood group"
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <FormInput
                type="text"
                name="faculty.designation"
                size="large"
                label="Designation"
              />
            </Col>
            <Col span={12} style={{ margin: "10px 0" }}>
              <FormTextArea
                name="faculty.presentAddress"
                label="Present address"
                rows={4}
              />
            </Col>

            <Col span={12} style={{ margin: "10px 0" }}>
              <FormTextArea
                name="faculty.permanentAddress"
                label="Permanent address"
                rows={4}
              />
            </Col>
          </Row>
        </div>

        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form>
    </div>
  );
}
