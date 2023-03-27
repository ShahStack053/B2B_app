import React from "react";
import "./dummy.css";
import Frame from "../../../Assets/Images/Frame.png";
import Illustration from "../../../Assets/Images/Illustration.png";

const dummy = () => {
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
          <h3 className="admin">Business Customer Manger</h3>
          <select className="lang">
            <option>English (US)</option>
          </select>
        </div>
        <div className="lowerDiv">
          <div className="lLeftDiv"></div>
          <div className="lMiddleDiv">
            <div>
              <div className="signUpDiv">
                <h1 className="signUp">Sign In</h1>
              </div>
              <form className="signUpForm">
                <div className="inputFields">
                  <div>
                    <input
                      type="text"
                      id="email"
                      value=""
                      placeholder="Email Address"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      id="password"
                      value=""
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div>
                  <button className="submitBtn" type="submit">
                    Sign In
                  </button>

                  <p>
                    <a className="modelForgetBtn" href="/ForgetPassword">
                      Forgot Password ?
                    </a>
                  </p>

                  {/* <Link className="modelForgetBtn" to="/ForgetPassword">
                  Forgot Password ?
                </Link> */}
                </div>
              </form>
            </div>
          </div>

          <div className="lRightDiv"></div>
        </div>
      </div>
    </div>
  );
};

export default dummy;
