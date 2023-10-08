import { Col, Row } from "antd";
import React from "react";
import { UploadImage } from "../Form/UploadImage";
import FormInput from "../Form/FormInput";
import style from "@/app/common.module.css";
import FormSelect from "../Form/FormSelect";
import {
  acDepartmentOptions,
  acSemesterOptions,
  departmentOptions,
  facultyOptions,
  genderOptions,
} from "@/constant/global";

export default function StudentInfo() {
  return (
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
        Student Information
      </p>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className={`gutter-row ${style.field_mb}`} span={24}>
          <UploadImage />
        </Col>
        <Col className={`gutter-row ${style.field_mb}`} span={8}>
          <FormInput
            type="text"
            name="student.name.firstName"
            size="large"
            label="First Name"
          />
        </Col>
        <Col className={`gutter-row ${style.field_mb}`} span={8}>
          <FormInput
            type="text"
            name="student.name.middleName"
            size="large"
            label="Middle Name"
          />
        </Col>
        <Col className={`gutter-row ${style.field_mb}`} span={8}>
          <FormInput
            type="text"
            name="student.name.lastName"
            size="large"
            label="Last Name"
          />
        </Col>
        <Col className={`gutter-row ${style.field_mb}`} span={8}>
          <FormInput
            type="password"
            name="pasword"
            size="large"
            label="Password"
          />
        </Col>
        <Col className={`gutter-row ${style.field_mb}`} span={8}>
          <FormSelect
            name="student.gender"
            label="Gender"
            size="large"
            placeholder="Select a gender"
            options={genderOptions}
          />
        </Col>
        <Col className={`gutter-row ${style.field_mb}`} span={8}>
          <FormSelect
            name="student.academicSemester"
            label="Semester"
            size="large"
            placeholder="Select Academic Semester"
            options={acSemesterOptions}
          />
        </Col>
        <Col className={`gutter-row ${style.field_mb}`} span={8}>
          <FormSelect
            name="student.academicFaculty"
            label="Faculty"
            size="large"
            placeholder="Select Academic Faculty"
            options={facultyOptions}
          />
        </Col>
        <Col className={`gutter-row ${style.field_mb}`} span={8}>
          <FormSelect
            name="student.academicDepartment"
            label="Department"
            size="large"
            placeholder="Select Academic Department"
            options={acDepartmentOptions}
          />
        </Col>
      </Row>
    </div>
  );
}
