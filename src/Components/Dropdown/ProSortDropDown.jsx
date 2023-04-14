import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Menu } from "antd";
import Sort from "../../Assets/Images/Sort.png";

const items = [
  {
    label: "Sort",
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
const ProSortDropDown = () => {
  const [selectedStatus, setSelectedStatus] = useState(items[0].label);

  const handleMenuClick = (e) => {
    const selectedItem = items.find((item) => item.key === e.key);
    setSelectedStatus(selectedItem.label);
  };
  const SortStyle = {
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
          width: 147,
          borderRadius: 12,
          border: "1px solid #EFEEEB",
          display: "flex",
          alignItems: "center",
          paddingLeft: 20,
          //   justifyContent: "center",
        }}
      >
        <img src={Sort} alt="Language" style={SortStyle} />
        {selectedStatus} <DownOutlined style={{ marginLeft: 38 }} />
      </Space>
    </Dropdown>
  );
};

export default ProSortDropDown;
