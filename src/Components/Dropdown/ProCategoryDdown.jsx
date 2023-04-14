import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Menu } from "antd";
import Category from "../../Assets/Images/Category.png";

const items = [
  {
    label: "Category",
    key: "0",
  },
  // {
  //   label: "Open",
  //   key: "5",
  // },
  // {
  //   label: "Submitted",
  //   key: "1",
  // },
  // {
  //   label: "In Transit",
  //   key: "2",
  // },
  // {
  //   label: "Cancelled",
  //   key: "3",
  // },
  // {
  //   label: "Delivered",
  //   key: "4",
  // },
];

const ProCategoryDdown = () => {
  const [selectedStatus, setSelectedStatus] = useState(items[0].label);

  const handleMenuClick = (e) => {
    const selectedItem = items.find((item) => item.key === e.key);
    setSelectedStatus(selectedItem.label);
  };
  const categoryStyle = {
    width: 17,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  };
  return (
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
          fontSize: "12.2195px",
          fontWeight: 400,
          color: "#000000",
          background: "#FFFFFF",
          height: 40,
          width: 134,
          borderRadius: 12,
          border: "1px solid #EFEEEB",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={Category} alt="Language" style={categoryStyle} />
        {selectedStatus} <DownOutlined />
      </Space>
    </Dropdown>
  );
};

export default ProCategoryDdown;
