import React from "react";
import "./Users.css";
import addProductBtn from "../../../../Assets/Images/addProductBtn.png";
import SearchRange from "../../../SearchRangePicker/SearchRange";
import UserTable from "../usersTable/UserTable";
import { useNavigate } from "react-router-dom";
const Users = () => {
  const navigate = useNavigate();
  const navigatorNewUser = () => {
    navigate("/layout/newUser");
  };
  return (
    <div className="users-container">
      <div className="users-add-btn-div">
        <span className="customer-manager-span">Customers Managers</span>
        <button className="add-manager-btn" onClick={navigatorNewUser}>
          <img
            src={addProductBtn}
            alt="add-sign-box"
            style={{ width: 24, marginRight: 10 }}
          />
          Add Customer Manager
        </button>
      </div>
      <>
        <SearchRange />
      </>
      <div className="users-table-div">
        <UserTable />
      </div>
    </div>
  );
};

export default Users;
