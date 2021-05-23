import { Formik, Form } from "formik";
import React, { useState } from "react";
import { TextField, FormInput } from "../input/CustomInput";
import * as Yup from "yup";
import { CustomButton } from "../button/CustomButton";
import { ValidUsers } from "../../mock-data/Users";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./login.scss";
function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isValidUser, setIsValidUser] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const verifyUserName = () => {
    if (ValidUsers.filter((user) => user.username === userName).length !== 0)
      return true;
    else return false;
  };
  const handleUserNameSubmit = (e) => {
    e.preventDefault();
    setIsVerifying(true);
    const verified = verifyUserName();
    if (verified) {
      setIsVerifying(false);
      setIsValidUser(true);
    } else {
      setIsVerifying(false);
      setIsValidUser(false);
      setUserNameError(true);
    }
  };
  const handleBack = () => {
    setUserName("");
    setIsValidUser(false);
    setIsVerifying(false);
    setUserNameError(false);
  };
  return !isValidUser ? (
    <div className="col-auto">
      <form style={{ width: "100%" }}>
        <div className="form-header">
          <h3>Sign In</h3>
        </div>

        <FormInput
          label="Username"
          type="text"
          id="username"
          name="username"
          className={userNameError ? "errorInput" : "formInput"}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          error={userNameError ? `This username is not recognised` : null}
        />
        <ToastContainer />

        <div className="formAction">
          <CustomButton
            title="Next"
            classes="primary"
            type="submit"
            onSubmit={handleUserNameSubmit}
          />
        </div>
      </form>
      <div className="formFooter">
        <p className="formFooterText">
          New to Autodesk?
          <span>
            <Link to="/signup" className="formFooterLink">
              Create account
            </Link>
          </span>
        </p>
      </div>
    </div>
  ) : (
    <div className="col-auto">
      <form style={{ width: "100%" }}>
        <div className="formHeader">
          <div>
            <button onClick={handleBack} className="backButton">{`<`}</button>
          </div>
          <div className="welcomeWrapper">
            <h3 className="welcomeText">Welcome</h3>
            <p>{userName}</p>
          </div>
        </div>

        <FormInput
          label="Password"
          type="password"
          id="password"
          name="password"
          className={passwordError ? "errorInput" : "formInput"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="formAction">
          <CustomButton
            title="Sign in"
            classes="primary"
            type="submit"
            onSubmit={() => {
              console.log("sign in here ");
            }}
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
