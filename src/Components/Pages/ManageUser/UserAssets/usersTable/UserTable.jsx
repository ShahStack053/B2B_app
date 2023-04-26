import React from "react";
import { Switch, Table } from "antd";
import Swal from "sweetalert2";
import { useState } from "react";
import { DashOutlined, EyeOutlined, FormOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserTable = ({ userData, setUserData, pagination, setPagination }) => {
  // console.log("userData===>", userData);
  const [currentPage, setCurrentPage] = useState();
  const navigate = useNavigate();
  const [rowID, setRowID] = useState();

  const viewClickHandler = (label) => {
    navigate("/main/newUser", { state: { label, rowID } });
  };

  const editClickHandler = (label) => {
    navigate("/main/newUser", { state: { label, rowID } });
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
    Swal.fire("Status changed", "", "success");
    axios({
      method: "post",
      url: "https://api-customer-dev.b2bprice.store/api/BCUser/ChangeUserStatus",
      headers: {
        Authorization: `Bearer ${localStorage.AuthToken}`,
        "Content-Type": "application/json",
      },
      data,
    });
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
              <Space>{<DashOutlined />}</Space>
            </Dropdown>
          </Space>
        </div>
      ),
      // width: "10%",
    },
  ];

  const items = [
    {
      label: <div onClick={() => viewClickHandler("View")}>View</div>,
      key: "1",
      icon: <EyeOutlined onClick={() => viewClickHandler("View")} />,
    },
    {
      label: <div onClick={() => editClickHandler("Edit")}>Edit</div>,
      key: "2",
      icon: <FormOutlined onClick={() => editClickHandler("Edit")} />,
    },
  ];

  const menuProps = {
    items,
  };
  return (
    <>
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
    </>
  );
};

export default UserTable;
