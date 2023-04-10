import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Menu } from "antd";

const dates = [
  {
    label: "8 Jul - 24 Jul",
    key: "0",
  },
  {
    label: "1 Jul - 10 Jul",
    key: "1",
  },
];

const MonthDropDown = () => {
  const [selectedDates, setSelectedDates] = useState(dates[0].label);

  const handleClick = (e) => {
    const selectedItem = dates.find((value) => value.key === e.key);
    setSelectedDates(selectedItem.label);
  };

  return (
    <Dropdown
      overlay={
        <Menu onClick={handleClick}>
          {dates.map((value) => (
            <Menu.Item key={value.key}>{value.label}</Menu.Item>
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
        {selectedDates} <DownOutlined />
      </Space>
    </Dropdown>
  );
};

export default MonthDropDown;
