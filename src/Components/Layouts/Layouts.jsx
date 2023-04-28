import React from "react";
import "./Layouts.css";
import dashboardSidebar from "../../Assets/Images/Sidebar/dashboardSidebar.png";
import orderSidebar from "../../Assets/Images/Sidebar/orderSidebar.png";
import RFQs from "../../Assets/Images/Sidebar/RFQs.png";
import productSide from "../../Assets/Images/Sidebar/productSide.png";
import UserSidebar from "../../Assets/Images/Sidebar/UserSidebar.png";
import logout from "../../Assets/Images/Sidebar/logout.png";
import setting from "../../Assets/Images/Sidebar/setting.png";
import companySidebar from "../../Assets/Images/Sidebar/companySidebar.png";
import logo from "../../Assets/Images/logo.png";
import { Layout, Menu } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../Header/Navbar";
import LangDropDown from "../Dropdown/LangDropDown";
const { Header, Sider } = Layout;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

//======================================Side bar Item=======================
const items = [
  getItem(
    "Dashboard",
    "1",
    <img
      src={dashboardSidebar}
      alt="Dashboard"
      style={{ width: 22, height: 19, marginRight: 7 }}
    />
  ),
  getItem(
    "Orders",
    "2",
    <img
      src={orderSidebar}
      alt="Orders"
      style={{ width: 22, height: 19, marginRight: 7 }}
    />
  ),
  getItem(
    "RFQs",
    "3",
    <img
      src={RFQs}
      alt="RFQs"
      style={{ width: 22, height: 19, marginRight: 7 }}
    />
  ),
  getItem(
    "My Products",
    "4",
    <img
      src={productSide}
      alt="My Products"
      style={{ width: 22, height: 19, marginRight: 7 }}
    />
  ),
  {
    type: "divider",
  },
  getItem(
    "Manage Users",
    "5",
    <img
      src={UserSidebar}
      alt="Manage Users"
      style={{ width: 22, height: 19, marginRight: 7 }}
    />
  ),
  getItem(
    "Company Profile",
    "6",
    <img
      src={companySidebar}
      alt="Company Profile"
      style={{ width: 22, height: 19 }}
    />
  ),
  getItem(
    "Settings",
    "7",
    <img
      src={setting}
      alt="Settings"
      style={{ width: 22, height: 19, marginRight: 7 }}
    />
  ),
  getItem(
    "Logout",
    "8",
    <img
      src={logout}
      alt="Logout"
      style={{ width: 22, height: 19, marginRight: 7 }}
    />
  ),
];

const Layouts = () => {
  const navigate = useNavigate();

  const navigateRouteHandler = (e) => {
    if (e.key === "1") {
      navigate("/main/dashboard");
    } else if (e.key === "2") {
      navigate("/main/orders");
    } else if (e.key === "3") {
      navigate("/main/requestForQuotations");
    } else if (e.key === "4") {
      navigate("/main/myProduct");
    } else if (e.key === "5") {
      navigate("/main/manageUser");
    } else if (e.key === "6") {
      navigate("/main/companyProfile");
    } else if (e.key === "7") {
      navigate("/main/settings");
    } else {
      navigate("/main/logout");
    }
  };
  return (
    <Layout>
      <Sider style={{ background: "white" }}>
        <div className="sideBar">
          <div className="logo-sidebar-div">
            <img className="logo-sidebar" src={logo} alt="B2b Logo" />
          </div>
          <div className="lower-sidebar">
            <div className="lower-sidebar-menu-div">
              <Menu
                style={{
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "#000000",
                  borderInlineEnd: "none",
                  width: "97.3%",
                  paddingLeft: 0,
                }}
                defaultSelectedKeys={["1"]}
                mode="inline"
                items={items}
                onClick={(e) => navigateRouteHandler(e)}
              />
            </div>

            <div className="lower-sidebar-lang-div">
              <LangDropDown />
            </div>
          </div>
        </div>
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: "white",
            position: "fixed",
            zIndex: 1,
            width: "100%",
            height: 84,
          }}
        >
          <Navbar />
        </Header>
        <Outlet />
      </Layout>
    </Layout>
  );
};

export default Layouts;
