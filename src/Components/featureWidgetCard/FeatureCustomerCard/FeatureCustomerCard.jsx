import React from "react";
import { DashOutlined, RiseOutlined, FallOutlined } from "@ant-design/icons";
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
      <Card className="widget-card">
        <div className="widget-customerCard-up">
          <span>
            <img
              className="widget-customerCard-Images"
              src={totalBcImage}
              alt="CompletedOrder.png"
            />
          </span>
          <span>
            <DashOutlined className="widget-customerCard-dash" />
          </span>
        </div>
        <div>
          <span className="widget-customerCard-title"> {name}</span>
          <p className="widget-customerCard-count"> {count}</p>
          <p className="widget-customerCard-percentage">
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
            <span className="widget-customerCard-month">
              From {previousMonthName}
            </span>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default FeatureCustomerCard;
