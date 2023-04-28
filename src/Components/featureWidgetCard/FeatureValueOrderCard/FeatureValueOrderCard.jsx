import React from "react";
import { DashOutlined, RiseOutlined, FallOutlined } from "@ant-design/icons";
import { Card } from "antd";
import openValue from "../../../Assets/Images/Orders/openValue.png";
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
      <Card className="widget-card">
        <div className="widget-valueCard-up">
          <span>
            <img
              className="widget-valueCard-Image"
              src={openValue}
              alt="CompletedOrder.png"
            />
          </span>
          <span>
            <DashOutlined className="widget-valueCard-dash" />
          </span>
        </div>
        <div>
          <span className="widget-valueCard-title">{name}</span>
          <p className="widget-valueCard-value">SAR &nbsp;{totalOrderValue}</p>

          <p className="widget-valueCard-percentage">
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
            <span className="widget-valueCard-month">
              From {previousMonthName}
            </span>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default FeatureValueOrderCard;
