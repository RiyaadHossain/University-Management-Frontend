import * as yup from "yup";

export const facultySchema = yup.object().shape({
  password: yup.string().min(6).max(32).required(),
  faculty: yup.object().shape({
    name: yup.object().shape({
      firstName: yup.string().required("First name is required"),
      middleName: yup.string().required("Middle name is required"),
      lastName: yup.string().required("Last name is required"),
    }),
    email: yup
      .string()
      .email("Email must ba valid")
      .required("Email is required"),
    designation: yup.string().required("Designation is required"),
    // dateOfBirth: yup.string().required("Date of Birth is required"),
    permanentAddress: yup.string().required("Permanent Address is required"),
    presentAddress: yup.string().required("Present Address is required"),
    bloodGroup: yup.string().required("Blood Group is required"),
    contactNo: yup.string().required("Contact No is required"),
    emergencyContactNo: yup
      .string()
      .required("Emergency Contact No is required"),
    academicFaculty: yup
      .string()
      .required("Academic Faculty is required"),
    academicDepartment: yup
      .string()
      .required("Academic Department is required"),
    gender: yup.string().required("Gender is required"),
  }),
});
