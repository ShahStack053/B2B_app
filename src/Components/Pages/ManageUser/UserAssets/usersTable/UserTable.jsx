import React from "react";
import { Switch, Table } from "antd";
import Swal from "sweetalert2";
import { useState } from "react";

import {
  // DashOutlined,
  EyeOutlined,
  FormOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import axios from "axios";
import Dashes from "../../../../../Assets/Images/Dashes.png";
import { useNavigate } from "react-router-dom";

const UserTable = ({ userData, setUserData, pagination, setPagination }) => {
  // console.log("userData===>", userData);
  const [currentPage, setCurrentPage] = useState();
  const navigate = useNavigate();
  const [id, setRowID] = useState();

  const viewClickHandler = (label) => {
    navigate("/main/newUser", { state: { label, id } });
  };

  const editClickHandler = (label) => {
    navigate("/main/newUser", { state: { label, id } });
  };

  const deleteClickHandler = () => {
    Swal.fire({
      title: "Do you want to delete user?",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axios({
          method: "Delete",
          url: `https://api-customer-dev.b2bprice.store/api/BCUser/DeleteById?Id=${id}&BCId=2`,
          headers: {
            Authorization: `Bearer ${localStorage.AuthToken}`,
            "Content-Type": "application/json",
          },
        }).then(
          (res) => {
            Swal.fire("User Deleted Successfully", "", "success");
            console.log("User Deleted successful");
          },
          (err) => {
            console.log(err);
            Swal.fire("User Deletion Failed", "", "error");
          }
        );
      }
    });
  };

  const paginationHandler = (page) => {
    // console.log("page===>", page);
    setCurrentPage(page);
    setUserData([]);
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
        setUserData(res.data.data);
        setPagination(res.data);
      },
      (err) => {
        console.log("err===>", err);
      }
    );
  };

  const onChangeStatus = (id, status) => {
    const obj = {
      id,
      status,
    };
    // console.log("status============>", status);
    // console.log("row id===>", id);
    const data = JSON.stringify(obj);

    axios({
      method: "post",
      url: "https://api-customer-dev.b2bprice.store/api/BCUser/ChangeUserStatus",
      headers: {
        Authorization: `Bearer ${localStorage.AuthToken}`,
        "Content-Type": "application/json",
      },
      data,
    }).then(
      (res) => {
        Swal.fire("Status Changed Successfully", "", "success");
        console.log("Status Changed successful");
      },
      (err) => {
        console.log(err);
        Swal.fire("Status Changed Failed", "", "error");
      }
    );
  };

  const columns = [
    {
      title: (
        <div
          style={{
            color: "#606060",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontSize: "12.2195px",
            fontWeight: 400,
            textAlign: "center",
          }}
        >
          ID
        </div>
      ),
      dataIndex: "id",
      key: "id",
      ellipsis: true,
      render: (text) => (
        <div
          style={{
            color: "#000000",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "13px",
            textAlign: "center",
          }}
        >
          {text}
        </div>
      ),
      // width: "7%",
    },
    {
      title: (
        <div
          style={{
            color: "#606060",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "12.2195px",
            // textAlign: "center",
          }}
        >
          Manager Name
        </div>
      ),
      dataIndex: "enFullName",
      key: "enFullName",
      ellipsis: true,
      render: (text) => (
        <div
          style={{
            color: "#000000",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "13px",
          }}
        >
          {text}
        </div>
      ),
      // width: "15%",
    },
    {
      title: (
        <div
          style={{
            color: "#606060",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontSize: "12.2195px",
            fontWeight: 400,
            // textAlign: "center",
          }}
        >
          Mobile Number
        </div>
      ),
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      ellipsis: true,
      render: (text) => (
        <div
          style={{
            color: "#000000",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "13px",
            // textAlign: "center",
          }}
        >
          {text}
        </div>
      ),
      // width: "13%",
    },
    {
      title: (
        <div
          style={{
            color: "#606060",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "12.2195px",
          }}
        >
          Email Address
        </div>
      ),
      dataIndex: "email",
      key: "email",
      ellipsis: true,
      render: (text) => (
        <div
          style={{
            color: "#000000",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "13px",
          }}
        >
          {text}
        </div>
      ),
      width: "17%",
    },
    {
      title: (
        <div
          style={{
            color: "#606060",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontSize: "12.2195px",
            fontWeight: 400,
            // textAlign: "center",
          }}
        >
          Created Date
        </div>
      ),
      dataIndex: "createdOn",
      key: "createdOn",
      ellipsis: true,
      render: (text) => {
        const date = new Date(text);
        const month = new Intl.DateTimeFormat("en-US", {
          month: "short",
        }).format(date);
        const day = date.getDate();
        const year = date.getFullYear();
        const formattedDate = `${month} ${day}, ${year}`;

        return (
          <div
            style={{
              color: "#000000",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "13px",
              // textAlign: "center",
            }}
          >
            {formattedDate}
          </div>
        );
      },
    },
    {
      title: (
        <div
          style={{
            color: "#606060",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "12.2195px",
            textAlign: "center",
          }}
        >
          Role
        </div>
      ),
      dataIndex: "role",
      key: "role",
      ellipsis: true,
      render: (text) => (
        <div
          style={{
            color: "#000000",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "13px",
            textAlign: "center",
          }}
        >
          {text}
        </div>
      ),
      // width: "13%",
    },
    {
      title: (
        <div
          style={{
            color: "#606060",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontSize: "12.2195px",
            fontWeight: 400,
            textAlign: "center",
          }}
        >
          Status
        </div>
      ),
      dataIndex: "activeStatus",
      key: "activeStatus",
      ellipsis: true,
      render: (props, row) => (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Switch
            defaultChecked={props}
            // defaultChecked
            onChange={() => onChangeStatus(row.id, !props)}
          />
        </div>
      ),
      // width: "7%",
    },

    {
      title: (
        <div
          style={{
            color: "#606060",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "12.2195px",
            textAlign: "center",
          }}
        >
          Action
        </div>
      ),
      dataIndex: "action",
      key: "action",
      ellipsis: true,
      render: (props, row) => (
        <div
          style={{
            color: "#000000",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "13px",
            textAlign: "center",
          }}
        >
          <Space>
            <Dropdown menu={menuProps} onClick={() => setRowID(row.id)}>
              {/* <Space>{<DashOutlined />}</Space> */}
              <Space>
                <img
                  src={Dashes}
                  alt="Dashes"
                  style={{
                    width: 20,
                    height: 5,
                    opacity: "0.7",
                    // color: "grey",
                  }}
                />
              </Space>
            </Dropdown>
          </Space>
        </div>
      ),
      // width: "10%",
    },
  ];

  const items = [
    {
      label: (
        <button
          style={{
            border: "none",
            background: "none",
            color: "#252733",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => viewClickHandler("View")}
        >
          <EyeOutlined style={{ color: "rgba(23, 121, 184, 1)" }} />
          &nbsp;&nbsp; View
        </button>
      ),
      key: "1",
    },
    {
      label: (
        <button
          style={{
            border: "none",
            background: "none",
            color: "#252733",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => editClickHandler("Edit")}
        >
          <FormOutlined style={{ color: "rgba(23, 121, 184, 1)" }} />
          &nbsp;&nbsp; Edit
        </button>
      ),
      key: "2",
    },
    {
      label: (
        <button
          style={{
            border: "none",
            background: "none",
            color: " #C70000",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={deleteClickHandler}
        >
          <DeleteOutlined style={{ color: " #C70000" }} />
          &nbsp;&nbsp; Delete
        </button>
      ),
      key: "3",
    },
  ];

  const menuProps = {
    items,
  };
  return (
    <div>
      <Table
        columns={columns}
        dataSource={userData}
        pagination={{
          current: currentPage,
          pageSize: 10,
          totalPages: pagination.totalPages,
          total: pagination.totalRecords,
          onChange: (page) => {
            paginationHandler(page);
          },
          // setCurrentPage(page)
          showTotal: (total, range) =>
            ` ${range[0]}-${range[1]} of ${total} items`,
        }}
      />
    </div>
  );
};

export default UserTable;
