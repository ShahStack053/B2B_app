import React from "react";
import {
  ShoppingOutlined,
  DashOutlined,
  RiseOutlined,
} from "@ant-design/icons";
import { Card } from "antd";
import "./FeatureWidgetCard.css";

const FeatureWidgetCard = () => {
  return (
    <div>
      <Card className="widget-order-card1">
        <div className="widget-up">
          <span>
            <ShoppingOutlined />
          </span>
          <span>
            <DashOutlined />
          </span>
        </div>
        <div>
          <span className="card-title"> Completed Orders</span>
          <p className="card-orders"> 10,856</p>
          <p className="card-percentage-rise">
            <RiseOutlined />
            &nbsp; 13.02% &nbsp;
            <span className="card-month">From May</span>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default FeatureWidgetCard;
