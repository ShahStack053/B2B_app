import React from "react";
import "./SignUp.css";
import Frame from "../../../Assets/Images/Frame.png";
import Illustration from "../../../Assets/Images/Illustration.png";
import { Link } from "react-router-dom";

const SignUp = () => {
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
          <h3 className="admin">Admin Portal</h3>
          <select className="lang">
            <option>English (UK)</option>
          </select>
        </div>
        <div className="lowerDiv">
          <div className="signUpDiv">
            <p className="signUp">Sign in</p>
          </div>

          <input type="text" id="email" value="" placeholder="Email Address" />
          <input
            type="password"
            id="password"
            value=""
            placeholder="Password"
          />
          <button className="submitBtn" type="submit">
            SignIn
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

export default SignUp;
