import React from "react";
import { DashOutlined, RiseOutlined } from "@ant-design/icons";
import { Card } from "antd";
import totalBcImage from "../../../Assets/Images/totalBcImage.png";
import "./FeatureCustomerCard.css";

const FeatureCustomerCard = ({
  count,
  name,
  percentage,
  previousMonthName,
}) => {
  return (
    <div>
      <Card className="widget-card-bc">
        <div className="widget-up-bc">
          <span>
            <img
              className="widget-cardImages-bc"
              src={totalBcImage}
              alt="CompletedOrder.png"
            />
          </span>
          <span>
            <DashOutlined className="widget-dash-bc" />
          </span>
        </div>
        <div>
          <span className="card-title-bc"> {name}</span>
          <p className="card-orders-bc"> {count}</p>
          <p className="card-percentage-rise-bc">
            <RiseOutlined />
            &nbsp; {percentage}% &nbsp;
            <span className="card-month-bc">From {previousMonthName}</span>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default FeatureCustomerCard;
