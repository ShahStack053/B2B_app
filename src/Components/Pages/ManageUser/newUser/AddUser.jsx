import React from "react";
import "./AddUser.css";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import UserPhoto from "../UserAssets/userPhoto/UserPhoto";

const AddUser = () => {
  const location = useLocation();
  // const view = location.state.label;
  return (
    <div className="add-user-container">
      {location.state.label === "View" ||
      location.state.label === "Edit" ? null : (
        <div className="manager-customer-div">
          <Link to="/main/manageUser">
            <ArrowLeftOutlined className="new-manager-arrow" />
          </Link>
          <span className="customer-manager-span">Customers Manager</span>
        </div>
      )}
      <div className="manager-detail-box-div">
        <div className="manager-detail-title-div">
          <span className="manager-detail-span">Manager Details</span>
        </div>
        <div className="manager-detail-div">
          {location.state.label === "View" ||
          location.state.label === "Edit" ? (
            <>
              <div>
                <span className="manager-name-span">Manager Name</span>
                <span className="managerName-value-span">Raza Shah</span>
                <span className="manager-email-span">Email Address</span>
                <span className="manager-emailValue-span">raza@gmail.com</span>
                <span className="manager-whatsappNo-span">Whatsapp Number</span>
                <span className="manager-whatsappNo-value-span">
                  +923420518053
                </span>
              </div>
              <div>
                <span className="manager-nameArabic-span">
                  Manager Name (Arabic)
                </span>
                <span className="managerName-arabic-span">تيتيت</span>
                <span className="manager-mobileNo-span">Mobile Number</span>
                <span className="manager-mobileNo-value-span">
                  +923420518053
                </span>
              </div>
            </>
          ) : null}
          {location.state.label === "addUser" ? (
            <>
              <div>
                <span className="manager-name-span">Manager Name</span>
                <span className="managerName-value-span">Raza Shah</span>
                <span className="manager-mobileNo-span">Mobile Number</span>
                <span className="manager-mobileNo-value-span">
                  +923420518053
                </span>
              </div>
              <div>
                <span className="manager-nameArabic-span">
                  Manager Name (Arabic)
                </span>
                <span className="managerName-arabic-span">تيتيت</span>
                <span className="manager-whatsappNo-span">Whatsapp Number</span>
                <span className="manager-whatsappNo-value-span">
                  +923420518053
                </span>
              </div>
              <div>
                <span className="manager-email-span">Email Address</span>
                <span className="manager-emailValue-span">raza@gmail.com</span>
              </div>
            </>
          ) : null}
          {location.state.label === "View" ||
          location.state.label === "Edit" ? (
            <div>
              <span className="manager-cPass-span">Manager Customer Photo</span>
              <div className="image-div">
                <div>
                  <UserPhoto className="user-image" />
                </div>
                <span className="manager-customer-span">
                  Manager Customer Photo
                </span>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      {location.state.label === "View" ||
      location.state.label === "Edit" ? null : (
        <div className="resetpassword-box">
          <span className="reset-password-span">Set Password</span>
          <div className="reset-div">
            <div>
              <span className="manager-Pass-span">Password*</span>
              <span className="manager-PassValue-span">123</span>
            </div>
            <div style={{ marginLeft: 40 }}>
              <span className="manager-cPass-span">Confirm Password*</span>
              <span className="manager-cPassValue-span">raza@gmail.com</span>
            </div>
          </div>
        </div>
      )}
      {location.state.label === "View" ||
      location.state.label === "Edit" ? null : (
        <div className="manager-detail-btn-div">
          <button className="save-info-btn">Save Information</button>
          <button className="cancel-btn">Cancel</button>
        </div>
      )}
      {location.state.label === "Edit" ? (
        <div className="manager-detail-btn-div">
          <button className="save-info-btn">Update Information</button>
          <button className="cancel-btn">Cancel</button>
        </div>
      ) : null}
    </div>
  );
};

export default AddUser;
