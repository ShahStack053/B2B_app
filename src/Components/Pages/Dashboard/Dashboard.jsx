import React from "react";
import logo from "../../../Assets/Images/logo.png";
import userImage from "../../../Assets/Images/userImage.png";
import { Card, Input } from "antd";

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
  SearchOutlined,
  RiseOutlined,
  BellOutlined,
  ShopFilled,
  FallOutlined,
  DashOutlined,
  ShoppingOutlined,
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
  getItem("Products", "2", <ShopOutlined />),
  getItem("Orders", "3", <ShoppingCartOutlined />),
  getItem("RFQs", "4", <FormOutlined />),
  getItem("Finances", "5", <BarChartOutlined />),
  getItem("Admins", "6", <TeamOutlined />),
  getItem("Dark Stores", "7", <ShopFilled />),
  getItem("Business Customers", "8", <TeamOutlined />),
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
          <div className="searchLeftTop">
            <Input
              style={{ borderRadius: 18, width: 265 }}
              placeholder="Search..."
              prefix={<SearchOutlined />}
            />
          </div>
          <div className="dashboardTopBarDiv">
            <h3 className="dashboardTop">Dashboard</h3>
          </div>
          <div className="topBarRight">
            <p className="DateTop">{finalDate}</p>
            <span className="iconbellTop">
              <BellOutlined />
            </span>
            <img src={userImage} alt="userImage" className="userImage" />
            <select className="personDropDown">
              <option>Jamal</option>
            </select>
          </div>
        </div>
        <div className="container">
          <div className="main">
            <Card className="graph-div">
              <div className="graph-div-up">
                <div className="graph-credential-div">
                  <span className="graph-title"> Overall Orders</span>
                  <p className="graph-price">
                    SAR 238,560.93&nbsp;&nbsp;
                    <span className="graph-percentage">
                      <RiseOutlined />
                      &nbsp; 13.02%
                    </span>
                  </p>
                </div>
                <div className="graph-month-div">
                  <select className="graph-month">
                    <option>This Month</option>
                  </select>
                </div>
              </div>
              <div className="graph">graph</div>
            </Card>

            <div className="widgets-order-div">
              <Card className="widget-order-card">
                <div className="widget-up">
                  <span>
                    <ShoppingOutlined />
                  </span>
                  <span>
                    <DashOutlined />
                  </span>
                </div>
                <div>
                  <span className="card-title"> Completed Orders</span>
                  <p className="card-orders"> 10,856</p>
                  <p className="card-percentage-rise">
                    <RiseOutlined />
                    &nbsp; 13.02% &nbsp;
                    <span className="card-month">From May</span>
                  </p>
                </div>
              </Card>
              <Card className="widget-order-card">
                <div className="widget-up">
                  <span>
                    <ShoppingOutlined />
                  </span>
                  <span>
                    <DashOutlined />
                  </span>
                </div>
                <div>
                  <span className="card-title">New Orders</span>
                  <p className="card-orders"> 563</p>
                  <p className="card-percentage-rise">
                    <RiseOutlined />
                    &nbsp; 3.02% &nbsp;
                    <span className="card-month">From May</span>
                  </p>
                </div>
              </Card>
              <Card className="widget-order-card">
                <div className="widget-up">
                  <span>
                    <ShoppingOutlined />
                  </span>
                  <span>
                    <DashOutlined />
                  </span>
                </div>
                <div>
                  <span className="card-title"> Pending Orders</span>
                  <p className="card-orders"> 23</p>
                  <p className="card-percentage-rise">
                    <RiseOutlined />
                    &nbsp; 6.02%% &nbsp;
                    <span className="card-month">From May</span>
                  </p>
                </div>
              </Card>
              <Card className="widget-order-card">
                <div className="widget-up">
                  <span>
                    <ShoppingOutlined />
                  </span>
                  <span>
                    <DashOutlined />
                  </span>
                </div>
                <div>
                  <span className="card-title"> Rejected Orders</span>
                  <p className="card-orders"> 122</p>
                  <p className="card-percentage-fall">
                    <FallOutlined />
                    &nbsp; 0.32% &nbsp;
                    <span className="card-month">From May</span>
                  </p>
                </div>
              </Card>
            </div>
          </div>
          <div className="widgets-card-div">
            <Card className="widget-card">
              <div className="widget-up">
                <span>
                  <ShoppingOutlined />
                </span>
                <span>
                  <DashOutlined />
                </span>
              </div>
              <div>
                <span className="card-title"> Total Order Value</span>
                <p className="card-orders"> 18,560.93</p>
                <p className="card-percentage-rise">
                  <RiseOutlined /> &nbsp; 13.02% &nbsp;
                  <span className="card-month">From May</span>
                </p>
              </div>
            </Card>
            <Card className="widget-card">
              <div className="widget-up">
                <span>
                  <ShoppingOutlined />
                </span>
                <span>
                  <DashOutlined />
                </span>
              </div>
              <div>
                <span className="card-title"> Open Order Value</span>
                <p className="card-orders"> 564.34</p>
                <p className="card-percentage-rise">
                  <RiseOutlined />
                  &nbsp; 3.02% &nbsp;
                  <span className="card-month">From May</span>
                </p>
              </div>
            </Card>
            <Card className="widget-card">
              <div className="widget-up">
                <span>
                  <ShoppingOutlined />
                </span>
                <span>
                  <DashOutlined />
                </span>
              </div>
              <div>
                <span className="card-title"> Total Business Customer</span>
                <p className="card-orders"> 8,560</p>
                <p className="card-percentage-rise">
                  <RiseOutlined />
                  &nbsp; 13.02% &nbsp;
                  <span className="card-month">From May</span>
                </p>
              </div>
            </Card>
            <Card className="widget-card">
              <div className="widget-up">
                <span>
                  <ShoppingOutlined />
                </span>
                <span>
                  <DashOutlined />
                </span>
              </div>
              <div>
                <span className="card-title"> Total BC Users</span>
                <p className="card-orders"> 6,434</p>
                <p className="card-percentage-rise">
                  <RiseOutlined />
                  &nbsp; 3.02% &nbsp;
                  <span className="card-month">From May</span>
                </p>
              </div>
            </Card>
            <Card className="widget-card">
              <div className="widget-up">
                <span>
                  <ShoppingOutlined />
                </span>
                <span>
                  <DashOutlined />
                </span>
              </div>
              <div>
                <span className="card-title"> BC Pending Approval</span>
                <p className="card-orders"> 34</p>
                <p className="card-percentage-rise">
                  <RiseOutlined />
                  &nbsp; 3.02% &nbsp;
                  <span className="card-month">From May</span>
                </p>
              </div>
            </Card>
          </div>
        </div>
        {/* <div className="main">
          <div className="top-main-div">
            <div className="top-main-left">
              <div className="top-main-left-up">
                <div className="top-main-left-up-left">
                  <p className="top-main-left-up-left-orders">Overall Orders</p>
                  <div className="top-main-left-up-left-child">
                    <p className="top-main-left-up-left-child-price">
                      SAR 238,560.93 &nbsp;
                    </p>
                    <span className="top-main-left-up-left-child-percent">
                      <RiseOutlined />
                      13.02%
                    </span>
                  </div>
                </div>
                <div className="top-main-left-up-right">RightUp</div>
              </div>
              <div className="top-main-left-down">leftDown</div>
            </div>
            <div className="top-main-right">Right Main</div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
