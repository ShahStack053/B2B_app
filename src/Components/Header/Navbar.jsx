import React from "react";
import "./Navbar.css";
import PersonDropDown from "../Dropdown/PersonDropDown";
import userImage from "../../Assets/Images/userImage.png";
import { SearchOutlined, BellOutlined } from "@ant-design/icons";
import { Input } from "antd";

const date = new Date("28 Jul, 2022");
const options = { year: "numeric", month: "short", day: "numeric" };
const formattedDate = date.toLocaleDateString("en-US", options);
// formattedDate will be "Jul 28, 2022"

const month = formattedDate.split(" ")[0];
const day = formattedDate.split(" ")[1].slice(0, -1);
const year = formattedDate.split(" ")[2];
const finalDate = `${day} ${month}, ${year}`;
const Navbar = () => {
  return (
    <div className="topBar-bc">
      <div className="searchLeftTop-bc">
        <Input
          style={{
            borderRadius: 18,
            width: 265,
            borderStyle: "none",
            border: "1px solid #EFEEEB",
          }}
          placeholder="Search..."
          prefix={<SearchOutlined style={{ color: "#7E7E7E" }} />}
        />
      </div>
      <div className="dashboardTopBarDiv-bc">
        <h3 className="dashboardTop-bc">Dashboard</h3>
      </div>
      <div className="topBarRight-bc">
        <p className="DateTop-bc">{finalDate}</p>
        <span className="iconbellTop-span-bc">
          <BellOutlined style={{ height: 28 }} />
        </span>
        <img src={userImage} alt="userImage" className="userImage" />
        <PersonDropDown />
      </div>
    </div>
  );
};

export default Navbar;