import React from "react";
import "./Users.css";
import addProductBtn from "../../../../Assets/Images/addProductBtn.png";
import SearchRange from "../../../SearchRangePicker/SearchRange";
import UserTable from "../UserAssets/usersTable/UserTable";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const Users = () => {
  const navigate = useNavigate();
  const navigatorNewUser = () => {
    navigate("/layout/newUser");
  };
  const [searchValues, setSearchValues] = useState({
    search: "",
    dateFrom: "",
    dateTo: "",
    status: "",
  });
  console.log("SearchName=========>>>", searchValues.search);
  console.log("dateTo=========>>>", searchValues.dateTo);
  console.log("dateFrom=========>>>", searchValues.dateFrom);
  console.log("status=========>>>", searchValues.status);

  const [userData, setUserData] = useState("");

  useEffect(() => {
    var data = JSON.stringify({});
    axios({
      method: "Post",
      url: "https://api-customer-dev.b2bprice.store/api/BCUser/GetAll",
      headers: {
        Authorization: `Bearer ${localStorage.AuthToken}`,
        "Content-Type": "application/json",
      },
      data,
    }).then(
      (res) => {
        // debugger;
        console.log("SearchData====>", res.data.data);
        setUserData(res.data.data);
      },
      (err) => {
        console.log("err===>", err);
      }
    );
  }, []);

  const onChangeRange = (value, dateString) => {
    // console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
    setSearchValues({
      ...searchValues,
      dateFrom: dateString[0],
      dateTo: dateString[1],
    });
  };
  const onChangeStatus = (value, selectedStatus) => {
    console.log("selectedstatus=>.>>>", selectedStatus);
    setSearchValues({
      ...searchValues,
      status: selectedStatus,
    });
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
        <SearchRange
          setSearchValues={setSearchValues}
          searchValues={searchValues}
          onChangeRange={onChangeRange}
          onChangeStatus={onChangeStatus}
        />
      </>
      <div className="users-table-div">
        <UserTable userData={userData} />
      </div>
    </div>
  );
};

export default Users;
