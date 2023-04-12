import React from "react";
import { DashOutlined, UserOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const items = [
  {
    label: "1st menu item",
    key: "1",
    icon: <UserOutlined />,
  },
  {
    label: "2nd menu item",
    key: "2",
    icon: <UserOutlined />,
  },
  {
    label: "3rd menu item",
    key: "3",
    icon: <UserOutlined />,
    danger: true,
  },
  {
    label: "4rd menu item",
    key: "4",
    icon: <UserOutlined />,
    danger: true,
    disabled: true,
  },
];
const menuProps = {
  items,
};
const Drop = () => (
  <Space>
    <Dropdown menu={menuProps}>
      <Space>
        <DashOutlined />
      </Space>
    </Dropdown>
  </Space>
);
export default Drop;
