import React from "react";
import { Table } from "antd";
import { useState } from "react";
import {
  DashOutlined,
  UserOutlined,
  DeleteOutlined,
  EyeOutlined,
  FormOutlined,
  CloseCircleOutlined,
  CarryOutOutlined,
} from "@ant-design/icons";
import { Dropdown, Space } from "antd";

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
  {
    label: "Cancel Order",
    key: "3",
    icon: <CloseCircleOutlined />,
  },
  {
    label: "In-Transit",
    key: "4",
    icon: <UserOutlined />,
  },
  {
    label: "Mark as Delivered",
    key: "5",
    icon: <CarryOutOutlined />,
  },
  {
    label: "Delete",
    key: "6",
    icon: <DeleteOutlined />,
    danger: true,
  },
];
const menuProps = {
  items,
};

// const data = [
//   {
//     key: "1",
//     orderID: "11",
//     customer: "Brooklyn",
//     createdBy: "Admin",
//     orderDate: "16 Jun 2022",
//     deliveryDate: "16 Jun 2022",
//     priority: "Urgent",
//     status: "Cancelled",
//     paymentStatus: "Paid",
//     tAmount: "8560",
//     action: <DashOutlined />,
//   },
// ];

const ManageOrderTable = ({ ordersData }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const data = ordersData.map((product, index) => ({
    key: index + 1,
    orderID: product.id,
    customer: product.bcName,
    createdBy: product.createdBy,
    orderDate: product.orderDate,
    deliveryDate: product.fulfilledDate,
    priority: product.deliveryType,
    status: product.status,
    paymentStatus: product.paymentStatus,
    tAmount: product.totalAmount,
    action: product.action,
  }));
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
          Order ID
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
      width: "7%",
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
          Customer
        </div>
      ),
      dataIndex: "bcName",
      key: "bcName",
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
      width: "13%",
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
          Created By
        </div>
      ),
      dataIndex: "createdBy",
      key: "createdBy",
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
          Order Date
        </div>
      ),
      dataIndex: "orderDate",
      key: "orderDate",
      ellipsis: true,
      render: (text) => (
        <div
          style={{
            color: "#000000",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "10px",
          }}
        >
          {text}
        </div>
      ),
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
          Delivery Date
        </div>
      ),
      dataIndex: "fulfilledDate",
      key: "fulfilledDate",
      ellipsis: true,
      render: (text) => (
        <div
          style={{
            color: "#000000",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "10px",
            textAlign: "center",
          }}
        >
          {text}
        </div>
      ),
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
          Priority
        </div>
      ),
      dataIndex: "deliveryType",
      key: "deliveryType",
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
      width: "11%",
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
      dataIndex: "status",
      key: "status",
      ellipsis: true,
      render: (text) => (
        <div
          style={{
            color: "#000000",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "10px",
            textAlign: "center",
          }}
        >
          {text}
        </div>
      ),
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
          Payment Status
        </div>
      ),
      dataIndex: "paymentStatus",
      key: "paymentStatus",
      ellipsis: true,
      render: (paymentStatus) => (
        <div
          style={{
            color: {
              ...(paymentStatus === "Paid" ? "#028C10" : "#C70000"),
            },
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "10px",
            textAlign: "center",
          }}
        >
          {paymentStatus}
        </div>
      ),
      width: "11%",
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
          Total Amount
        </div>
      ),
      dataIndex: "totalAmount",
      key: "totalAmount",
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
    },
  ];
  return (
    <Table
      columns={columns}
      dataSource={ordersData}
      pagination={{
        current: currentPage,
        pageSize: 5,
        total: data.length,
        onChange: (page) => setCurrentPage(page),
        showTotal: (total, range) =>
          ` ${range[0]}-${range[1]} of ${total} items`,
      }}
    />
  );
};

export default ManageOrderTable;
