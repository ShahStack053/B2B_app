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
            console.log("token==>>>", res.data.data.token);
            navigate("/dashboard");
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
    <div className="flexContainer">
      <div className="leftDiv">
        <div className="logoDiv">
          <img className="logo" src={Frame} alt="B2b Logo" />
        </div>
        <div className="sloganDiv">
          <img
            className="illustration-signin"
            src={Illustration}
            alt="illustration"
          />
          <h3 className="slogon-signin">
            Business Customer Supplies Ordering Solution
          </h3>
        </div>
      </div>
      <div className="rightDiv">
        <div className="upperDiv">
          <h3 className="admin">Admin Portal</h3>
          <LangDropDown />
          {/* <select className="lang">
            <option>English (UK)</option>
            <option>Arabic (KSA)</option>
          </select> */}
        </div>
        <div className="lowerDiv">
          <div className="signInDiv">
            <p className="signIn">Sign in</p>
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
          <button className="submitBtn" type="submit" onClick={myFunction}>
            Sign in
          </button>

          {/* <p>
            <a className="modelForgetBtn" href="/ForgetPassword">
              Forgot Password ?
            </a>
          </p> */}
          <Link className="modelForgetBtn" to="/forgetpassword">
            Forgot Password ?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
