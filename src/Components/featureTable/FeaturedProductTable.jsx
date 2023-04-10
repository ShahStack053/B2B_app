import { Table } from "antd";
import { useState } from "react";
import rice from "../../Assets/Images/rice.png";

const FeaturedProductTable = ({
  productImage,
  arProductName,
  productName,
  productvalue,
  count,
  freqOrderProduct,
}) => {
  const [sortedInfo, setSortedInfo] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const handleChange = (pagination, filters, sorter) => {
    console.log(sorter);
    setSortedInfo(sorter);
  };

  const data = freqOrderProduct.map((product, index) => ({
    key: index + 1,
    productName: product.productName,
    arProductName: product.arabicName,
    productvalue: product.price,
    count: product.orderCount,
  }));

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
      dataIndex: "productName",
      key: "name",
      // sorter: (a, b) => a.name.length - b.name.length,
      // sortOrder: sortedInfo.columnKey === "name" ? sortedInfo.order : null,
      // sorter: (a, b) => a.name.localeCompare(b.name),
      // sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order,
      ellipsis: true,
      render: (productName, record) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={productImage ? productImage : rice}
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
            {productName}
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
          Arabic Product Name
        </div>
      ),
      dataIndex: "arProductName",
      key: "name",
      // sorter: (a, b) => a.name.length - b.name.length,
      // sortOrder: sortedInfo.columnKey === "name" ? sortedInfo.order : null,
      // sorter: (a, b) => a.name.localeCompare(b.name),
      // sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order,
      ellipsis: true,
      render: (arProductName, record) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* <img
            src={productImage ? productImage : rice}
            alt="Product Avatar"
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              marginRight: "10px",
            }}
          /> */}
          <span
            style={{
              color: "#000000",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "14px",
            }}
          >
            {arProductName}
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
      dataIndex: "productvalue",
      key: "price",
      // sorter: (a, b) => a.price - b.price,
      // sortOrder: sortedInfo.columnKey === "price" ? sortedInfo.order : null,
      // sorter: (a, b) =>
      //   parseFloat(a.price.replace(/[^0-9.-]+/g, "")) -
      //   parseFloat(b.price.replace(/[^0-9.-]+/g, "")),
      // sortOrder: sortedInfo.columnKey === "price" && sortedInfo.order,
      ellipsis: true,
      render: (productvalue) => (
        <span
          style={{
            color: "#000000",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "14px",
          }}
        >
          SAR {productvalue}
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
      dataIndex: "count",
      key: "orders",

      // sorter: (a, b) => a.orders.length - b.orders.length,
      // sortOrder: sortedInfo.columnKey === "orders" ? sortedInfo.order : null,
      // sorter: (a, b) => a.orders - b.orders,
      // sortOrder: sortedInfo.columnKey === "orders" && sortedInfo.order,
      ellipsis: true,
      render: (count) => (
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
          {count}
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
        dataSource={freqOrderProduct}
        onChange={handleChange}
        pagination={{
          current: currentPage,
          pageSize: 5,
          total: data.length,
          onChange: (page) => setCurrentPage(page),
          showTotal: (total, range) =>
            ` ${range[0]}-${range[1]} of ${total} items`,
        }}
      />
    </>
  );
};
export default FeaturedProductTable;
