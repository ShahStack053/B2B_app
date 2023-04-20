import React from "react";
import "./AddUser.css";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import UserPhoto from "../UserAssets/userPhoto/UserPhoto";
import { useState } from "react";

const AddUser = () => {
  const [isViewClicked, setIsViewClicked] = useState(false);
  return (
    <div className="add-user-container">
      <div className="manager-customer-div">
        <Link to="/main/manageUser">
          <ArrowLeftOutlined
            className="new-manager-arrow"
            setIsViewClicked={setIsViewClicked}
            isViewClicked={isViewClicked}
          />
        </Link>
        <span className="customer-manager-span">Customers Manager</span>
      </div>
      <div className="manager-detail-box-div">
        <div className="manager-detail-title-div">
          <span className="manager-detail-span">Manager Details</span>
        </div>
        <div className="manager-detail-div">
          <div>
            <span className="manager-name-span">Manager Name</span>
            <span className="managerName-value-span">Raza Shah</span>
            <span className="manager-email-span">Email Address</span>
            <span className="manager-emailValue-span">raza@gmail.com</span>
            <span className="manager-whatsappNo-span">Whatsapp Number</span>
            <span className="manager-whatsappNo-value-span">+923420518053</span>
          </div>
          <div>
            <span className="manager-nameArabic-span">
              Manager Name (Arabic)
            </span>
            <span className="managerName-arabic-span">تيتيت</span>
            <span className="manager-mobileNo-span">Mobile Number</span>
            <span className="manager-mobileNo-value-span">+923420518053</span>
          </div>
          {isViewClicked ? (
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
      <div className="resetpassword-box">
        <span className="reset-password-span">Reset Password</span>
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
      <div className="manager-detail-btn-div">
        <button className="save-info-btn">Save Information</button>
        <button className="cancel-btn">Cancel</button>
      </div>
    </div>
  );
};

export default AddUser;
