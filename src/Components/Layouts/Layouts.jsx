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
import Swal from "sweetalert2";
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
    }
  };

  const mylogout = () => {
    Swal.fire({
      title: "Do you want to logout?",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        navigate("/");
      }
    });
  };
  const items = [
    getItem(
      <button style={{ border: "none", background: "none", paddingLeft: 0 }}>
        <img
          src={dashboardSidebar}
          alt="Dashboard"
          style={{ width: 22, height: 19, marginRight: 17 }}
        />
        Dashboard
      </button>,
      "1"
    ),
    getItem(
      <button style={{ border: "none", background: "none", paddingLeft: 0 }}>
        <img
          src={orderSidebar}
          alt="Orders"
          style={{ width: 22, height: 19, marginRight: 17 }}
        />
        Orders
      </button>,
      "2"
    ),
    getItem(
      <button style={{ border: "none", background: "none", paddingLeft: 0 }}>
        <img
          src={RFQs}
          alt="RFQs"
          style={{ width: 22, height: 19, marginRight: 15, marginLeft: 4 }}
        />
        RFQs
      </button>,
      "3"
    ),
    getItem(
      <button style={{ border: "none", background: "none", paddingLeft: 0 }}>
        <img
          src={productSide}
          alt="My Products"
          style={{ width: 22, height: 19, marginRight: 17 }}
        />
        My Products
      </button>,
      "4"
    ),
    {
      type: "divider",
    },
    getItem(
      <button style={{ border: "none", background: "none", paddingLeft: 0 }}>
        <img
          src={UserSidebar}
          alt="Manage Users"
          style={{ width: 19, height: 19, marginRight: 17 }}
        />
        Manage Users
      </button>,
      "5"
    ),
    getItem(
      <button style={{ border: "none", background: "none", paddingLeft: 0 }}>
        <img
          src={companySidebar}
          alt="Company Profile"
          style={{ width: 24, height: 24, marginRight: 8 }}
        />
        Company Profile
      </button>,
      "6"
    ),
    getItem(
      <button style={{ border: "none", background: "none", paddingLeft: 0 }}>
        <img
          src={setting}
          alt="Settings"
          style={{ width: 22, height: 19, marginRight: 14 }}
        />
        Settings
      </button>,
      "7"
    ),

    getItem(
      <button
        style={{ border: "none", background: "none", paddingLeft: 0 }}
        onClick={mylogout}
      >
        <img
          src={logout}
          alt="Logout"
          style={{ width: 22, height: 19, marginRight: 20 }}
        />
        Logout
      </button>,
      "8"
    ),
  ];
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
                  paddingLeft: 0,
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "#000000",
                  borderInlineEnd: "none",
                  width: "100%",
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
