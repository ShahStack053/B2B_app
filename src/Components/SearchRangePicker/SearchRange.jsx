import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import Line from "../../Assets/Images/Line.png";
import { Input } from "antd";
import { DatePicker, Space } from "antd";
import StatusDropDown from "../Dropdown/StatusDropDown";
import "./SearchRange.css";

const SearchRange = () => {
  const { RangePicker } = DatePicker;
  return (
    <div className="orders-search-main-div">
      <div className="orders-search-div">
        <Input
          style={{
            borderRadius: 12,
            width: "95%",
            borderStyle: "none",
            border: "1px solid #EFEEEB",
            height: 40,
          }}
          placeholder="Search Order, Customer..."
          prefix={<SearchOutlined style={{ color: "#7E7E7E" }} />}
        />
      </div>
      <img
        src={Line}
        alt="Language"
        style={{
          height: 30,
          opacity: 0.9,
          marginRight: 20,
        }}
      />
      <div className="orders-dropdown-div">
        <Space>
          <RangePicker
            style={{
              fontFamily: "Poppins",
              fontSize: "14px",
              color: "#000000",
              background: "#FFFFFF",
              height: 40,
              width: 222,
              borderRadius: 12,
              border: "1px solid #EFEEEB",
            }}
          />
        </Space>
        <StatusDropDown />
      </div>
    </div>
  );
};

export default SearchRange;
