import { Formik, Form } from "formik";
import React from "react";
import { TextField } from "../input/CustomInput";
import * as Yup from "yup";
import "./signup.scss";
import { CustomButton } from "../button/CustomButton";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Signup = () => {
  const validate = Yup.object({
    firstName: Yup.string().required("Please enter your First name"),
    lastName: Yup.string().required("Please enter your Last name"),
    userName: Yup.string().required("Please enter a valid username"),
    confirmUserName: Yup.string()
      .oneOf([Yup.ref("userName"), null], "Usernames must match")
      .required("Please enter the same username"),
    password: Yup.string().required("Enter a strong password"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Re-enter password")
  });
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        userName: "",
        confirmUserName: "",
        password: "",
        confirmPassword: ""
      }}
      validationSchema={validate}
      onSubmit={() => {
        toast.info("Account created Successfully", {
          position: "top-center",
          autoClose: "15000",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        });
        // window.location = "/";
      }}
    >
      {(formik) => (
        <div>
          <h3>Create Account</h3>
          {/* {console.log(formik)} */}
          <ToastContainer />

          <Form className="col-auto">
            <div className="fullName">
              <TextField
                label="First name"
                name="firstName"
                type="text"
                className="firstName"
              />
              <TextField
                label="Last name"
                name="lastName"
                type="text"
                className="lastName"
              />
            </div>
            <TextField label="Username" name="userName" type="text" />
            <TextField
              label="Retype Username"
              name="confirmUserName"
              type="text"
            />
            <TextField label="Password" name="password" type="password" />
            <TextField
              label="Retype Password"
              name="confirmPassword"
              type="password"
            />

            <CustomButton
              title="Create Account"
              classes="primary"
              type="submit"
            />
          </Form>
          <div className="formFooter">
            <p className="accountexists">
              {`Already have an account? `}
              <span>
                <Link className="logIn" to="/">
                  Sign in
                </Link>
              </span>
            </p>
          </div>
        </div>
      )}
    </Formik>
  );
};
