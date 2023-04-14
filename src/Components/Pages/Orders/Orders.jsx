import React from "react";
import "./Orders.css";
import addProductBtn from "../../../Assets/Images/addProductBtn.png";
import SearchRange from "../../SearchRangePicker/SearchRange";
import ManageOrderTable from "../../featureTable/ManageOrderTable";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import ManageOrder from "../../featureWidgetCard/ManageOrderCard/ManageOrder";

const Orders = () => {
  const [ordersData, setOrdersData] = useState([]);
  const [ordersCardData, setOrdersCardData] = useState([]);
  useEffect(() => {
    var data = JSON.stringify({});
    axios({
      method: "post",
      url: `https://api-customer-dev.b2bprice.store/api/Order/GetAll`,
      headers: {
        Authorization: `Bearer ${localStorage.AuthToken}`,
        "Content-Type": "application/json",
      },
      data: data,
    }).then(
      (res) => {
        // debugger;
        console.log("OrderData====>", res.data.data);
        setOrdersData(res.data.data);
      },
      (err) => {
        console.log("err===>", err);
      }
    );
  }, []);
  useEffect(() => {
    var data = JSON.stringify({});
    axios({
      method: "get",
      url: `https://api-customer-dev.b2bprice.store/api/Order/GetOrderCards`,
      headers: {
        Authorization: `Bearer ${localStorage.AuthToken}`,
        "Content-Type": "application/json",
      },
      data: data,
    }).then(
      (res) => {
        // debugger;
        console.log("OrderCardData====>", res.data.data);
        setOrdersCardData(res.data.data);
      },
      (err) => {
        console.log("err===>", err);
      }
    );
  }, []);
  const navigate = useNavigate();
  const myFunction = () => {
    navigate("/layout/newOrder");
  };
  return (
    <div className="orders-container">
      <div className="orders-create-btn-div">
        <span className="manage-orders-span">Manage Orders</span>
        <button className="create-order-btn" onClick={myFunction}>
          <img
            src={addProductBtn}
            alt="add-sign-box"
            style={{ width: 24, marginRight: 10 }}
          />
          Create Order
        </button>
      </div>
      <div className="orders-widgets-card-div">
        {ordersCardData?.map((x, i) => {
          return (
            <ManageOrder
              key={i}
              count={x.count}
              name={x.name}
              previousMonthName={x.previousMonthName}
              percentage={x.percentage}
            />
          );
        })}
      </div>
      <>
        <SearchRange />
      </>
      <div className="orders-table-div">
        <ManageOrderTable ordersData={ordersData} />
      </div>
    </div>
  );
};

export default Orders;
