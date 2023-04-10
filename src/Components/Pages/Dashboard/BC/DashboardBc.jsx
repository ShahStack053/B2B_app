import React from "react";
import logo from "../../../../Assets/Images/logo.png";
import userImage from "../../../../Assets/Images/userImage.png";
// import rejectedOrderImage from "../../../../Assets/Images/rejectedOrderImage.png";
// import pendingOrderImage from "../../../../Assets/Images/pendingOrderImage.png";
// import newOrderImage from "../../../../Assets/Images/newOrderImage.png";
// import completedOrderImage from "../../../../Assets/Images/completedOrderImage.png";
//import bcPendingApprovalImage from "../../../../Assets/Images/bcPendingApprovalImage.png";
//import totalBcImage from "../../../../Assets/Images/totalBcImage.png";
import totalBcUsersImage from "../../../../Assets/Images/totalBcUsersImage.png";
//import openValue from "../../../../Assets/Images/openValue.png";
import { Card, Input } from "antd";
import axios from "axios";
import { useState, useEffect } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Menu } from "antd";

import FeatureOrderCard from "../../../featureWidgetCard/FeatureOrderCard/FeatureOrderCard";
import FeatureValueOrderCard from "../../../featureWidgetCard/FeatureValueOrderCard/FeatureValueOrderCard";
//import { Menu } from "antd";
import LangDropDown from "../../../Dropdown/LangDropDown";
import PersonDropDown from "../../../Dropdown/PersonDropDown";
//import MonthDropDown from "../../../Dropdown/MonthDropDown";
import FeaturedProductTable from "../../../featureTable/FeaturedProductTable";
import LineChart from "../../../Chart/LineChart";
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
  // FallOutlined,
  DashOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import FeatureCustomerCard from "../../../featureWidgetCard/FeatureCustomerCard/FeatureCustomerCard";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
//===========================================date==================
const date = new Date("28 Jul, 2022");
const options = { year: "numeric", month: "short", day: "numeric" };
const formattedDate = date.toLocaleDateString("en-US", options);
// formattedDate will be "Jul 28, 2022"

const month = formattedDate.split(" ")[0];
const day = formattedDate.split(" ")[1].slice(0, -1);
const year = formattedDate.split(" ")[2];
const finalDate = `${day} ${month}, ${year}`;
//===========================Values for MonthdropDown====================
const values = [
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

//============================ Values of Date dropDown =======================
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
//======================================Side bar Item=======================
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
  const [orders, setOrders] = useState([]);
  const [orderValues, setOrderValues] = useState([]);
  const [BCustomer, setBCustomer] = useState([]);
  const [BcUser, setBcUser] = useState([]);
  const [freqOrderProduct, setFreqOrderProduct] = useState([]);
  const [graphData, setgraphData] = useState([]);

  //===================================UseState For MonthDropDOwn=================
  const [selectedDuration, setSelectedDuration] = useState(values[2].label);

  const handleMenuClick = (e) => {
    const selectedItem = values.find((value) => value.key === e.key);
    setSelectedDuration(selectedItem.label);
  };
  //===================================UseEffect For orders=================
  useEffect(() => {
    var data = JSON.stringify({
      duration: selectedDuration,
    });
    axios({
      method: "post",
      url: `https://api-customer-dev.b2bprice.store/api/BCDashboard/GetOrderDashboard`,
      headers: {
        Authorization: `Bearer ${localStorage.AuthToken}`,
        "Content-Type": "application/json",
      },
      data: data,
    }).then(
      (res) => {
        // debugger;
        console.log("data====>", res.data.data);
        setOrders(res.data.data);
      },
      (err) => {
        console.log("err===>", err);
      }
    );
  }, [selectedDuration]);

  //===================================UseEffect For ordersValues=================
  useEffect(() => {
    var data = JSON.stringify({
      duration: selectedDuration,
    });
    axios({
      method: "post",
      url: `https://api-customer-dev.b2bprice.store/api/BCDashboard/GetOrderValueDashboard`,
      headers: {
        Authorization: `Bearer ${localStorage.AuthToken}`,
        "Content-Type": "application/json",
      },
      data: data,
    }).then(
      (res) => {
        // debugger;
        console.log("dataValues====>", res.data.data);
        setOrderValues(res.data.data);
      },
      (err) => {
        console.log("err===>", err);
      }
    );
  }, [selectedDuration]);
  //===================================UseEffect For BusinessCustomer=================
  useEffect(() => {
    var data = JSON.stringify({
      duration: selectedDuration,
    });
    axios({
      method: "post",
      url: `https://api-customer-dev.b2bprice.store/api/BCDashboard/GetBCCustomerDashboard`,
      headers: {
        Authorization: `Bearer ${localStorage.AuthToken}`,
        "Content-Type": "application/json",
      },
      data: data,
    }).then(
      (res) => {
        // debugger;
        console.log("dataBCustomer====>", res.data.data);
        setBCustomer(res.data.data);
      },
      (err) => {
        console.log("err===>", err);
      }
    );
  }, [selectedDuration]);
  //===================================UseEffect For BusinessCustomer Users=================
  useEffect(() => {
    var data = JSON.stringify({
      duration: selectedDuration,
    });
    axios({
      method: "post",
      url: `https://api-customer-dev.b2bprice.store/api/BCDashboard/GetBCUserDashboard`,
      headers: {
        Authorization: `Bearer ${localStorage.AuthToken}`,
        "Content-Type": "application/json",
      },
      data: data,
    }).then(
      (res) => {
        // debugger;
        console.log("dataBCuser====>", res.data.data);
        setBcUser(res.data.data);
      },
      (err) => {
        console.log("err===>", err);
      }
    );
  }, [selectedDuration]);
  //=====================================Use Effect For graph Data=================
  useEffect(() => {
    var data = JSON.stringify({
      duration: selectedDuration,
    });
    axios({
      method: "post",
      url: `https://api-customer-dev.b2bprice.store/api/BCDashboard/GetOrderGraph`,
      headers: {
        Authorization: `Bearer ${localStorage.AuthToken}`,
        "Content-Type": "application/json",
      },
      data: data,
    }).then(
      (res) => {
        // debugger;
        console.log("dataGraphOrder====>", res.data.data);
        setgraphData(res.data.data);
      },
      (err) => {
        console.log("err===>", err);
      }
    );
  }, [selectedDuration]);
  //====================================UseState for Date Drop Down==========================
  const [selectedDates, setSelectedDates] = useState(dates[0].label);

  const handleClick = (e) => {
    const selectedItem = dates.find((value) => value.key === e.key);
    setSelectedDates(selectedItem.label);
  };
  //===================================UseEffect For Frequently Order Product=================
  useEffect(() => {
    var data = JSON.stringify({
      duration: selectedDates,
    });
    axios({
      method: "post",
      url: `https://api-customer-dev.b2bprice.store/api/BCDashboard/GetFrequentOrderProduct`,
      headers: {
        Authorization: `Bearer ${localStorage.AuthToken}`,
        "Content-Type": "application/json",
      },
      data: data,
    }).then(
      (res) => {
        // debugger;
        console.log("dataProduct====>", res.data.data);
        setFreqOrderProduct(res.data.data);
      },
      (err) => {
        console.log("err===>", err);
      }
    );
  }, [selectedDates]);

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

              textDecoration: "none",
            }}
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
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
                  <Dropdown
                    overlay={
                      <Menu onClick={handleMenuClick}>
                        {values.map((value) => (
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
                      {selectedDuration} <DownOutlined />
                    </Space>
                  </Dropdown>
                </div>
              </div>
              <div className="graph-bc">
                <LineChart />
              </div>
            </Card>

            <div className="widgets-order-div-bc">
              {orders?.map((x, i) => {
                return (
                  <FeatureOrderCard
                    key={i}
                    count={x.count}
                    name={x.name}
                    previousMonthName={x.previousMonthName}
                    percentage={x.percentage}
                  />
                );
              })}
            </div>
          </div>
          <div className="widgets-card-div-bc">
            {orderValues?.map((x, i) => {
              return (
                <FeatureValueOrderCard
                  key={i}
                  openOrderValue={x.openOrderValue}
                  totalOrderValue={x.totalOrderValue}
                  name={x.name}
                  previousMonthName={x.previousMonthName}
                  percentage={x.percentage}
                />
              );
            })}
            {BcUser.map((BcUser) => (
              <Card className="widget-card-bc">
                <div className="widget-up-bc">
                  <span>
                    <img
                      className="widget-card-tBc-UserImage-bc"
                      src={totalBcUsersImage}
                      alt="CompletedOrder.png"
                    />
                  </span>
                  <span>
                    <DashOutlined className="widget-dash-bc" />
                  </span>
                </div>
                <div>
                  <span className="card-title-bc"> {BcUser.name}</span>
                  <p className="card-orders-bc"> {BcUser.count}</p>
                  <p className="card-percentage-rise-bc">
                    <RiseOutlined />
                    &nbsp; {BcUser.percentage}% &nbsp;
                    <span className="card-month-bc">
                      From {BcUser.previousMonthName}
                    </span>
                  </p>
                </div>
              </Card>
            ))}
            <>
              {BCustomer?.map((x, i) => {
                return (
                  <FeatureCustomerCard
                    key={i}
                    count={x.count}
                    name={x.name}
                    previousMonthName={x.previousMonthName}
                    percentage={x.percentage}
                  />
                );
              })}
            </>
          </div>
          <div className="widgets-featureInfo-div-bc">
            <Card className="widgets-top-product-div-bc">
              <div className="widgets-productTitle-div-bc">
                <span className="widgets-product-title-bc">
                  Top 10 Frequently Ordered Products
                </span>
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
                      //background: " #F3F3F3",
                      padding: 10,
                      borderRadius: 12,
                    }}
                  >
                    {selectedDates} <DownOutlined />
                  </Space>
                </Dropdown>
              </div>
              <div className="widgets-productInfo-div-bc">
                {/* {freqOrderProduct?.map((x, i) => {
                  return (
                    );
                  })} */}
                {/* <FeaturedProductTable 
                  // key={i}
                  count={freqOrderProduct.count}
                  productImage={freqOrderProduct.productImage}
                  arProductName={freqOrderProduct.arProductName}
                  productName={freqOrderProduct.productName}
                  productvalue={freqOrderProduct.productvalue}
                /> */}
                <FeaturedProductTable freqOrderProduct={freqOrderProduct} />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardBc;
