import React from "react";
import OTPInput from "otp-input-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import OtpInput from "react-otp-input";
import Frame from "../../../Assets/Images/Frame.png";
import Illustration from "../../../Assets/Images/Illustration.png";
import axios from "axios";

import "./Otp.css";

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
        <div className="upperDivOtp">
          {/* <h3 className="admin">Business Customer Manger</h3> */}
          <select className="langOtp">
            <option>English (UK)</option>
          </select>
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
              value={OTP}
              onChange={setOTP}
              // autoFocus
              OTPLength={4}
              otpType="number"
              disabled={false}
              className="otpClass"
              // secure

              style={
                {
                  // width: "90px",
                  // marginRight: "10px",
                  // fontSize: "30px",
                  // borderWidth: "0 0 1px",
                  // borderColor: "#868686",
                  // outline: "0",
                  // border: "none",
                  // textAlign: "center",
                }
              }
            />
          </div>
          <button className="confirmBtn" type="submit" onClick={myFunction}>
            Confirm Code
          </button>
          <p>
            No code received? &nbsp;
            <Link className="modelForgetBtn" to="/resetpassword">
              Resend Code
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OTP;
