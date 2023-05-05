import React, { useState } from "react";
import "./ProductCard.css";
import {} from "@ant-design/icons";
import { Card } from "antd";
import Blender from "../../../Assets/Images/Blender.png";
import productPlus from "../../../Assets/Images/productPlus.png";
import productMinus from "../../../Assets/Images/productMinus.png";

const ProductCard = () => {
  const [quantity, setQuantity] = useState(2);

  function handleIncrease() {
    setQuantity(quantity + 1);
  }

  function handleDecrease() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }
  return (
    <div className="widget-product-card-div">
      <Card className="widget-product-card">
        <div className="product-img-div">
          <img src={Blender} alt="product-img" style={{ width: 180 }} />
        </div>
        <div className="product-detail-div">
          <p className="product-price">SAR 3,000.00</p>
          <p className="product-name">Hamilton Beach Blender</p>
          <p className="product-spec">
            Capacity:
            <span className="product-spec-detail-span"> &nbsp; 14oz</span>
          </p>
          <span className="product-equipment-span">Equipment</span>
        </div>
        <div className="product-quantity-div">
          <span
            style={{
              fontFamily: "Poppins",
              fontWeight: 600,
              fontSize: 12,
              color: " #404040",
            }}
          >
            Qty:
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={productMinus}
              alt="Product--"
              style={{ width: 32, marginLeft: 18.17, marginRight: 18.17 }}
              onClick={handleDecrease}
            />
            <span
              style={{
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: 14,
                color: "#000000",
              }}
            >
              {quantity}
            </span>
            <img
              src={productPlus}
              alt="Product++"
              style={{ width: 32, marginLeft: 18.17, marginRight: 18.17 }}
              onClick={handleIncrease}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;
