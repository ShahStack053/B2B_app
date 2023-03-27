import React from "react";
import { useState } from "react";
// import OtpInput from "react-otp-input";
import Frame from "../../../Assets/Images/Frame.png";
import Illustration from "../../../Assets/Images/Illustration.png";
import "./Otp.css";

const OTP = () => {
  const [otp, setOtp] = useState(Array(4).fill(""));

  const handleChange = (event, index) => {
    const newOtp = [...otp];
    newOtp[index] = event.target.value;
    setOtp(newOtp);
  };
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
          {/* <h3 className="admin">Business Customer Manger</h3> */}
          <select className="lang">
            <option>English (US)</option>
          </select>
        </div>
        <div className="lowerDiv">
          <div className="otpDiv">
            <h1 className="verificationCode">Verification Code</h1>
            <h3 className="belowCode">
              Please enter the verification code sent to example@gmail.com
            </h3>
          </div>
          <div className="otpContainer">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(event) => handleChange(event, index)}
                style={{
                  width: "11%",
                  marginRight: "10px",
                  fontSize: "30px",
                  borderWidth: "0 0 2px",
                  borderColor: "#868686",
                  outline: "0",
                  border: "none",
                  borderBottom: "1px solid Gray",
                  textAlign: "center",
                }}
              />
            ))}
          </div>
          <button className="confirmBtn" type="submit">
            Confirm Code
          </button>
          <p>
            No code received? &nbsp;
            <a className="modelForgetBtn" href="/ForgetPassword">
              Resend Code
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OTP;
