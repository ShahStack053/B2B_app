import "./DashboardBc.css";
import React from "react";

// import rejectedOrderImage from "../../../../Assets/Images/rejectedOrderImage.png";
// import pendingOrderImage from "../../../../Assets/Images/pendingOrderImage.png";
// import newOrderImage from "../../../../Assets/Images/newOrderImage.png";
// import completedOrderImage from "../../../../Assets/Images/completedOrderImage.png";
//import bcPendingApprovalImage from "../../../../Assets/Images/bcPendingApprovalImage.png";
//import totalBcImage from "../../../../Assets/Images/totalBcImage.png";
//import openValue from "../../../../Assets/Images/openValue.png";
import totalBcUsersImage from "../../../../Assets/Images/totalBcUsersImage.png";
import { Card } from "antd";
import axios from "axios";
import { useState, useEffect } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Menu } from "antd";

import FeatureOrderCard from "../../../featureWidgetCard/FeatureOrderCard/FeatureOrderCard";
import FeatureValueOrderCard from "../../../featureWidgetCard/FeatureValueOrderCard/FeatureValueOrderCard";
import FeaturedProductTable from "../../../featureTable/FeaturedProductTable";
import LineChart from "../../../Chart/LineChart";

import { RiseOutlined, FallOutlined, DashOutlined } from "@ant-design/icons";
import FeatureCustomerCard from "../../../featureWidgetCard/FeatureCustomerCard/FeatureCustomerCard";

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
    key: "3",
  },
  {
    label: "1 Jul - 10 Jul",
    key: "4",
  },
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
        // console.log("data====>", res.data.data);
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
        // console.log("dataValues====>", res.data.data);
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
        // console.log("dataBCustomer====>", res.data.data);
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
        // console.log("dataBCuser====>", res.data.data);
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
        // console.log("dataGraphOrder====>", res.data.data);
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
        // console.log("dataProduct====>", res.data.data);
        setFreqOrderProduct(res.data.data);
      },
      (err) => {
        console.log("err===>", err);
      }
    );
  }, [selectedDates]);

  return (
    <div className="container">
      <div className="main">
        <div className="graph-div">
          <Card className="graph-card">
            <div className="graph-card-up">
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
            <div className="graph">
              <LineChart graphData={graphData} />
            </div>
          </Card>
        </div>
        <div className="widgets-order-div">
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
      {/* RAaaaaaaaaaaaaaaaaaaaaaaaaaa */}
      <div className="widgets-card-div">
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
          <Card className="widget-card">
            <div className="widget-userCard-up">
              <span>
                <img
                  className="widget-userCard-Image"
                  src={totalBcUsersImage}
                  alt="CompletedOrder.png"
                />
              </span>
              <span>
                <DashOutlined className="widget-userCard-dash" />
              </span>
            </div>
            <div>
              <span className="widget-userCard-title"> {BcUser.name}</span>
              <p className="widget-userCard-count"> {BcUser.count}</p>
              <p className="widget-userCard-percentage">
                <span
                  style={{
                    fontFamily: "Poppins",
                    fontSize: 10.3809,
                    color: BcUser.percentage >= 0 ? " #16C098" : "#FF0000",
                  }}
                >
                  {BcUser.percentage >= 0 ? <RiseOutlined /> : <FallOutlined />}
                  &nbsp; {BcUser.percentage}% &nbsp;
                </span>
                <span className="widget-userCard-month">
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
      <div className="widgets-featureInfo-div">
        <Card className="widgets-top-product-div">
          <div className="widgets-productTitle-div">
            <span className="widgets-product-title">
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
          <div className="widgets-productInfo-div">
            <FeaturedProductTable freqOrderProduct={freqOrderProduct} />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DashboardBc;
