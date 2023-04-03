import React from "react";
import { Link } from "react-router-dom";
import Frame from "../../../Assets/Images/Frame.png";
import Illustration from "../../../Assets/Images/Illustration.png";
import "./ResetPassword.css";

const ResetPassword = () => {
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
          <h3 className="adminReset">Business Customer Manager</h3>
          <select className="langReset">
            <option>English (UK)</option>
          </select>
        </div>
        <div className="lowerDivReset">
          <div className="resetPassDiv">
            <h1 className="resetPass">Reset Password</h1>
          </div>
          <input type="password" id="password" placeholder="New Password" />
          <input type="password" id="password" placeholder="Confirm Password" />
          <button className="confirmPassBtn" type="submit">
            Confirm Password
          </button>
          <p className="paragraph">
            or&nbsp;
            <Link className="modelForgetBtn" to="/forgetpassword">
              Go Back!
            </Link>
          </p>
          <p>
            <Link className="modelForgetBtn" to="/otp">
              Go to Otp!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
