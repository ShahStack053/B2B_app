import React, { useState } from "react";
import {
  Link,
  // useLocation, useNavigate
} from "react-router-dom";
import Frame from "../../../Assets/Images/Frame.png";
import Illustration from "../../../Assets/Images/Illustration.png";
import "./ResetPassword.css";
// import axios from "axios";
import LangDropDown from "../../Dropdown/LangDropDown";

const ResetPassword = () => {
  const [values, setValues] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  // const navigate = useNavigate();
  // const location = useLocation();

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
    <div className="flexContainer-reset">
      <div className="leftDiv-reset">
        <div className="logoDiv-reset">
          <img className="logo-reset" src={Frame} alt="B2b Logo" />
        </div>
        <div className="sloganDiv-reset">
          <img
            className="illustration-reset"
            src={Illustration}
            alt="illustration"
          />
          <h3 className="slogon-reset">
            Business Customer Supplies Ordering Solution
          </h3>
        </div>
      </div>
      <div className="rightDiv-reset">
        <div className="upperDiv-reset">
          <h3 className="admin-reset">Business Customer Manager</h3>
          <LangDropDown />
          {/* <select className="langReset">
            <option>English (UK)</option>
            <option>Arabic (KSA)</option>
          </select> */}
        </div>
        <div className="lowerDiv-reset">
          <div className="resetPass-div">
            Reset Password
            {/* <h1 className="resetPass"></h1> */}
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
          <button
            className="confirmPass-btn"
            type="submit"
            onClick={myFunction}
          >
            Confirm Password
          </button>
          <p className="reset-paragraph">
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
              Go Back!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
