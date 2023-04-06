import React from "react";
import OTPInput from "otp-input-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import OtpInput from "react-otp-input";
import Frame from "../../../Assets/Images/Frame.png";
import Illustration from "../../../Assets/Images/Illustration.png";
import axios from "axios";

import "./Otp.css";
import LangDropDown from "../../Dropdown/LangDropDown";

const OTP = () => {
  const [OTP, setOTP] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const myFunction = () => {
    const otpData = {
      OTP,
      provider: "",
      email: location.state.email,
    };
    console.log("OTPData===>>", otpData);
    if (OTP !== "") {
      axios({
        method: "post",
        url: "https://api-customer-dev.b2bprice.store/api/Auth/TwostepVerification",
        data: { otpData },
      })
        .then(function (res) {
          if (res.status === 200) {
            navigate("/resetpassword");
          }
        })
        .catch((err) => {
          console.log("error==>>", err);
          navigate("/resetpassword");
        });
    } else {
      window.alert("Please Enter the OTP");
    }
  };

  // const [otp, setOtp] = useState(Array(4).fill(""));

  // const handleChange = (event, index) => {
  //   const newOtp = [...otp];
  //   newOtp[index] = event.target.value;
  //   setOtp(newOtp);
  // };
  return (
    <div className="flexContainer-otp">
      <div className="leftDiv-otp">
        <div className="logoDiv-otp">
          <img className="logo-otp" src={Frame} alt="B2b Logo" />
        </div>
        <div className="sloganDiv-otp">
          <img
            className="illustration-otp"
            src={Illustration}
            alt="illustration"
          />
          <h3 className="slogon-otp">
            Business Customer Supplies Ordering Solution{" "}
          </h3>
        </div>
      </div>
      <div className="rightDiv-otp">
        <div className="upperDiv-otp">
          <h3 className="admin-otp">Business Customer Manager</h3>
          <LangDropDown />
          {/* <select className="langOtp">
            <option>English (UK)</option>
            <option>Arabic (KSA)</option>
          </select> */}
        </div>
        <div className="lowerDivOtp">
          <div className="otpDiv">
            <h1 className="verificationCode">Verification Code</h1>
            <h3 className="belowCode">
              Please enter the verification code sent to example@gmail.com
            </h3>
          </div>
          <div className="otpContainer">
            <OTPInput
              className="otp-input"
              value={OTP}
              onChange={setOTP}
              autoFocus
              OTPLength={4}
              otpType="number"
              disabled={false}
            />
          </div>
          <button className="confirmBtn" type="submit" onClick={myFunction}>
            Confirm Code
          </button>
          <p className="otp-paragraph">
            No code received? &nbsp;
            <Link
              style={{
                fontFamily: "Poppins",
                fontSize: "15px",
                fontWeight: "500",
                textDecoration: "none",
                color: " #1879B8",
                cursor: "pointer",
              }}
              to="/resetpassword"
            >
              Resend Code
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
              to="/forgetpassword"
            >
              Go Back!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OTP;
