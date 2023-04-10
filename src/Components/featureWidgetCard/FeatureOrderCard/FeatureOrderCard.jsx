import React from "react";
import completedOrderImage from "../../../Assets/Images/completedOrderImage.png";
import { DashOutlined, RiseOutlined } from "@ant-design/icons";
import { Card } from "antd";
import "./FeatureOrderCard.css";

const FeatureOrderCard = ({ count, name, percentage, previousMonthName }) => {
  return (
    <div>
      <Card className="widget-order-card">
        <div className="widget-up">
          <span>
            <img
              className="widget-orderImages-bc"
              src={completedOrderImage}
              alt="CompletedOrder.png"
            />
          </span>
          <span>
            <DashOutlined className="widget-dash-bc" />
          </span>
        </div>
        <div>
          <span className="card-title"> {name} Orders</span>
          <p className="card-orders">{count}</p>
          <p className="card-percentage-rise">
            <RiseOutlined />
            &nbsp; {percentage}% &nbsp;
            <span className="card-month">From {previousMonthName}</span>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default FeatureOrderCard;
