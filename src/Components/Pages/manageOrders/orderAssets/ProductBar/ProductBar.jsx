import React from "react";
import "./ProductBar.css";
import pAngleVector from "../../../../../Assets/Images/pAngleVector.png";
import addProductBtn from "../../../../../Assets/Images/addProductBtn.png";
import { useNavigate } from "react-router-dom";

const ProductBar = ({ btnState, setBtnState }) => {
  const navigate = useNavigate();
  const myFunction = () => {
    navigate("/main/addProduct");
  };
  const productBtn = () => {
    setBtnState(true);
    console.log("btn label", btnState);
  };
  const inVoiceBtn = () => {
    setBtnState(false);
    console.log("btn label", btnState);
  };
  return (
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
          <button className="add-product-btn" onClick={myFunction}>
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
  );
};

export default ProductBar;
