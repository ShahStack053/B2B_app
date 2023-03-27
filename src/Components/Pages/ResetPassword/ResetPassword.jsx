import React from "react";
// import { Link } from "react-router-dom";
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
          <h3 className="admin">Business Customer Manager</h3>
          <select className="lang">
            <option>English (US)</option>
          </select>
        </div>
        <div className="lowerDiv">
          <div className="resetPassDiv">
            <h1 className="resetPass">Reset Password</h1>
          </div>
          <input
            type="password"
            id="password"
            value=""
            placeholder="New Password"
          />
          <input
            type="password"
            id="password"
            value=""
            placeholder="Confirm Password"
          />
          <button className="confirmPassBtn" type="submit">
            Confirm Password
          </button>
          <p>
            or&nbsp;
            <a className="modelForgetBtn" href="/SignUp">
              Go Back!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
