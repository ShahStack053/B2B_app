import React from "react";
import logo from "../../../../Assets/Images/logo.png";
import userImage from "../../../../Assets/Images/userImage.png";
import { Card, Input } from "antd";
// import FeatureWidgetCard from "../../featureWidgetCard/FeatureWidgetCard";

import "./DashboardBc.css";

import {
  AppstoreOutlined,
  FormOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  ShopOutlined,
  SettingOutlined,
  SearchOutlined,
  RiseOutlined,
  BellOutlined,
  FallOutlined,
  DashOutlined,
  ShoppingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import LangDropDown from "../../../Dropdown/LangDropDown";
import PersonDropDown from "../../../Dropdown/PersonDropDown";
import MonthDropDown from "../../../Dropdown/MonthDropDown";
import FeaturedProductTable from "../../../featureTable/FeaturedProductTable";
import LineChart from "../../../Chart/LineChart";
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
const date = new Date("28 Jul, 2022");
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
  getItem("Orders", "2", <ShoppingCartOutlined />),
  getItem("Request for Quotations", "3", <FormOutlined />),
  getItem("My Products", "4", <ShopOutlined />),
  {
    type: "divider",
  },
  getItem("Manage Users", "5", <UserOutlined />),
  getItem("Company Profile", "6", <UserOutlined />),
  getItem("Settings", "7", <SettingOutlined />),
  getItem("Logout", "8", <LogoutOutlined />),
];
const DashboardBc = () => {
  return (
    <div className="flex-bc">
      <div className="sideBar-bc">
        <div className="logoSidebar-bc">
          <img className="logobar-bc" src={logo} alt="B2b Logo" />
        </div>
        <div className="lowerSidebar-bc">
          <Menu
            style={{
              fontFamily: "Poppins",
              fontSize: "14px",
              fontWeight: "400",
              color: "#000000",
              borderRadius: 40,
              border: "1px solid #EFEEEB",
              textDecoration: "none",
            }}
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />

          {/* <select className="langSide">
            <option>English (UK)</option>
          </select> */}
        </div>
        <div className="LangDropDiv-bc">
          <LangDropDown />
        </div>
      </div>
      <div className="rightSideDiv-bc">
        <div className="topBar-bc">
          <div className="searchLeftTop-bc">
            <Input
              style={{
                borderRadius: 18,
                width: 265,
                borderStyle: "none",
                border: "1px solid #EFEEEB",
              }}
              placeholder="Search..."
              prefix={<SearchOutlined />}
            />
          </div>
          <div className="dashboardTopBarDiv-bc">
            <h3 className="dashboardTop-bc">Dashboard</h3>
          </div>
          <div className="topBarRight-bc">
            <p className="DateTop-bc">{finalDate}</p>
            <span className="iconbellTop-bc">
              <BellOutlined />
            </span>
            <img src={userImage} alt="userImage" className="userImage" />
            <PersonDropDown />
            {/* <select className="personDropDown">
              <option>Jamal</option>
              <option>Jamal</option>
            </select> */}
          </div>
        </div>
        <div className="container-bc">
          <div className="main-bc">
            <Card className="graph-div-bc">
              <div className="graph-div-up-bc">
                <div className="graph-credential-div-bc">
                  <span className="graph-title-bc"> Overall Orders</span>
                  <p className="graph-price-bc">
                    SAR 238,560.93&nbsp;&nbsp;
                    <span className="graph-percentage-bc">
                      <RiseOutlined />
                      &nbsp; 13.02%
                    </span>
                  </p>
                </div>
                <div className="graph-month-div-bc">
                  <MonthDropDown />
                  {/* <select className="graph-month">
                    <option>This Month</option>
                  </select> */}
                </div>
              </div>
              <div className="graph-bc">
                <LineChart />
              </div>
            </Card>

            <div className="widgets-order-div-bc">
              <Card className="widget-order-card1-bc">
                <div className="widget-up-bc">
                  <span>
                    <ShoppingOutlined />
                  </span>
                  <span>
                    <DashOutlined />
                  </span>
                </div>
                <div>
                  <span className="card-title-bc"> Completed Orders</span>
                  <p className="card-orders-bc"> 10,856</p>
                  <p className="card-percentage-rise-bc">
                    <RiseOutlined />
                    &nbsp; 13.02% &nbsp;
                    <span className="card-month-bc">From May</span>
                  </p>
                </div>
              </Card>
              <Card className="widget-order-card2-bc">
                <div className="widget-up-bc">
                  <span>
                    <ShoppingOutlined />
                  </span>
                  <span>
                    <DashOutlined />
                  </span>
                </div>
                <div>
                  <span className="card-title-bc">New Orders</span>
                  <p className="card-orders-bc"> 563</p>
                  <p className="card-percentage-rise-bc">
                    <RiseOutlined />
                    &nbsp; 3.02% &nbsp;
                    <span className="card-month-bc">From May</span>
                  </p>
                </div>
              </Card>
              <Card className="widget-order-card3-bc">
                <div className="widget-up-bc">
                  <span>
                    <ShoppingOutlined />
                  </span>
                  <span>
                    <DashOutlined />
                  </span>
                </div>
                <div>
                  <span className="card-title-bc"> Pending Orders</span>
                  <p className="card-orders-bc"> 23</p>
                  <p className="card-percentage-rise-bc">
                    <RiseOutlined />
                    &nbsp; 6.02%% &nbsp;
                    <span className="card-month-bc">From May</span>
                  </p>
                </div>
              </Card>
              <Card className="widget-order-card4-bc">
                <div className="widget-up-bc">
                  <span>
                    <ShoppingOutlined />
                  </span>
                  <span>
                    <DashOutlined />
                  </span>
                </div>
                <div>
                  <span className="card-title-bc"> Rejected Orders</span>
                  <p className="card-orders-bc"> 122</p>
                  <p className="card-percentage-fall-bc">
                    <FallOutlined />
                    &nbsp; 0.32% &nbsp;
                    <span className="card-month-bc">From May</span>
                  </p>
                </div>
              </Card>
            </div>
          </div>
          <div className="widgets-card-div-bc">
            <Card className="widget-card-bc">
              <div className="widget-up-bc">
                <span>
                  <ShoppingOutlined />
                </span>
                <span>
                  <DashOutlined />
                </span>
              </div>
              <div>
                <span className="card-title-bc"> Total Order Value</span>
                <p className="card-orders-bc"> 18,560.93</p>
                <p className="card-percentage-rise-bc">
                  <RiseOutlined /> &nbsp; 13.02% &nbsp;
                  <span className="card-month-bc">From May</span>
                </p>
              </div>
            </Card>
            <Card className="widget-card-bc">
              <div className="widget-up-bc">
                <span>
                  <ShoppingOutlined />
                </span>
                <span>
                  <DashOutlined />
                </span>
              </div>
              <div>
                <span className="card-title-bc"> Open Order Value</span>
                <p className="card-orders-bc"> 564.34</p>
                <p className="card-percentage-rise-bc">
                  <RiseOutlined />
                  &nbsp; 3.02% &nbsp;
                  <span className="card-month-bc">From May</span>
                </p>
              </div>
            </Card>
            <Card className="widget-card-bc">
              <div className="widget-up-bc">
                <span>
                  <ShoppingOutlined />
                </span>
                <span>
                  <DashOutlined />
                </span>
              </div>
              <div>
                <span className="card-title-bc"> Total Business Customer</span>
                <p className="card-orders-bc"> 8,560</p>
                <p className="card-percentage-rise-bc">
                  <RiseOutlined />
                  &nbsp; 13.02% &nbsp;
                  <span className="card-month-bc">From May</span>
                </p>
              </div>
            </Card>
            <Card className="widget-card-bc">
              <div className="widget-up-bc">
                <span>
                  <ShoppingOutlined />
                </span>
                <span>
                  <DashOutlined />
                </span>
              </div>
              <div>
                <span className="card-title-bc"> Total BC Users</span>
                <p className="card-orders-bc"> 6,434</p>
                <p className="card-percentage-rise-bc">
                  <RiseOutlined />
                  &nbsp; 3.02% &nbsp;
                  <span className="card-month-bc">From May</span>
                </p>
              </div>
            </Card>
            <Card className="widget-card-bc">
              <div className="widget-up-bc">
                <span>
                  <ShoppingOutlined />
                </span>
                <span>
                  <DashOutlined />
                </span>
              </div>
              <div>
                <span className="card-title-bc"> BC Pending Approval</span>
                <p className="card-orders-bc"> 34</p>
                <p className="card-percentage-rise-bc">
                  <RiseOutlined />
                  &nbsp; 3.02% &nbsp;
                  <span className="card-month-bc">From May</span>
                </p>
              </div>
            </Card>
          </div>
          <div className="widgets-featureInfo-div-bc">
            <Card className="widgets-top-product-div-bc">
              <div className="widgets-productTitle-div-bc">
                <span className="widgets-product-title-bc">
                  Top 10 Frequently Ordered Products
                </span>
                <select className="sales-month-bc">
                  <option>8 Jul&nbsp; - &nbsp;24 Jul</option>
                </select>
              </div>
              <div className="widgets-productInfo-div-bc">
                <FeaturedProductTable />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardBc;
