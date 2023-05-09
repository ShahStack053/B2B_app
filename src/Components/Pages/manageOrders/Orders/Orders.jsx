import React from "react";
import "./Orders.css";
import addProductBtn from "../../../../Assets/Images/addProductBtn.png";
import SearchRange from "../../../SearchRangePicker/SearchRange";
import ManageOrderTable from "../../../featureTable/ManageOrderTable";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import ManageOrder from "../../../featureWidgetCard/ManageOrderCard/ManageOrder";

const Orders = () => {
  const location = useLocation();
  // console.log("dropdown", location.state.label);
  const label = location.state.label;
  const [ordersData, setOrdersData] = useState([]);
  const [ordersCardData, setOrdersCardData] = useState([]);
  const [paginationOrder, setPaginationOrder] = useState([]);

  const [searchValues, setSearchValues] = useState({
    search: null,
    dateFrom: null,
    dateTo: null,
    status: null,
    date: null,
    name: null,
    pageNumber: 1,
    pageSize: 10,
    sortColumn: "id",
    sortOrder: "z",
    userId: [],
  });

  useEffect(() => {
    var data = JSON.stringify(searchValues);
    setOrdersData([]);
    axios({
      method: "Post",
      url: "https://api-customer-dev.b2bprice.store/api/Order/GetAll",
      headers: {
        Authorization: `Bearer ${localStorage.AuthToken}`,
        "Content-Type": "application/json",
      },
      data,
    }).then(
      (res) => {
        setOrdersData(res.data.data);
        // console.log("pagination=>>>", res.data);
        setPaginationOrder(res.data);
      },
      (err) => {
        console.log("err===>", err);
      }
    );
  }, [searchValues]);
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
        // console.log("OrderData====>", res.data.data);
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
        // console.log("OrderCardData====>", res.data.data);
        setOrdersCardData(res.data.data);
      },
      (err) => {
        console.log("err===>", err);
      }
    );
  }, []);
  const navigate = useNavigate();
  const navigatorNewOrder = () => {
    let label = "Order";
    navigate("/main/newOrder", { state: { label } });
  };
  const onChangeRange = (value, dateString) => {
    // console.log("Selected Time: ", value);
    // console.log("Formatted Selected Time: ", dateString);
    setSearchValues({
      ...searchValues,
      dateFrom: dateString[0],
      dateTo: dateString[1],
    });
  };
  return (
    <div className="orders-container">
      <div className="orders-create-btn-div">
        <span className="manage-orders-span">Manage Orders</span>
        <button className="create-order-btn" onClick={navigatorNewOrder}>
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
        <SearchRange
          setSearchValues={setSearchValues}
          searchValues={searchValues}
          label={label}
          onChangeRange={onChangeRange}
        />
      </>
      <div className="orders-table-div">
        <ManageOrderTable
          ordersData={ordersData}
          setPaginationOrder={setPaginationOrder}
          paginationOrder={paginationOrder}
          setOrdersData={setOrdersData}
        />
      </div>
    </div>
  );
};

export default Orders;
