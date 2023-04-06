import { Table } from "antd";
import { useState } from "react";
import rice from "../../Assets/Images/rice.png";

const data = [
  {
    key: "1",
    name: "Baked Goods",
    avatar: rice,
    price: "SAR 108,560.93",
    orders: 856,
  },
  {
    key: "2",
    name: "Pet Food",
    avatar: rice,
    price: "SAR 1,560.93",
    orders: 856,
  },
  {
    key: "3",
    name: "Baby Food",
    avatar: rice,
    price: "SAR 108,560.93",
    orders: 846,
  },
  {
    key: "4",
    name: "Baby Food",
    avatar: rice,
    price: "SAR 108.93",
    orders: 866,
  },
  {
    key: "5",
    name: "Baby Food",
    avatar: rice,
    price: "SAR 108,880.93",
    orders: 866,
  },
];
const FeaturedProductTable = () => {
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
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
            fontSize: "12.2195px",
            fontWeight: 400,
          }}
        >
          Product Name
        </div>
      ),
      dataIndex: "name",
      key: "name",
      // sorter: (a, b) => a.name.length - b.name.length,
      // sortOrder: sortedInfo.columnKey === "name" ? sortedInfo.order : null,
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order,
      ellipsis: true,
      render: (text, record) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={record.avatar}
            alt="Product Avatar"
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              marginRight: "10px",
            }}
          />
          <span
            style={{
              color: "#000000",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "14px",
            }}
          >
            {text}
          </span>
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
          }}
        >
          Value
        </div>
      ),
      dataIndex: "price",
      key: "price",
      // sorter: (a, b) => a.price - b.price,
      // sortOrder: sortedInfo.columnKey === "price" ? sortedInfo.order : null,
      sorter: (a, b) =>
        parseFloat(a.price.replace(/[^0-9.-]+/g, "")) -
        parseFloat(b.price.replace(/[^0-9.-]+/g, "")),
      sortOrder: sortedInfo.columnKey === "price" && sortedInfo.order,
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
            fontSize: "12.2195px",
            fontWeight: 400,
          }}
        >
          Count
        </div>
      ),
      dataIndex: "orders",
      key: "orders",

      // sorter: (a, b) => a.orders.length - b.orders.length,
      // sortOrder: sortedInfo.columnKey === "orders" ? sortedInfo.order : null,
      sorter: (a, b) => a.orders - b.orders,
      sortOrder: sortedInfo.columnKey === "orders" && sortedInfo.order,
      ellipsis: true,
      render: (text) => (
        <span
          style={{
            color: "#000000",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "14px",
            textAlign: "center",
            alignContent: "right",
            alignItems: "center",
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
export default FeaturedProductTable;
