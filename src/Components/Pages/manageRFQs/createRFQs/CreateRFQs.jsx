import React, { useState } from "react";
import "./CreateRFQs.css";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import OrderDetail from "../../manageOrders/orderAssets/OrderDetails/OrderDetail";
import pAngleVector from "../../../../Assets/Images/pAngleVector.png";
import dashButton from "../../../../Assets/Images/dashButton.png";
import addProductBtn from "../../../../Assets/Images/addProductBtn.png";
import ProductCard from "../../../featureWidgetCard/WidgetProductCard/ProductCard";
import InVoice from "../../manageOrders/orderAssets/inVoiceTable/InVoice";
import { Card } from "antd";
// import ProductBar from "../../manageOrders/orderAssets/ProductBar/ProductBar";

const CreateRFQs = () => {
  const navigate = useNavigate();
  const arrowNavigate = () => {
    let label = "RFQs";
    navigate("/main/requestForQuotations", { state: { label } });
  };
  const [btnState, setBtnState] = useState(true);

  const productBtn = () => {
    setBtnState(true);
    console.log("btn label", btnState);
  };
  const inVoiceBtn = () => {
    setBtnState(false);
    console.log("btn label", btnState);
  };
  return (
    <div className="create-rfqs-container">
      <div className="rfqs-create-button-div">
        <div className="create-rfqs-div">
          <button className="arrow-btn" onClick={arrowNavigate}>
            <ArrowLeftOutlined className="new-order-arrow" />
          </button>
          <span className="create-rfqs-span">Request for Quotations</span>
        </div>
        {btnState === false ? (
          <div className="rfq-Top-btn-div">
            <button className="RFQ-send-btn">Send RFQs</button>
            <button className="rfq-dashes-btn">
              <img src={dashButton} alt="angle" style={{ height: 35 }} />
            </button>
          </div>
        ) : null}
      </div>
      <>
        <OrderDetail />
      </>
      <>
        <div className="order-add-product-main-div">
          <div className="product-invoice-div">
            <button
              style={
                btnState === true
                  ? {
                      border: "none",
                      backgroundColor: "white",
                      color: "#1779B8",
                      fontSize: 14,
                      fontFamily: "Poppins",
                      fontWeight: 600,
                    }
                  : {
                      border: "none",
                      backgroundColor: "white",
                      color: "#000000",
                      opacity: 0.5,
                      fontSize: 14,
                      fontFamily: "Poppins",
                      fontWeight: 400,
                    }
              }
              onClick={productBtn}
            >
              Products
            </button>
            <img src={pAngleVector} alt="angle" style={{ height: 56 }} />
            <button
              style={
                btnState === true
                  ? {
                      border: "none",
                      backgroundColor: "white",
                      color: "#000000",
                      opacity: 0.5,
                      fontSize: 14,
                      fontFamily: "Poppins",
                      fontWeight: 400,
                    }
                  : {
                      border: "none",
                      backgroundColor: "white",
                      color: "#1779B8",
                      fontSize: 14,
                      fontFamily: "Poppins",
                      fontWeight: 600,
                    }
              }
              onClick={inVoiceBtn}
            >
              {/* <span className="invoice-span">Invoice</span> */}
              InVoice
            </button>
          </div>
          {btnState === true ? (
            <div className="add-product-btn-div">
              <button className="add-product-btn">
                <img
                  src={addProductBtn}
                  alt="add-sign-box"
                  style={{ width: 24, marginRight: 10 }}
                />
                Add Product
              </button>
            </div>
          ) : null}
        </div>
      </>
      <>
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
      </>
      <>
        {btnState === false ? (
          <>
            <div className="rfqs-inVoice-div">
              <Card>
                <InVoice />
                <div className="tAmount-inVoice-div">
                  <span className="tAmount-inVoice-span">
                    Total Amount Excl.VAT
                  </span>
                  <span className="tAmount-value-span">SAR 147.00</span>
                </div>
                <div className="delivery-charges-div">
                  <span className="delivery-charges-span">
                    Delivery Charges
                  </span>
                  <span className="deliveryCharges-value-span">SAR 147.00</span>
                </div>
                <div className="vat-inVoice-div">
                  <span className="vat-span">VAT (15%)</span>
                  <span className="vat-value-span">SAR 147.00</span>
                </div>
                <div className="grand-total-div">
                  <span className="grand-total-span">Grand Total</span>{" "}
                  <span className="grand-total-value-span">SAR 147.00</span>
                </div>
              </Card>
            </div>
            <div className="rfq-button-div">
              <button className="send-rfqs-btn">Send RFQs</button>
              <button className="cancel-rfqs-btn">Cancel</button>
            </div>
          </>
        ) : null}
      </>
    </div>
  );
};

export default CreateRFQs;
