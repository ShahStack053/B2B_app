import React from "react";
import "./ForgetPassword.css";
import Frame from "../../../Assets/Images/Frame.png";
import Illustration from "../../../Assets/Images/Illustration.png";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <div className="flexContainer">
      <div className="leftDiv">
        <div className="logoDiv">
          <img className="logo" src={Frame} alt="B2b Logo" />
        </div>
        <div className="sloganDiv">
          <img className="illustration" src={Illustration} alt="illustration" />
          <h3 className="slogon">
            Business Customer Supplies Ordering Solution{" "}
          </h3>
        </div>
      </div>
      <div className="rightDiv">
        <div className="upperDiv">
          <h3 className="adminDiv">Business Customer Manager</h3>
          <select className="langForget">
            <option>English (Uk)</option>
          </select>
        </div>
        <div className="lowerDivForget">
          <div className="forgetPassDiv">
            <h1 className="forgetPass">Forgot Password ?</h1>
            <h3 className="belowPass">
              Please enter the registered email to reset password
            </h3>
          </div>
          <input type="text" id="email" value="" placeholder="Email Address" />
          <button className="forgetBtn" type="submit">
            Confirm
          </button>
          <p>
            or&nbsp;
            <Link className="modelForgetBtn" to="/">
              Go Back!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
