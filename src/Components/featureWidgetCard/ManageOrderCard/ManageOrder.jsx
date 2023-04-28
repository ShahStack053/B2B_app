import React from "react";
import "./ManageOrder.css";
import completedOrderImage from "../../../Assets/Images/Orders/completedOrderImage.png";
import { DashOutlined, FallOutlined, RiseOutlined } from "@ant-design/icons";
import { Card } from "antd";

const ManageOrder = ({ count, name, percentage, previousMonthName }) => {
  return (
    <div>
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
          <span className="widget-card-title"> {name} Orders</span>
          <p className="widget-card-count">{count}</p>
          <p className="widget-card-percentage-rise">
            <span
              style={{
                fontFamily: "Poppins",
                fontSize: 10.3809,
                color: percentage >= 0 ? " #16C098" : "#FF0000",
              }}
            >
              {percentage >= 0 ? <RiseOutlined /> : <FallOutlined />}
              &nbsp; {percentage}% &nbsp;
            </span>
            <span className="widget-card-month">From {previousMonthName}</span>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default ManageOrder;
