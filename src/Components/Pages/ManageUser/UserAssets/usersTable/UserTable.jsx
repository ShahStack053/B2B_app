import React from "react";
import { Switch, Table } from "antd";
import Swal from "sweetalert2";
// import { Pagination } from "antd";
import { useState } from "react";
import { DashOutlined, EyeOutlined, FormOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import axios from "axios";
const items = [
  {
    label: "View",
    key: "1",
    icon: <EyeOutlined />,
  },
  {
    label: "Edit",
    key: "2",
    icon: <FormOutlined />,
  },
];
const menuProps = {
  items,
};
const UserTable = ({ userData, setUserData, pagination, setPagination }) => {
  console.log("userData===>", userData);
  const [currentPage, setCurrentPage] = useState();

  const paginationHandler = (page) => {
    console.log("page===>", page);
    // console.log("currentpage===>", currentPage);
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
        // console.log("SearchData====>", res.data.data);
        setUserData(res.data.data);
        // console.log("pagination1111=>>>", res.data);
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
    console.log("status============>", status);
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
            fontSize: "12px",
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
            fontSize: "12px",
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
            fontSize: "12px",
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
            fontSize: "12px",
          }}
        >
          {text}
        </div>
      ),
      width: "15.5%",
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
              fontSize: "12px",
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
            fontSize: "12px",
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
      render: (text) => (
        <div
          style={{
            color: "#000000",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "12px",
            textAlign: "center",
          }}
        >
          <Space>
            <Dropdown menu={menuProps}>
              <Space>{<DashOutlined />}</Space>
            </Dropdown>
          </Space>
        </div>
      ),
      // width: "10%",
    },
  ];
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
      {/* <Pagination
        total={pagination.totalRecords}
        onChange={(page) => paginationHandler(page)}
        showTotal={(total, range) =>
          `${range[0]}-${range[1]} of ${total} items`
        }
        defaultPageSize={10}
        defaultCurrent={currentPage}
      /> */}
    </>
  );
};

export default UserTable;
