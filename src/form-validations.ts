import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "First Name should contain at least 2 characters")
    .max(15, "First Name is too long")
    .required("First Name is required"),
  lastName: Yup.string()
    .min(2, "Last Name should contain at least 2 characters")
    .max(15, "Last Name is too long")
    .required("Last Name is required"),
  // dob: Yup.date().required("Date of Birth is required").nullable(), // Allow empty initial value
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password should contain at least 6 characters")
    .required("Password is required"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Passwords must match"),
});
