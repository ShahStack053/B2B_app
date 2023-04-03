import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Frame from "../../../Assets/Images/Frame.png";
import Illustration from "../../../Assets/Images/Illustration.png";
import "./ResetPassword.css";
import axios from "axios";

const ResetPassword = () => {
  const [values, setValues] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const location = useLocation();

  console.log(
    // "LOCATION===>>>",
    // location.state.email,
    "confirmPassword===>",
    values.confirmPassword,
    "newPassword===>",
    values.newPassword
  );
  const myFunction = () => {
    // const resetData = {
    //   email: location.state.email,
    //   password: values.newPassword,
    //   confirmPassword: values.confirmPassword,
    // };
    // axios({
    //   method: "post",
    //   url: "https://api-customer-dev.b2bprice.store/api/Auth/ResetPassword",
    //   data: { resetData },
    // })
    //   .then(function (res) {
    //     if (res.status === 200) {
    //       navigate("/");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log("error==>>", err);
    //   });
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
          <h3 className="adminReset">Business Customer Manager</h3>
          <select className="langReset">
            <option>English (UK)</option>
          </select>
        </div>
        <div className="lowerDivReset">
          <div className="resetPassDiv">
            <h1 className="resetPass">Reset Password</h1>
          </div>
          <input
            className="reset-input"
            type="password"
            id="newPassword"
            placeholder="New Password"
            onChange={(e) =>
              setValues({ ...values, newPassword: e.target.value })
            }
          />
          <input
            className="reset-input"
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            onChange={(e) =>
              setValues({ ...values, confirmPassword: e.target.value })
            }
          />
          <button className="confirmPassBtn" type="submit" onClick={myFunction}>
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
