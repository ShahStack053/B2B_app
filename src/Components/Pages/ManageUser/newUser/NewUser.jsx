import React from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import UserPhoto from "../UserAssets/userPhoto/UserPhoto";

const NewUser = () => {
  const location = useLocation();
  let { id, label } = location.state;
  //   const id = location.state.id;
  const [bcData, setBcData] = useState([]);
  //   const [bcUpdatedValues, setBcUpdatedValues] = useState({});
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

  const updateUser = () => {
    const updatedBcData = { ...bcData, ...createUserData };
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
        Swal.fire("User created Successfully", "", "success");
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
      <div className="manager-customer-div">
        <Link to="/main/manageUser">
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
            <span className="manager-name-span">Manager Name*</span>
            <input
              className="managerName-value-input"
              type="text"
              placeholder="Manager Name (English)"
              defaultValue={label === "addUser" ? null : bcData.enFullName}
              readOnly={label === "View"}
              contentEditable={label === "Edit"}
              onChange={(e) =>
                setCreateUserData({
                  ...createUserData,
                  enFullName: e.target.value,
                })
              }
            />
            {label === "View" || label === "Edit" ? (
              <>
                <span className="manager-email-span">Email Address*</span>

                <input
                  className="manager-emailValue-input"
                  type="email"
                  placeholder="Email Address"
                  defaultValue={label === "addUser" ? null : bcData.email}
                  readOnly={label === "View" || label === "Edit"}
                  //   contentEditable={label === "Edit"}
                  onChange={(e) =>
                    setCreateUserData({
                      ...createUserData,
                      email: e.target.value,
                    })
                  }
                />
              </>
            ) : null}
            <span className="manager-mobileNo-span">Mobile Number*</span>
            <input
              className="manager-mobileNo-value-input"
              type="text"
              placeholder="Mobile Number"
              defaultValue={label === "addUser" ? +966 : bcData.phoneNumber}
              readOnly={label === "View"}
              contentEditable={label === "Edit"}
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
              defaultValue={label === "addUser" ? null : bcData.arFullName}
              readOnly={label === "View"}
              contentEditable={label === "Edit"}
              onChange={(e) =>
                setCreateUserData({
                  ...createUserData,
                  arFullName: e.target.value,
                })
              }
            />
            <span className="manager-whatsappNo-span">Whatsapp Number*</span>

            <input
              className="manager-whatsappNo-value-input"
              type="text"
              placeholder="Whatsapp Number"
              defaultValue={label === "addUser" ? +966 : bcData.whatsAppNumber}
              readOnly={label === "View"}
              contentEditable={label === "Edit"}
              onChange={(e) =>
                setCreateUserData({
                  ...createUserData,
                  whatsAppNumber: e.target.value,
                })
              }
            />
          </div>

          {label === "View" || label === "Edit" ? (
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
          ) : (
            <div>
              <span className="manager-email-span">Email Address*</span>

              <input
                className="manager-emailValue-input"
                type="email"
                placeholder="Email Address"
                defaultValue={label === "addUser" ? null : bcData.email}
                readOnly={label === "View" || label === "Edit"}
                //   contentEditable={label === "Edit"}
                onChange={(e) =>
                  setCreateUserData({
                    ...createUserData,
                    email: e.target.value,
                  })
                }
              />
            </div>
          )}
        </div>
      </div>
      {label === "addUser" ? (
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
      ) : null}
      {label === "addUser" || label === "Edit" ? (
        <div className="manager-detail-btn-div">
          {label === "addUser" ? (
            <button className="save-info-btn" onClick={createUser}>
              Save Information
            </button>
          ) : (
            <button className="save-info-btn" onClick={updateUser}>
              Update Information
            </button>
          )}
          <button className="cancel-btn" onClick={cancelNavigate}>
            Cancel
          </button>
        </div>
      ) : null}
    </div>
  );
};
export default NewUser;
