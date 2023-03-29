import React from "react";
import logo from "../../../Assets/Images/logo.png";
import userImage from "../../../Assets/Images/userImage.png";
import "./Dashboard.css";

import {
  AppstoreOutlined,
  BarChartOutlined,
  FormOutlined,
  UserOutlined,
  TeamOutlined,
  ShoppingCartOutlined,
  ShopOutlined,
  SettingOutlined,
  BellFilled,
  LogoutOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
//date
const date = new Date();
const options = { year: "numeric", month: "short", day: "numeric" };
const formattedDate = date.toLocaleDateString("en-US", options);
// formattedDate will be "Jul 28, 2022"

const month = formattedDate.split(" ")[0];
const day = formattedDate.split(" ")[1].slice(0, -1);
const year = formattedDate.split(" ")[2];
const finalDate = `${day} ${month}, ${year}`;

//Side bar Item
const items = [
  getItem("Dashboard", "1", <AppstoreOutlined />),
  getItem("Products", "2", <TeamOutlined />),
  getItem("Orders", "3", <ShoppingCartOutlined />),
  getItem("RFQs", "4", <FormOutlined />),
  getItem("Finances", "5", <BarChartOutlined />),
  getItem("Admins", "6", <TeamOutlined />),
  getItem("Dark Stores", "7", <ShopOutlined />),
  getItem("Business Customers", "8", <UserOutlined />),
  {
    type: "divider",
  },
  getItem("Profile", "9", <UserOutlined />),
  getItem("Settings", "10", <SettingOutlined />),
  getItem("Logout", "11", <LogoutOutlined />),
];
const Dashboard = () => {
  return (
    <div className="flexDashboard">
      <div className="sideBar">
        <div className="logoSidebar">
          <img className="logobar" src={logo} alt="B2b Logo" />
        </div>
        <div className="lowerSidebar">
          <Menu defaultSelectedKeys={["1"]} mode="inline" items={items} />
          <select className="langSide">
            <option>English (UK)</option>
          </select>
        </div>
      </div>
      <div className="rightSideDiv">
        <div className="topBar">
          <div className="topbarLeft">
            <div className="searchLeftTop">
              {/* <input type="text" placeholder="Search" value="" /> */}
              <input type="text" name="" placeholder="Search..." />
            </div>
            <div className="dashboardTopBar">
              <h3 className="dashboardTop">Dashboard</h3>
            </div>
          </div>
          <div className="topBarRight">
            <p className="DateTop">{finalDate}</p>
            <span className="iconbellTop">
              <BellFilled />
            </span>

            <img src={userImage} alt="userImage" className="userImage" />
            <select className="personDropDown">
              <option>Jamal</option>
            </select>
          </div>
        </div>
        <div className="main">
          <div className="topDiv"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
