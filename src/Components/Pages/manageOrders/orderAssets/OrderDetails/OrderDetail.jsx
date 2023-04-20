import React from "react";
import "./OrderDetail.css";
import { DownOutlined } from "@ant-design/icons";

import { Dropdown, Space, Menu } from "antd";
import { useState } from "react";
const items = [
  {
    label: "Urgent",
    key: "0",
  },
];
const values = [
  {
    label:
      "3478 Makkah Al Mukarramah, As Sulimaniyah, Riyadh 12231, Saudi Arabia",
    key: "1",
  },
];

const OrderDetail = () => {
  const [selectedType, setSelectedType] = useState(items[0].label);

  const handleMenuClick = (e) => {
    const selectedItem = items.find((item) => item.key === e.key);
    setSelectedType(selectedItem.label);
  };
  const [selectedAddress, setselectedAddress] = useState(values[0].label);

  const menuClick = (e) => {
    const selectedItem = values.find((value) => value.key === e.key);
    setselectedAddress(selectedItem.label);
  };
  return (
    <div className="new-order-detail-div">
      <span className="order-detail-span">Order Details</span>
      <div className="order-deliveryDetail-div">
        <span className="customer-span">Customer</span>
        <span className="delivery-charges-span">Delivery Charges</span>
        <span className="expected-delivery-span">Expected Delivery (Days)</span>
      </div>
      <div className="order-delivery-value-div">
        <span className="customer-value-span">StarBucks</span>
        <span className="delivery-charges-value-span">SAR 25.00</span>
        <span className="expected-delivery-date-span">2 (13-09-2022)</span>
      </div>
      <div className="order-delivery-detail-div">
        <span className="delivery-type-span">Delivery Type</span>
        <span className="delivery-address-span">Delivery Address</span>
      </div>
      <div className="order-detail-dropdown-div">
        <Dropdown
          overlay={
            <Menu onClick={handleMenuClick}>
              {items.map((item) => (
                <Menu.Item key={item.key}>{item.label}</Menu.Item>
              ))}
            </Menu>
          }
          trigger={["click"]}
        >
          <Space
            style={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: 14,
              color: "#252733",
              height: 40,
              width: "27%",
              borderRadius: 12,
              border: "1px solid #EFEEEB",
              padding: 20,
            }}
          >
            {selectedType} <DownOutlined style={{ marginLeft: "20%" }} />
          </Space>
        </Dropdown>
        <Dropdown
          overlay={
            <Menu onClick={menuClick}>
              {values.map((value) => (
                <Menu.Item key={value.key}>{value.label}</Menu.Item>
              ))}
            </Menu>
          }
          trigger={["click"]}
        >
          <Space
            style={{
              fontFamily: "Poppins",
              fontSize: "14px",
              fontWeight: 400,
              color: "#252733",
              background: "#FFFFFF",
              height: 40,
              width: "65%",
              borderRadius: 12,
              border: "1px solid #EFEEEB",
              padding: 20,
              marginLeft: 22,
            }}
          >
            {selectedAddress} <DownOutlined style={{ marginLeft: "55px" }} />
          </Space>
        </Dropdown>
      </div>
    </div>
  );
};

export default OrderDetail;
