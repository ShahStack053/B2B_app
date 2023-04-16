import React from "react";
import "./AddUser.css";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const AddUser = () => {
  return (
    <div className="add-user-container">
      <div className="manager-customer-div">
        <Link to="/layout/manageUser">
          <ArrowLeftOutlined className="new-manager-arrow" />
        </Link>
        <span className="customer-manager-span">Customers Manager</span>
      </div>
      <div className="manager-detail-box-div">
        <div className="manager-detail-title-div">
          <span className="manager-detail-span">Manager Details</span>
        </div>
        <div className="manager-detail-div">
          <div>
            <span className="manager-id-span">Manager ID</span>
            <span className="managerId-value-span">123</span>
            <span className="manager-email-span">Email Address</span>
            <span className="manager-emailValue-span">raza@gmail.com</span>
          </div>
          <div>
            <span className="manager-name-span">Manager Name</span>
            <span className="managerName-value-span">Raza Shah</span>
            <span className="manager-mobileNo-span">Mobile Number</span>
            <span className="manager-mobileNo-value-span">+923420518053</span>
          </div>
          <div>
            <span className="manager-nameArabic-span">
              Manager Name (Arabic)
            </span>
            <span className="managerName-arabic-span">تيتيت</span>
            <span className="manager-whatsappNo-span">Whatsapp Number</span>
            <span className="manager-whatsappNo-value-span">+923420518053</span>
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
