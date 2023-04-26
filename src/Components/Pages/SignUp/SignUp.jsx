import React, { useState } from "react";
import "./SignUp.css";
import Frame from "../../../Assets/Images/Frame.png";
import Illustration from "../../../Assets/Images/Illustration.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import LangDropDown from "../../Dropdown/LangDropDown";

export const Checkbox = () => {
  return (
    <div style={{ display: "flex" }}>
      <input type="checkbox" id="checkbox" />
      <label htmlFor="checkbox">
        &nbsp;&nbsp; Accept Terms & Conditions and Privacy Policy
      </label>
    </div>
  );
};

const SignUp = () => {
  const [values, setValues] = useState({
    fName: "",
    email: "",
    companyName: "",
    custCategory: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  // console.log(
  //   "fname===>",
  //   values.fName,
  //   "email===>",
  //   values.email,
  //   "companyName===>",
  //   values.companyName,
  //   "custCategory===>",
  //   values.custCategory,
  //   "password===>",
  //   values.password,
  //   "confirmPassword===>",
  //   values.confirmPassword
  // );

  const myFunction = () => {
    const createData = {
      id: 0,
      bcName: values.fName,
      enName: values.companyName,
      bcCategoryId: 1,
      email: values.email,
      password: values.password,
      confrimPassword: values.confirmPassword,
      termsAndCondition: true,
    };
    axios({
      method: "post",
      url: "https://api-customer-dev.b2bprice.store/api/BCUserRegister/CreateUpdate",
      data: { createData },
    })
      .then(function (res) {
        if (res.status === 200) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log("error==>>", err);
      });
  };

  return (
    <div className="flexContainer-signup">
      <div className="leftDiv-signup">
        <div className="logoDiv-signup">
          <img className="logo-signup" src={Frame} alt="B2b Logo" />
        </div>
        <div className="sloganDiv-signup">
          <img
            className="illustration-signup"
            src={Illustration}
            alt="illustration"
          />
          <h3 className="slogon-signup">
            Business Customer Supplies Ordering Solution
          </h3>
        </div>
      </div>
      <div className="rightDiv-signup">
        <div className="upperDiv-signup">
          <h3 className="admin-signup">Business Customer Manager</h3>
          <LangDropDown />
          {/* <select className="lang-signup">
            <option>English (UK)</option>
            <option>Arabic (KSA)</option>
          </select> */}
        </div>
        <div className="lowerDiv-signup">
          <div className="signUpDiv">
            Create Account
            {/* <p className="signUp"></p> */}
          </div>

          <input
            className="signup-input"
            type="text"
            id="fName"
            placeholder="Full Name"
            // onChange={(e) => setEmail(e.target.value)}
            onChange={(e) => setValues({ ...values, fName: e.target.value })}
          />
          <input
            className="signup-input"
            type="email"
            id="email"
            placeholder="Email Address"
            // onChange={(e) => setEmail(e.target.value)}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
          <input
            className="signup-input"
            type="text"
            id="companyName"
            placeholder="Add Company Name"
            // onChange={(e) => setEmail(e.target.value)}
            onChange={(e) =>
              setValues({ ...values, companyName: e.target.value })
            }
          />
          <input
            className="signup-input"
            type="text"
            id="custCategory"
            placeholder="Select Customer Category"
            // onChange={(e) => setEmail(e.target.value)}
            onChange={(e) =>
              setValues({ ...values, custCategory: e.target.value })
            }
          />
          <input
            className="signup-input"
            type="password"
            id="password"
            placeholder="Password"
            // onChange={(e) => setPassword(e.target.value)}
            onChange={(e) => setValues({ ...values, password: e.target.value })}
          />
          <input
            className="signup-input"
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            // onChange={(e) => setPassword(e.target.value)}
            onChange={(e) =>
              setValues({ ...values, confirmPassword: e.target.value })
            }
          />
          <div className="checkbox-paragraph">
            <Checkbox />
          </div>
          <button className="create-btn" type="submit" onClick={myFunction}>
            Create Account
          </button>

          {/* <p>
        <a className="modelForgetBtn" href="/ForgetPassword">
          Forgot Password ?
        </a>
      </p> */}
          <p className="signup-paragraph">
            Already have an account ? &nbsp;
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
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
