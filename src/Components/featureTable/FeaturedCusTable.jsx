import { Table } from "antd";
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
    orders: 856,
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
    orders: 866,
  },
];
const FeaturedCusTable = () => {
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (sorter) => {
    console.log(sorter);
    setSortedInfo(sorter);
  };
  // const setOrderSort = () => {
  //   setSortedInfo({
  //     order: "descend",
  //     columnKey: "orders",
  //   });
  // };

  const columns = [
    {
      title: (
        <div
          style={{
            color: "#606060",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
          }}
        >
          Business Customer Name
        </div>
      ),
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === "name" ? sortedInfo.order : null,
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
              marginRight: "10px",
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
    },

    //=================================Price================================
    {
      title: (
        <div
          style={{
            color: "#606060",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
          }}
        >
          Price
        </div>
      ),
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price,
      sortOrder: sortedInfo.columnKey === "price" ? sortedInfo.order : null,
      ellipsis: true,
      render: (text) => (
        <span
          style={{
            color: "#000000",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "14px",
          }}
        >
          {text}
        </span>
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
          }}
        >
          Total Orders
        </div>
      ),
      dataIndex: "orders",
      key: "orders",

      sorter: (a, b) => a.orders.length - b.orders.length,
      sortOrder: sortedInfo.columnKey === "orders" ? sortedInfo.order : null,
      ellipsis: true,
      render: (text) => (
        <span
          style={{
            color: "#000000",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "14px",
          }}
        >
          {text}
        </span>
      ),
    },
  ];
  return (
    <>
      {/* <Space
        style={{
          marginBottom: 16,
        }}
      >
        <Button onClick={setOrderSort}> Sort age </Button>
      </Space> */}
      <Table
        columns={columns}
        dataSource={data}
        onChange={handleChange}
        pagination={false}
      />
    </>
  );
};
export default FeaturedCusTable;
