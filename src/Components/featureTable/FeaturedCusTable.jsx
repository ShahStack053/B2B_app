import { Table } from "antd";
import "./FeatureTable.css";
import { useState } from "react";
import userImage from "../../Assets/Images/userImage.png";

const data = [
  {
    key: "1",
    name: "Brooklyn Simmons",
    email: "raza@123.com",
    avatar: userImage,
    price: "SAR 108,560.93",
    orders: 856,
  },
  {
    key: "2",
    name: "Brooklyn Simmons",
    email: "raza@123.com",
    avatar: userImage,
    price: "SAR 1,560.93",
    orders: 865,
  },
  {
    key: "3",
    name: "raza Simmons",
    email: "raza@123.com",
    avatar: userImage,
    price: "SAR 108,560.93",
    orders: 846,
  },
  {
    key: "4",
    name: "Brooklyn Simmons",
    email: "raza@123.com",
    avatar: userImage,
    price: "SAR 108.93",
    orders: 866,
  },
  {
    key: "5",
    name: "Brooklyn Simmons",
    email: "raza@123.com",
    avatar: userImage,
    price: "SAR 108,880.93",
    orders: 886,
  },
];

const FeaturedCusTable = () => {
  const [sortedInfo, setSortedInfo] = useState({});

  const handleChange = (pagination, filters, sorter) => {
    setSortedInfo(sorter);
  };

  const columns = [
    {
      title: (
        <div
          style={{
            color: "#606060",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "12.2195px",
            width: 160,
          }}
        >
          Business Customer Name
        </div>
      ),
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order,
      ellipsis: true,
      render: (text, record) => (
        <div>
          <img
            src={record.avatar}
            alt="avatar"
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              marginRight: "14px",
            }}
          />
          <div style={{ display: "inline-block" }}>
            <div
              style={{
                color: "#252733",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "14px",
              }}
            >
              {text}
            </div>
            <div
              style={{
                color: "#929292",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "9.81154px",
              }}
            >
              {record.email}
            </div>
          </div>
        </div>
      ),
      width: "35%",
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
          Price
        </div>
      ),
      dataIndex: "price",
      key: "price",
      sorter: (a, b) =>
        parseFloat(a.price.replace(/[^0-9.-]+/g, "")) -
        parseFloat(b.price.replace(/[^0-9.-]+/g, "")),
      sortOrder: sortedInfo.columnKey === "price" && sortedInfo.order,
      ellipsis: true,
      render: (text) => (
        <div
          style={{
            color: "#000000",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "14px",
            width: "20%",
          }}
        >
          {text}
        </div>
      ),
      width: "20%",
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
            width: "10%",
          }}
        >
          Total Orders
        </div>
      ),
      dataIndex: "orders",
      key: "orders",
      sorter: (a, b) => a.orders - b.orders,
      sortOrder: sortedInfo.columnKey === "orders" && sortedInfo.order,
      ellipsis: true,
      render: (text) => (
        <div
          style={{
            color: "#000000",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "14px",
          }}
        >
          {text}
        </div>
      ),
      width: "22%",
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      onChange={handleChange}
      pagination={false}
    />
  );
};

export default FeaturedCusTable;
