import React from "react";
import "./AddUser.css";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import UserPhoto from "../UserAssets/userPhoto/UserPhoto";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const location = useLocation();
  const id = location.state.id;
  // ============================== API For user get by id ====================================
  const [bcData, setBcData] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://api-customer-dev.b2bprice.store/api/BCUser/GetByIdAsync?Id=${id}&BcId=2`,
      headers: {
        Authorization: `Bearer ${localStorage.AuthToken}`,
        "Content-Type": "application/json",
      },
    }).then(
      (res) => {
        // console.log("userBy ID Data", res.data.data);
        setBcData(res.data.data);
      },
      (err) => {
        console.log(err);
      }
    );
  }, [id]);

  // =================================API for update user================================
  const [bcUpdatedValues, setBcUpdatedValues] = useState({
    arFullName: bcData.arFullName,
    bcId: 2,
    enFullName: bcData.enFullName,
    phoneNumber: bcData.phoneNumber,
    primaryBcUser: false,
    whatsAppNumber: bcData.whatsAppNumber,
  });

  const updateUser = () => {
    const updatedBcData = { ...bcData, ...bcUpdatedValues };
    // console.log("BC updated values", updatedBcData);
    const data = JSON.stringify(updatedBcData);

    axios({
      method: "Post",
      url: "https://api-customer-dev.b2bprice.store/api/BCUser/UpdateBCUser",
      headers: {
        Authorization: `Bearer ${localStorage.AuthToken}`,
        "Content-Type": "application/json",
      },
      data,
    }).then(
      (res) => {
        Swal.fire("Updated Successfully", "", "success");
        console.log("Update successful");
      },
      (err) => {
        console.log(err);
        Swal.fire("Updated Failed", "", "error");
      }
    );
  };

  // =================================API for Add user===============================
  const [createUserData, setCreateUserData] = useState({
    arFullName: "",
    bcId: 2,
    bcName: "Muhammad Faizan",
    confrimPassword: "",
    email: "",
    enFullName: "",
    password: "",
    passwordExpired: false,
    phoneNumber: "",
    primaryBcUser: false,
    whatsAppNumber: "",
  });

  // console.log("create Data=================>>>>>>>>>.", createUserData);
  const createUser = () => {
    const data = JSON.stringify(createUserData);
    axios({
      method: "Post",
      url: "https://api-customer-dev.b2bprice.store/api/BCUser/CreateBCUser",
      headers: {
        Authorization: `Bearer ${localStorage.AuthToken}`,
        "Content-Type": "application/Json",
      },
      data,
    }).then(
      (res) => {
        Swal.fire("User created Successfullydddddddddddd", "", "success");
        console.log("user created successful");
      },
      (err) => {
        console.log(err);
        Swal.fire("user creation Failed", "", "error");
      }
    );
  };
  const navigate = useNavigate();
  const cancelNavigate = () => {
    navigate("/main/manageUser");
  };
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
          {location.state.label === "View" ? (
            <>
              <div>
                <span className="manager-name-span">Manager Name*</span>
                <span className="managerName-value-span">
                  {bcData.enFullName}
                </span>
                <span className="manager-email-span">Email Address*</span>
                <span className="manager-emailValue-span">{bcData.email}</span>
                <span className="manager-whatsappNo-span">
                  Whatsapp Number*
                </span>
                <span className="manager-whatsappNo-value-span">
                  {bcData.whatsAppNumber}
                </span>
              </div>
              <div>
                <span className="manager-nameArabic-span">
                  Manager Name (العربية)*
                </span>
                <span className="managerName-arabic-span">
                  {bcData.arFullName}
                </span>
                <span className="manager-mobileNo-span">Mobile Number*</span>
                <span className="manager-mobileNo-value-span">
                  {bcData.phoneNumber}
                </span>
              </div>
            </>
          ) : null}
          {location.state.label === "Edit" ? (
            <>
              <div>
                <span className="manager-name-span">Manager Name*</span>
                <input
                  className="managerName-value-span"
                  type="text"
                  defaultValue={bcData.enFullName}
                  onChange={(e) =>
                    setBcUpdatedValues({
                      ...bcUpdatedValues,
                      enFullName: e.target.value,
                    })
                  }
                  // onChange={handleInputChange}
                />
                <span className="manager-email-span">Email Address*</span>
                <span className="manager-emailValue-span">{bcData.email}</span>
                <span className="manager-whatsappNo-span">
                  Whatsapp Number*
                </span>

                <input
                  className="manager-whatsappNo-value-span"
                  type="text"
                  //
                  defaultValue={bcData.whatsAppNumber}
                  onChange={(e) =>
                    setBcUpdatedValues({
                      ...bcUpdatedValues,
                      whatsAppNumber: e.target.value,
                    })
                  }
                  // onChange={handleInputChange}
                />
              </div>
              <div>
                <span className="manager-nameArabic-span">
                  Manager Name (العربية)*
                </span>

                <input
                  dir="RTL"
                  className="managerName-arabic-span"
                  type="text"
                  defaultValue={bcData.arFullName}
                  onChange={(e) =>
                    setBcUpdatedValues({
                      ...bcUpdatedValues,
                      arFullName: e.target.value,
                    })
                  }
                  // onChange={handleInputChange}
                />
                <span className="manager-mobileNo-span">Mobile Number*</span>
                <input
                  className="manager-mobileNo-value-span"
                  type="text"
                  defaultValue={bcData.phoneNumber}
                  onChange={(e) =>
                    setBcUpdatedValues({
                      ...bcUpdatedValues,
                      phoneNumber: e.target.value,
                    })
                  }
                  // onChange={handleInputChange}
                />
              </div>
            </>
          ) : null}
          {location.state.label === "addUser" ? (
            <>
              <div>
                <span className="manager-name-span">Manager Name*</span>
                <input
                  className="managerName-value-input"
                  type="text"
                  placeholder="Manager Name (English)"
                  onChange={(e) =>
                    setCreateUserData({
                      ...createUserData,
                      enFullName: e.target.value,
                    })
                  }
                />

                <span className="manager-mobileNo-span">Mobile Number*</span>
                <input
                  className="manager-mobileNo-value-input"
                  type="text"
                  placeholder="Mobile Number"
                  defaultValue={966}
                  onChange={(e) =>
                    setCreateUserData({
                      ...createUserData,
                      phoneNumber: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <span className="manager-nameArabic-span">
                  Manager Name (العربية)*
                </span>

                <input
                  className="managerName-arabic-input"
                  type="text"
                  placeholder="Manager Name (العربية)"
                  onChange={(e) =>
                    setCreateUserData({
                      ...createUserData,
                      arFullName: e.target.value,
                    })
                  }
                />
                <span className="manager-whatsappNo-span">
                  Whatsapp Number*
                </span>

                <input
                  className="manager-whatsappNo-value-input"
                  type="text"
                  placeholder="Whatsapp Number"
                  defaultValue={966}
                  onChange={(e) =>
                    setCreateUserData({
                      ...createUserData,
                      whatsAppNumber: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <span className="manager-email-span">Email Address*</span>

                <input
                  className="manager-emailValue-input"
                  type="email"
                  placeholder="Email Address"
                  onChange={(e) =>
                    setCreateUserData({
                      ...createUserData,
                      email: e.target.value,
                    })
                  }
                />
              </div>
            </>
          ) : null}
          {location.state.label === "View" ||
          location.state.label === "Edit" ? (
            <div>
              <span className="manager-cPass-span">
                Manager Customer Photo*
              </span>
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

              <input
                className="manager-PassValue-input"
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  setCreateUserData({
                    ...createUserData,
                    password: e.target.value,
                  })
                }
              />
            </div>
            <div style={{ marginLeft: 40 }}>
              <span className="manager-cPass-span">Confirm Password*</span>

              <input
                className="manager-cPassValue-input"
                type="password"
                placeholder="Confirm Password"
                onChange={(e) =>
                  setCreateUserData({
                    ...createUserData,
                    confrimPassword: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>
      )}
      {location.state.label === "View" ||
      location.state.label === "Edit" ? null : (
        <div className="manager-detail-btn-div">
          <button className="save-info-btn" onClick={createUser}>
            Save Information
          </button>
          <button className="cancel-btn">Cancel</button>
        </div>
      )}
      {location.state.label === "Edit" ? (
        <div className="manager-detail-btn-div">
          <button className="save-info-btn" onClick={updateUser}>
            Update Information
          </button>
          <button className="cancel-btn" onClick={cancelNavigate}>
            Cancel
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default AddUser;
