import { Table } from "antd";
import { useState } from "react";
import productPlus from "../../Assets/Images/productPlus.png";
import productMinus from "../../Assets/Images/productMinus.png";
import rice from "../../Assets/Images/rice.png";
// import { useLocation } from "react-router-dom";

const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i + 1,
    id: 32,
    productName: `Product Name ${i}`,
    barcode: `76543216543`,
    category: "Category Name",
    uom: `Kgs`,
    retailPrice: `SAR 54,235`,
    volumePricing: "Yes",
    quantity: "1",
  });
}

const AddProductTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  //   const productDetail = data.map((product, index) => ({
  //     key: index + 1,
  //     productName: product.productName,
  //     arProductName: product.arabicName,
  //     productvalue: product.price,
  //     count: product.orderCount,
  //   }));
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    // state: { selectedRowKeys },
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
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
          ID
        </div>
      ),
      dataIndex: "id",
      key: "id",

      ellipsis: true,
      render: (id) => (
        <span
          style={{
            color: "#000000",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "12px",
            // textAlign: "center",
            // alignContent: "right",
            // alignItems: "center",
          }}
        >
          {id}
        </span>
      ),
      width: 60,
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
          Product Name
        </div>
      ),
      dataIndex: "productName",
      key: "name",
      ellipsis: true,
      render: (productName, record) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={rice}
            alt="Product Avatar"
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              marginRight: "25px",
            }}
          />
          <span
            style={{
              color: "#000000",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "12px",
            }}
          >
            {productName}
          </span>
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
          }}
        >
          Barcode
        </div>
      ),
      dataIndex: "barcode",
      key: "barcode",

      ellipsis: true,
      render: (barcode) => (
        <span
          style={{
            color: "#000000",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "12px",
            textAlign: "center",
            // alignContent: "right",
            // alignItems: "center",
          }}
        >
          {barcode}
        </span>
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
          }}
        >
          Category
        </div>
      ),
      dataIndex: "category",
      key: "category",

      ellipsis: true,
      render: (category) => (
        <span
          style={{
            color: "#000000",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "12px",
            textAlign: "center",
            // alignContent: "right",
            // alignItems: "center",
          }}
        >
          {category}
        </span>
      ),
      width: "14%",
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
          UOM
        </div>
      ),
      dataIndex: "uom",
      key: "uom",

      ellipsis: true,
      render: (uom) => (
        <span
          style={{
            color: "#000000",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "12px",
            textAlign: "center",
            display: "flex",
            // justifyContent: "center",
          }}
        >
          {uom}
        </span>
      ),
      width: "9%",
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
          Retail Price
        </div>
      ),
      dataIndex: "retailPrice",
      key: "retailPrice",

      ellipsis: true,
      render: (retailPrice) => (
        <span
          style={{
            color: "#000000",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "12px",
            // textAlign: "center",
            // alignContent: "right",
            // alignItems: "center",
          }}
        >
          {retailPrice}
        </span>
      ),
      width: "12%",
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
          Volume Pricing
        </div>
      ),
      dataIndex: "volumePricing",
      key: "volumePricing",

      ellipsis: true,
      render: (volumePricing) => (
        <span
          style={{
            color: "#000000",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "12px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {volumePricing}
        </span>
      ),
      width: "12%",
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
          Quantity
        </div>
      ),
      dataIndex: "quantity",
      render: (text, record, index) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={productMinus}
            alt="minus"
            style={{ width: 32, marginLeft: 18.17, marginRight: 18.17 }}
            //   onClick={() => handleQuantityChange(index, -1)}
          />
          <span style={{}}>{text}</span>
          <img
            src={productPlus}
            alt="plus"
            style={{ width: 32, marginLeft: 18.17, marginRight: 18.17 }}
            //   onClick={() => handleQuantityChange(index, 1)}
          />
        </div>
      ),
    },
  ];
  return (
    <div>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <span
          style={{
            marginLeft: 8,
          }}
        >
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
        </span>
      </div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        pagination={{
          current: currentPage,
          pageSize: 5,
          total: data.length,
          onChange: (page) => setCurrentPage(page),
          showTotal: (total, range) =>
            ` ${range[0]}-${range[1]} of ${total} items`,
        }}
      />
    </div>
  );
};

export default AddProductTable;
