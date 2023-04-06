import React, { useState } from "react";
import "./ForgetPassword.css";
import Frame from "../../../Assets/Images/Frame.png";
import Illustration from "../../../Assets/Images/Illustration.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import LangDropDown from "../../Dropdown/LangDropDown";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  console.log("email===>>:", email);
  const myFunction = () => {
    if (email !== "") {
      axios({
        method: "post",
        url: "https://api-customer-dev.b2bprice.store/api/Auth/ForgotPassword",
        data: { email },
      })
        .then(function (res) {
          if (res.status === 200) {
            console.log("token==>>>", res);
            navigate("/otp", { state: { email } });
          }
        })
        .catch((err) => {
          console.log("error==>>", err);
        });
    } else {
      window.alert("Please Enter the Email");
    }
  };

  return (
    <div className="flexContainer-forget">
      <div className="leftDiv-forget">
        <div className="logoDiv-forget">
          <img className="logo-forget" src={Frame} alt="B2b Logo" />
        </div>
        <div className="sloganDiv-forget">
          <img
            className="illustration-forget"
            src={Illustration}
            alt="illustration"
          />
          <h3 className="slogon-forget">
            Business Customer Supplies Ordering Solution
          </h3>
        </div>
      </div>
      <div className="rightDiv-forget">
        <div className="upperDiv-forget">
          <h3 className="admin-forget">Business Customer Manager</h3>
          <LangDropDown />
          {/* <select className="langForget">
            <option>English (Uk)</option>
            <option>Arabic (KSA)</option>
          </select> */}
        </div>
        <div className="lowerDiv-forget">
          <div className="forgetPass-div">
            <h1 className="forgetPass">Forgot Password ?</h1>
            <h3 className="belowPass">
              Please enter the registered email to reset password
            </h3>
          </div>
          <input
            className="forgetPass-input"
            type="text"
            id="email"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="forgetBtn" type="submit" onClick={myFunction}>
            Confirm
          </button>
          <p className="forget-paragraph">
            or&nbsp;
            <Link
              style={{
                fontFamily: "Poppins",
                fontSize: "15px",
                fontWeight: "500",
                textDecoration: "none",
                color: " #1879B8",
                cursor: "pointer",
              }}
              to="/"
            >
              Go Back!
            </Link>
          </p>
          <p className="forget-paragraph">
            or&nbsp;
            <Link
              style={{
                fontFamily: "Poppins",
                fontSize: "15px",
                fontWeight: "500",
                textDecoration: "none",
                color: " #1879B8",
                cursor: "pointer",
              }}
              to="/otp"
            >
              Go to otp!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
