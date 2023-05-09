import { Table } from "antd";
import "./InVoice.css";

const data = [];
for (let i = 0; i < 4; i++) {
  data.push({
    key: i + 1,
    id: i + 1,
    productName: `Name ${i}`,
    quantity: `${i}`,
    unitPrice: `SAR 494.01`,
    vat: "SAR 54.01",
    tAMount: "12",
  });
}

const InVoice = () => {
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
          Line Item #
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
            display: "flex",
            justifyContent: "center",
          }}
        >
          {id}
        </span>
      ),
      //   width: 60,
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
          Product
        </div>
      ),
      dataIndex: "productName",
      key: "name",
      ellipsis: true,
      render: (productName) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              color: "#000000",
              fontFamily: "Poppins",
              //   fontStyle: "normal",
              fontWeight: 400,
              fontSize: "12px",
              width: 140,
              textAlign: "center",
            }}
          >
            {productName}
          </span>
        </div>
      ),
      //   width: "17%",
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
      key: "quantity",

      ellipsis: true,
      render: (quantity) => (
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
          {quantity}
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
            textAlign: "center",
          }}
        >
          Unit Price (SAR)
        </div>
      ),
      dataIndex: "unitPrice",
      key: "unitPrice",

      ellipsis: true,
      render: (unitPrice) => (
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
          {unitPrice}
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
            textAlign: "center",
          }}
        >
          VAT (15%)
        </div>
      ),
      dataIndex: "vat",
      key: "vat",

      ellipsis: true,
      render: (vat) => (
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
          {vat}
        </span>
      ),
      //   width: "12%",
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
          Total Amount Incl.VAT
        </div>
      ),
      dataIndex: "tAMount",
      render: (tAMount) => (
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
          {tAMount}
        </span>
      ),
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};

export default InVoice;
