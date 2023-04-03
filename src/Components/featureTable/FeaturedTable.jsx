import { Table } from "antd";
import { useState } from "react";
const data = [
  {
    key: "1",
    name: "Brooklyn Simmons",
    price: "SAR 108,560.93",
    orders: 856,
  },
  {
    key: "2",
    name: "Brooklyn Simmons",
    price: "SAR 1,560.93",
    orders: 856,
  },
  {
    key: "3",
    name: "raza Simmons",
    price: "SAR 108,560.93",
    orders: 846,
  },
  {
    key: "4",
    name: "Brooklyn Simmons",
    price: "SAR 108.93",
    orders: 866,
  },
  {
    key: "5",
    name: "Brooklyn Simmons",
    price: "SAR 108,880.93",
    orders: 866,
  },
];
const FeaturedTable = () => {
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
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === "name" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price,
      sortOrder: sortedInfo.columnKey === "price" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Total Orders",
      dataIndex: "orders",
      key: "orders",

      sorter: (a, b) => a.orders.length - b.orders.length,
      sortOrder: sortedInfo.columnKey === "orders" ? sortedInfo.order : null,
      ellipsis: true,
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
export default FeaturedTable;
