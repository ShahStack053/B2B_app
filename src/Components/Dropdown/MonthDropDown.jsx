import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Menu } from "antd";

const items = [
  {
    label: "This Month",
    key: "0",
  },
  {
    label: "Previous Month",
    key: "1",
  },
];

const MonthDropDown = () => {
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
        style={{
          height: "fit-content",
          fontFamily: "Poppins",
          fontSize: "14px",
          color: "#000000",
        }}
      >
        {selectedLang} <DownOutlined />
      </Space>
    </Dropdown>
  );
};

export default MonthDropDown;
