import { Formik, Form, Field, ErrorMessage } from "formik";
import { SignupSchema } from "../../form-validations";
import { Link } from "react-router-dom";

const SignupForm = () => {
  return (
    <div className="flex min-h-screen ">
      <div className="rounded-lg shadow-lg p-8 w-full mt-12">
        <h1 className="text-2xl font-bold mb-4 text-white">
          Welcome To QuizClub
        </h1>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            dob: "",
            email: "",
            password: "",
            confirm_password: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {() => (
            <Form className="space-y-4">
              <div className="flex w-full gap-6 max-md:flex-col">
                <div className="w-full">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-[#ABB8C4]"
                  >
                    First Name
                  </label>
                  <Field
                    name="firstName"
                    className="mt-1 p-2 block w-full rounded-md border bg-[#1a1d21] border-[#363A3D] focus:outline-none text-white"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-400 text-sm"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-[#ABB8C4]"
                  >
                    Last Name
                  </label>
                  <Field
                    name="lastName"
                    className="mt-1 p-2 block w-full rounded-md border bg-[#1a1d21] border-[#363A3D] focus:outline-none text-white"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-red-400 text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#ABB8C4]"
                >
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  className="mt-1 p-2 block w-full rounded-md border bg-[#1a1d21] border-[#363A3D] focus:outline-none text-white"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-400 text-sm"
                />
              </div>
              <div className="flex max-md:flex-col w-full gap-6">
                <div className="w-full">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-[#ABB8C4]"
                  >
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    className="mt-1 p-2 block w-full rounded-md border bg-[#1a1d21] border-[#363A3D] focus:outline-none text-white"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-400 text-sm"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="confirm_password"
                    className="block text-sm font-medium text-[#ABB8C4]"
                  >
                    Confirm Password
                  </label>
                  <Field
                    type="password"
                    name="confirm_password"
                    className="mt-1 p-2 block w-full rounded-md border bg-[#1a1d21] border-[#363A3D] focus:outline-none text-white"
                  />
                  <ErrorMessage
                    name="confirm_password"
                    component="div"
                    className="text-red-400 text-sm"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col justify-center items-center">
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-[#24ae7c] text-white rounded-md "
                >
                  Submit
                </button>
                <Link to="/auth/signin" className="text-[#ABB8C4] mt-3">
                  Already have an account ?{" "}
                  <span className="text-[#24ae7c]">Sign in</span>
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignupForm;
