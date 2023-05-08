import React from "react";
import { Table } from "antd";
import { useState } from "react";
import Delete from "../../../../../Assets/Images/Action/Delete.png";
import Edit from "../../../../../Assets/Images/Action/Edit.png";
import Transit from "../../../../../Assets/Images/Action/Transit.png";
import View from "../../../../../Assets/Images/Action/View.png";
import Delivered from "../../../../../Assets/Images/Action/Delivered.png";
import Cancel from "../../../../../Assets/Images/Action/Cancel.png";
import Dashes from "../../../../../Assets/Images/Dashes.png";
import { Dropdown, Space } from "antd";
import axios from "axios";
const items = [
  {
    label: (
      <button
        style={{
          border: "none",
          background: "none",
          color: "#252733",
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontSize: "14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        // onClick={() => viewClickHandler("View")}
      >
        <img src={View} alt="view" style={{ width: 18 }} />
        &nbsp;&nbsp; View
      </button>
    ),
    key: "1",
  },
  {
    label: (
      <button
        style={{
          border: "none",
          background: "none",
          color: "#252733",
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontSize: "14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        // onClick={() => viewClickHandler("View")}
      >
        <img src={Edit} alt="view" style={{ width: 18 }} />
        &nbsp;&nbsp; Edit
      </button>
    ),
    key: "2",
  },
  {
    label: (
      <button
        style={{
          border: "none",
          background: "none",
          color: "#252733",
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontSize: "14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        // onClick={() => viewClickHandler("View")}
      >
        <img src={Cancel} alt="view" style={{ width: 18 }} />
        &nbsp;&nbsp; Cancel Order
      </button>
    ),
    key: "3",
  },
  {
    label: (
      <button
        style={{
          border: "none",
          background: "none",
          color: "#252733",
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontSize: "14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        // onClick={() => viewClickHandler("View")}
      >
        <img src={Transit} alt="view" style={{ width: 18 }} />
        &nbsp;&nbsp; In-Transit
      </button>
    ),
    key: "4",
  },
  {
    label: (
      <button
        style={{
          border: "none",
          background: "none",
          color: "#252733",
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontSize: "14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        // onClick={() => viewClickHandler("View")}
      >
        <img src={Delivered} alt="view" style={{ width: 18 }} />
        &nbsp;&nbsp; Mark as Delivered
      </button>
    ),
    key: "5",
  },
  {
    label: (
      <button
        style={{
          border: "none",
          background: "none",
          color: "#252733",
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontSize: "14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        // onClick={() => viewClickHandler("View")}
      >
        <img src={Delete} alt="view" style={{ width: 14, height: 18 }} />
        &nbsp;&nbsp;&nbsp; Delete
      </button>
    ),
    key: "6",
  },
];

const menuProps = {
  items,
};

const RFQsTable = ({
  rfqsData,
  setRFQsData,
  setPaginationRFQs,
  paginationRFQs,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const paginationHandler = (page) => {
    // console.log("page===>", page);
    setCurrentPage(page);
    setRFQsData([]);
    var data = JSON.stringify({});
    axios({
      method: "Post",
      url: "https://api-customer-dev.b2bprice.store/api/RFQ/GetAll",
      headers: {
        Authorization: `Bearer ${localStorage.AuthToken}`,
        "Content-Type": "application/json",
      },
      data,
    }).then(
      (res) => {
        setRFQsData(res.data.data);
        setPaginationRFQs(res.data);
      },
      (err) => {
        console.log("err===>", err);
      }
    );
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
            textAlign: "center",
          }}
        >
          Order Date
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
              textAlign: "center",
            }}
          >
            {formattedDate}
          </div>
        );
      },
    },
    // {
    //   title: (
    //     <div
    //       style={{
    //         color: "#606060",
    //         fontFamily: "Poppins",
    //         fontStyle: "normal",
    //         fontSize: "12.2195px",
    //         fontWeight: 400,
    //         textAlign: "center",
    //       }}
    //     >
    //       Delivery Date
    //     </div>
    //   ),
    //   dataIndex: "fulfilledDate",
    //   key: "fulfilledDate",
    //   ellipsis: true,
    //   render: (text) => {
    //     const date = new Date(text);
    //     const month = new Intl.DateTimeFormat("en-US", {
    //       month: "short",
    //     }).format(date);
    //     const day = date.getDate();
    //     const year = date.getFullYear();
    //     const formattedDate = `${month} ${day}, ${year}`;

    //     return (
    //       <div
    //         style={{
    //           color: "#000000",
    //           fontFamily: "Poppins",
    //           fontStyle: "normal",
    //           fontWeight: 400,
    //           fontSize: "12px",
    //           textAlign: "center",
    //         }}
    //       >
    //         {formattedDate}
    //       </div>
    //     );
    //   },
    // },
    // {
    //   title: (
    //     <div
    //       style={{
    //         color: "#606060",
    //         fontFamily: "Poppins",
    //         fontStyle: "normal",
    //         fontWeight: 400,
    //         fontSize: "12.2195px",
    //         textAlign: "center",
    //       }}
    //     >
    //       Priority
    //     </div>
    //   ),
    //   dataIndex: "deliveryType",
    //   key: "deliveryType",
    //   ellipsis: true,
    //   render: (text) => (
    //     <div
    //       style={{
    //         color: "#000000",
    //         fontFamily: "Poppins",
    //         fontStyle: "normal",
    //         fontWeight: 400,
    //         fontSize: "12px",
    //         textAlign: "center",
    //       }}
    //     >
    //       {text}
    //     </div>
    //   ),
    //   width: "11%",
    // },
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
      // width: "11%",
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
      render: (props, row) => (
        <div
          style={{
            color: "#000000",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "13px",
            textAlign: "center",
          }}
        >
          <Space>
            <Dropdown menu={menuProps}>
              {/* <Space>{<DashOutlined />}</Space> */}
              <Space>
                <img
                  src={Dashes}
                  alt="Dashes"
                  style={{
                    width: 20,
                    height: 5,
                    opacity: "0.7",
                    // color: "grey",
                  }}
                />
              </Space>
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
      dataSource={rfqsData}
      // pagination={{
      //   current: currentPage,
      //   pageSize: 10,
      //   total: rfqsData.length,
      //   onChange: (page) => setCurrentPage(page),
      //   showTotal: (total, range) =>
      //     ` ${range[0]}-${range[1]} of ${total} items`,
      // }}
      rowClassName={() => "table-row"}
      pagination={{
        current: currentPage,
        pageSize: 10,
        totalPages: paginationRFQs.totalPages,
        total: paginationRFQs.totalRecords,
        onChange: (page) => {
          paginationHandler(page);
        },
        // setCurrentPage(page)
        showTotal: (total, range) =>
          ` ${range[0]}-${range[1]} of ${total} items`,
      }}
    />
  );
};

export default RFQsTable;
