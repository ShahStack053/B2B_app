import React from "react";
import "./NewOrder.css";
import ProductBar from "../orderAssets/ProductBar/ProductBar";
import ProductCard from "../../../featureWidgetCard/WidgetProductCard/ProductCard";
import OrderDetail from "../orderAssets/OrderDetails/OrderDetail";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import InVoice from "../orderAssets/inVoiceTable/InVoice";
import { Card } from "antd";

const NewOrder = () => {
  const navigate = useNavigate();
  const [btnState, setBtnState] = useState(true);

  const arrowNavigate = () => {
    let label = "Order";
    navigate("/main/Orders", { state: { label } });
  };
  return (
    <div className="new-order-container">
      <div className="new-order-div">
        {/* <Link to="/main/orders">
          <ArrowLeftOutlined className="new-order-arrow" />
        </Link> */}
        <button className="arrow-btn" onClick={arrowNavigate}>
          <ArrowLeftOutlined className="new-order-arrow" />
        </button>
        <span className="create-newOrder-span">Create New Order</span>
      </div>
      <>
        <OrderDetail />
      </>
      <>
        <ProductBar setBtnState={setBtnState} btnState={btnState} />
      </>
      {btnState === true ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>

          <button className="continue-btn">Continue</button>
        </>
      ) : null}
      <>
        {btnState === false ? (
          <>
            <div className="order-inVoice-div">
              <Card>
                <InVoice />
              </Card>
            </div>
            <div className="button-div">
              <button className="createOrder-btn">Create Order</button>
              <button className="cancel-order-btn">Cancel</button>
            </div>
          </>
        ) : null}
      </>
    </div>
  );
};

export default NewOrder;
