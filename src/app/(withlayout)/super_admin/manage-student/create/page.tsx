"use client";

import { StepperForm } from "@/components/StepperForm/StepperForm";
import BasicInfo from "@/components/StudentForms/BasicInfo";
import GuardianInfo from "@/components/StudentForms/GuardianInfo";
import LocalGuardianInfo from "@/components/StudentForms/LocalGuardianInfo";
import StudentInfo from "@/components/StudentForms/StudentInfo";

const steps = [
  {
    title: "Student Info",
    content: <StudentInfo />,
  },
  {
    title: "Basic Info",
    content: <BasicInfo />,
  },
  {
    title: "Guardian Info",
    content: <GuardianInfo />,
  },
  {
    title: "Local Guardian Info",
    content: <LocalGuardianInfo />,
  },
];

export default function page() {
  const handleStudentSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div style={{ marginTop: "15px" }}>
      <h1 style={{ marginBottom: "15px" }}>Create Student Form</h1>
      <StepperForm steps={steps} submitHandler={handleStudentSubmit} />
    </div>
  );
}
