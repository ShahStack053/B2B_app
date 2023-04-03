import React, { useState } from "react";
import "./SignUp.css";
import Frame from "../../../Assets/Images/Frame.png";
import Illustration from "../../../Assets/Images/Illustration.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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

  console.log(
    "fname===>",
    values.fName,
    "email===>",
    values.email,
    "companyName===>",
    values.companyName,
    "custCategory===>",
    values.custCategory,
    "password===>",
    values.password,
    "confirmPassword===>",
    values.confirmPassword
  );

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
    <div className="flexContainer">
      <div className="leftDiv">
        <div className="logoDiv">
          <img className="logo" src={Frame} alt="B2b Logo" />
        </div>
        <div className="sloganDiv">
          <img className="illustration" src={Illustration} alt="illustration" />
          <h3 className="slogon">
            Business Customer Supplies Ordering Solution
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
            <p className="signUp">Create Account</p>
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
          <button className="submitBtn" type="submit" onClick={myFunction}>
            Create Account
          </button>

          {/* <p>
        <a className="modelForgetBtn" href="/ForgetPassword">
          Forgot Password ?
        </a>
      </p> */}
          <p className="paragraph">
            Already have an account? &nbsp;
            <Link className="modelForgetBtn" to="/">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
