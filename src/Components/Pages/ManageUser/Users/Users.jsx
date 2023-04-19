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
    search: null,
    dateFrom: null,
    dateTo: null,
    status: null,
    date: null,
    name: null,
    pageNumber: 1,
    pageSize: 10,
    sortColumn: "id",
    sortOrder: "z",
    userId: [],
  });
  // console.log("searchValues=========>>>", searchValues);

  const [userData, setUserData] = useState([]);
  const [pagination, setPagination] = useState("");

  useEffect(() => {
    var data = JSON.stringify(searchValues);
    setUserData([]);
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
        // console.log("SearchData====>", res.data.data);
        setUserData(res.data.data);
        // console.log("pagination=>>>", res.data);
        setPagination(res.data);
      },
      (err) => {
        console.log("err===>", err);
      }
    );
  }, [searchValues]);

  const onChangeRange = (value, dateString) => {
    // console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
    setSearchValues({
      ...searchValues,
      dateFrom: dateString[0],
      dateTo: dateString[1],
    });
  };
  // const onChangeStatus = (value, selectedStatus) => {
  //   console.log("selectedstatus=>>>>", selectedStatus);
  //   setSearchValues({
  //     ...searchValues,
  //     status: selectedStatus,
  //   });
  // };

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
          // onChangeStatus={onChangeStatus}
        />
      </>
      <div className="users-table-div">
        <UserTable
          userData={userData}
          setUserData={setUserData}
          pagination={pagination}
          setPagination={setPagination}
          searchValues={searchValues}
        />
      </div>
    </div>
  );
};

export default Users;
