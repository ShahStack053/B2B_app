import React from "react";
import completedOrderImage from "../../../Assets/Images/completedOrderImage.png";
import { DashOutlined, FallOutlined, RiseOutlined } from "@ant-design/icons";
import { Card } from "antd";
import "./FeatureOrderCard.css";

const FeatureOrderCard = ({ count, name, percentage, previousMonthName }) => {
  return (
    <div>
      <Card className="widget-order-card">
        <div className="widget-orderCard-up">
          <span>
            <img
              className="widget-orderCard-Images"
              src={completedOrderImage}
              alt="CompletedOrder.png"
            />
          </span>
          <span>
            <DashOutlined className="widget-orderCard-dash" />
          </span>
        </div>
        <div>
          <span className="widget-orderCard-title"> {name} Orders</span>
          <p className="widget-orderCard-count">{count}</p>
          <p className="widget-orderCard-percentage">
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
            <span className="widget-orderCard-month">
              From {previousMonthName}
            </span>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default FeatureOrderCard;
