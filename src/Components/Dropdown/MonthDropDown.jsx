import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Menu } from "antd";

const items = [
  {
    label: "Today",
    key: "0",
  },
  {
    label: "Last_Seven-Day",
    key: "1",
  },
  {
    label: "This-Month",
    key: "2",
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
          height: 35,
          fontFamily: "Poppins",
          fontSize: "14px",
          color: "#000000",
          background: " #F3F3F3",
          padding: 10,
          borderRadius: 12,
        }}
      >
        {selectedLang} <DownOutlined />
      </Space>
    </Dropdown>
  );
};

export default MonthDropDown;
