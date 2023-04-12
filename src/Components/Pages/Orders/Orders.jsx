import React from "react";
import "./Orders.css";
import completedOrderImage from "../../../Assets/Images/completedOrderImage.png";
import {
  DashOutlined,
  //   SearchOutlined,
  FallOutlined,
  RiseOutlined,
} from "@ant-design/icons";

// import Line from "../../../Assets/Images/Line.png";
// import { Input } from "antd";
// import { DatePicker, Space } from "antd";
// import StatusDropDown from "../../Dropdown/StatusDropDown";
import { Card } from "antd";
import SearchRange from "../../SearchRangePicker/SearchRange";
import ManageOrderTable from "../../featureTable/ManageOrderTable";

const Orders = () => {
  //   const { RangePicker } = DatePicker;
  return (
    <div className="orders-container">
      <div className="orders-create-btn-div">
        <span className="manage-orders-span">Manage Orders</span>
        <button className="create-order-btn" type="submit">
          Create Order
        </button>
      </div>
      <div className="orders-widgets-card-div">
        <Card className="widget-manageOrder-card">
          <div className="widget-card-up">
            <span>
              <img
                className="widget-card-Images"
                src={completedOrderImage}
                alt="CompletedOrder.png"
              />
            </span>
            <span>
              <DashOutlined className="widget-card-dash" />
            </span>
          </div>
          <div>
            <span className="widget-card-title"> Active Orders</span>
            <p className="widget-card-count">566</p>
            <p className="widget-card-percentage-rise">
              <span
                style={{
                  fontFamily: "Poppins",
                  fontSize: 10.3809,
                }}
              >
                <RiseOutlined />
                {/* <FallOutlined /> */}
                &nbsp; 3.02 % &nbsp;
              </span>
              <span className="widget-card-month">From May</span>
            </p>
          </div>
        </Card>
        <Card className="widget-manageOrder-card">
          <div className="widget-card-up">
            <span>
              <img
                className="widget-card-Images"
                src={completedOrderImage}
                alt="CompletedOrder.png"
              />
            </span>
            <span>
              <DashOutlined className="widget-card-dash" />
            </span>
          </div>
          <div>
            <span className="widget-card-title"> Pending Orders</span>
            <p className="widget-card-count">23</p>
            <p className="widget-card-percentage-rise">
              <span
                style={{
                  fontFamily: "Poppins",
                  fontSize: 10.3809,
                }}
              >
                <RiseOutlined />
                {/* <FallOutlined /> */}
                &nbsp; 6.02 % &nbsp;
              </span>
              <span className="widget-card-month">From May</span>
            </p>
          </div>
        </Card>
        <Card className="widget-manageOrder-card">
          <div className="widget-card-up">
            <span>
              <img
                className="widget-card-Images"
                src={completedOrderImage}
                alt="CompletedOrder.png"
              />
            </span>
            <span>
              <DashOutlined className="widget-card-dash" />
            </span>
          </div>
          <div>
            <span className="widget-card-title"> Completed Orders</span>
            <p className="widget-card-count">10,856</p>
            <p className="widget-card-percentage-rise">
              <span
                style={{
                  fontFamily: "Poppins",
                  fontSize: 10.3809,
                }}
              >
                <RiseOutlined />
                {/* <FallOutlined /> */}
                &nbsp; 13.02 % &nbsp;
              </span>
              <span className="widget-card-month">From May</span>
            </p>
          </div>
        </Card>
        <Card className="widget-manageOrder-card">
          <div className="widget-card-up">
            <span>
              <img
                className="widget-card-Images"
                src={completedOrderImage}
                alt="CompletedOrder.png"
              />
            </span>
            <span>
              <DashOutlined className="widget-card-dash" />
            </span>
          </div>
          <div>
            <span className="widget-card-title"> Rejected Orders</span>
            <p className="widget-card-count">122</p>
            <p className="widget-card-percentage-fall">
              <span
                style={{
                  fontFamily: "Poppins",
                  fontSize: 10.3809,
                }}
              >
                {/* <RiseOutlined /> */}
                <FallOutlined />
                &nbsp; 0.32 % &nbsp;
              </span>
              <span className="widget-card-month">From May</span>
            </p>
          </div>
        </Card>
      </div>
      <>
        <SearchRange />
      </>
      <div className="orders-table-div">
        <ManageOrderTable />
      </div>
    </div>
  );
};

export default Orders;
