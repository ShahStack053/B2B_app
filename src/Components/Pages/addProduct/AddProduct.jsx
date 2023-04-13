import "./AddProduct.css";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

const AddProduct = () => {
  return (
    <div className="add-product-container">
      <div className="add-product-div">
        <div className="add-product-title-div">
          <Link to="/layout/orders">
            <ArrowLeftOutlined className="add-product-arrow" />
          </Link>
          <span className="add-product-span">Add Products</span>
        </div>
        <p className="selected-product">
          Selected Products: 08{" "}
          <span className="clear-selection-span">Clear Selection</span>
        </p>
      </div>
    </div>
  );
};

export default AddProduct;
