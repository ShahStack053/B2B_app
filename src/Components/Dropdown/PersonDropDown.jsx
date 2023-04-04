import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Menu } from "antd";

const items = [
  {
    label: "Jamal",
    key: "0",
  },
  {
    label: "Raza",
    key: "1",
  },
];

const PersonDropDown = () => {
  const [selectedLang, setSelectedLang] = useState(items[0].label);

  const handleMenuClick = (e) => {
    const selectedItem = items.find((item) => item.key === e.key);
    setSelectedLang(selectedItem.label);
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
        style={{ marginRight: "8%", fontFamily: "Poppins", fontSize: "14px" }}
      >
        {selectedLang} <DownOutlined />
      </Space>
    </Dropdown>
  );
};

export default PersonDropDown;
