import React from "react";
import "./ProductBar.css";
import pAngleVector from "../../Assets/Images/pAngleVector.png";
import addProductBtn from "../../Assets/Images/addProductBtn.png";
import { Link, useNavigate } from "react-router-dom";

const ProductBar = () => {
  const navigate = useNavigate();
  const myFunction = () => {
    navigate("/layout/addProduct");
  };
  return (
    <div className="order-add-product-main-div">
      <div className="product-invoice-div">
        <Link to="/layout/newOrder">
          <span className="product-span">Products</span>
        </Link>
        <img src={pAngleVector} alt="angle" style={{ height: 56 }} />
        <Link to="/layout/inVoice">
          <span className="invoice-span">Invoice</span>
        </Link>
      </div>
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
    </div>
  );
};

export default ProductBar;
