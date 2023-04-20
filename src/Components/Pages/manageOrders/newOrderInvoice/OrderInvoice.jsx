import React from "react";
import "./OrderInvoice.css";
import { ArrowLeftOutlined } from "@ant-design/icons";
import OrderDetail from "../orderAssets/OrderDetails/OrderDetail";
import pAngleVector from "../../../../Assets/Images/pAngleVector.png";
import { Link } from "react-router-dom";

const OrderInvoice = () => {
  return (
    <div className="new-order-invoice-container">
      <div className="create-new-order-div">
        <Link to="/main/orders">
          <ArrowLeftOutlined className="new-order-arrow" />
        </Link>
        <span className="create-newOrder-span">Create New Order</span>
      </div>
      <>
        <OrderDetail />
      </>
      <div className="product-invoice-btn-div">
        <Link to="/main/newOrder">
          <span className="product-btn-span">Products</span>
        </Link>
        <img src={pAngleVector} alt="angle" style={{ height: 56 }} />
        <span className="invoice-btn-span">Invoice</span>
      </div>
    </div>
  );
};

export default OrderInvoice;
