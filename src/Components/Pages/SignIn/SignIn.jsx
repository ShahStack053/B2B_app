import React, { useState } from "react";
import "./SignIn.css";
import Frame from "../../../Assets/Images/Frame.png";
import Illustration from "../../../Assets/Images/Illustration.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import LangDropDown from "../../Dropdown/LangDropDown";

const SignIn = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const myFunction = () => {
    if (values.email !== "" && values.password.length > 6) {
      axios({
        method: "post",
        url: "https://api-customer-dev.b2bprice.store/api/Auth/Login",
        data: values,
      })
        .then(function (res) {
          if (res.status === 200) {
            // console.log("token==>>>", res.data.data.token);
            navigate("/main/dashboard");
            localStorage.setItem("AuthToken", res.data.data.token);
          }
        })
        .catch((err) => {
          console.log("error==>>", err);
        });
    } else if (values.password.length <= 6 && values.password.length > 0) {
      window.alert("password must be greater than 6 digit");
    } else if (values.password.length === 0) {
      window.alert("Please Enter the Password");
    } else if (values.email === "") {
      window.alert("Please Enter the Email");
    } else {
      window.alert("Please Enter the email and password");
    }
  };
  return (
    <div className="flexContainer-signIn">
      <div className="leftDiv-signIn">
        <div className="logoDiv-signIn">
          <img className="logo-signIn" src={Frame} alt="B2b Logo" />
        </div>
        <div className="sloganDiv-signIn">
          <img
            className="illustration-signIn"
            src={Illustration}
            alt="illustration"
          />
          <h3 className="slogon-signIn">
            Business Customer Supplies Ordering Solution
          </h3>
        </div>
      </div>
      <div className="rightDiv-signIn">
        <div className="upperDiv-signIn">
          <h3 className="admin-signIn">Business Customer Manager</h3>
          <LangDropDown />
          {/* <select className="lang">
            <option>English (UK)</option>
            <option>Arabic (KSA)</option>
          </select> */}
        </div>
        <div className="lowerDiv-signIn">
          <div className="signInDiv">
            Sign in
            {/* <p className="signIn"></p> */}
          </div>

          <input
            className="signIn-input"
            type="email"
            id="email"
            placeholder="Email Address"
            // onChange={(e) => setEmail(e.target.value)}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
          <input
            className="signIn-input"
            type="password"
            id="password"
            placeholder="Password"
            // onChange={(e) => setPassword(e.target.value)}
            onChange={(e) => setValues({ ...values, password: e.target.value })}
          />
          <button
            className="submitBtn-signIn"
            type="submit"
            onClick={myFunction}
          >
            Sign in
          </button>

          {/* <p>
            <a className="modelForgetBtn" href="/ForgetPassword">
              Forgot Password ?
            </a>
          </p> */}
          <Link className="modelForgetBtn-signIn" to="/forgetpassword">
            Forgot Password ?
          </Link>
        </div>
        <div className="model-btnDiv-signIn">
          <p className="signIn-paragraph">
            Don't have an account ? &nbsp;
            <Link
              style={{
                fontFamily: "Poppins",
                fontSize: "15px",
                fontWeight: "500",
                textDecoration: "none",
                color: " #1879B8",
                cursor: "pointer",
              }}
              to="/signup"
            >
              Sign up here!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
