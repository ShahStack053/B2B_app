import React from "react";
import { Table } from "antd";
import { useState } from "react";
import { DashOutlined, EyeOutlined, FormOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import StatusButton from "../statusButton/StatusButton";

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
const UserTable = ({ userData }) => {
  const [currentPage, setCurrentPage] = useState(1);

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
      dataIndex: "arFullName",
      key: "arFullName",
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
            // textAlign: "center",
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
          <StatusButton activeStatus />
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
    <Table
      columns={columns}
      dataSource={userData}
      pagination={{
        current: currentPage,
        pageSize: 10,
        total: userData.length,
        onChange: (page) => setCurrentPage(page),
        showTotal: (total, range) =>
          ` ${range[0]}-${range[1]} of ${total} items`,
      }}
    />
  );
};

export default UserTable;
