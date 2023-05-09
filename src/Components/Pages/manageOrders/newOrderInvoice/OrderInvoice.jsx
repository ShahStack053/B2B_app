import React from "react";
import "./OrderInvoice.css";
import { ArrowLeftOutlined } from "@ant-design/icons";
import OrderDetail from "../orderAssets/OrderDetails/OrderDetail";
import pAngleVector from "../../../../Assets/Images/pAngleVector.png";
import { Link, useNavigate } from "react-router-dom";

const OrderInvoice = () => {
  const navigate = useNavigate();
  const arrowNavigate = () => {
    let label = "Order";
    navigate("/main/Orders", { state: { label } });
  };
  return (
    <div className="new-order-invoice-container">
      <div className="create-new-order-div">
        {/* <Link to="/main/orders">
          <ArrowLeftOutlined className="new-order-arrow" />
        </Link> */}
        <button className="arrow-btn" onClick={arrowNavigate}>
          <ArrowLeftOutlined className="new-manager-arrow" />
        </button>
        <span className="create-newOrder-span">Create New Order</span>
      </div>
      <>
        <OrderDetail />
      </>
      <div className="product-invoice-btn-div">
        <Link to="/main/newOrder" style={{ textDecoration: "none" }}>
          <span className="product-btn-span">Products</span>
        </Link>
        <img src={pAngleVector} alt="angle" style={{ height: 56 }} />
        <span className="invoice-btn-span">Invoice</span>
      </div>
    </div>
  );
};

export default OrderInvoice;
