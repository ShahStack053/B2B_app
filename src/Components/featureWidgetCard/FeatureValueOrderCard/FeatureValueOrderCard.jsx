import React from "react";
import { DashOutlined, RiseOutlined } from "@ant-design/icons";
import { Card } from "antd";
import openValue from "../../../Assets/Images/openValue.png";
import "./FeatureValueOrderCard.css";

const FeatureValueOrderCard = ({
  percentage,
  previousMonthName,
  name,
  totalOrderValue,
  openOrderValue,
}) => {
  return (
    <div>
      <Card className="widget-card-bc">
        <div className="widget-up-bc">
          <span>
            <img
              className="widget-cardImages-bc"
              src={openValue}
              alt="CompletedOrder.png"
            />
          </span>
          <span>
            <DashOutlined className="widget-dash-bc" />
          </span>
        </div>
        <div>
          <span className="card-title-bc">{name}Orders</span>
          <p className="card-orders-bc">SAR &nbsp;{totalOrderValue}</p>
          <p className="card-percentage-rise-bc">
            <RiseOutlined /> &nbsp; {percentage}% &nbsp;
            <span className="card-month-bc">From {previousMonthName}</span>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default FeatureValueOrderCard;
