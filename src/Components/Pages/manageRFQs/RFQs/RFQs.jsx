import React from "react";
import addProductBtn from "../../../../Assets/Images/addProductBtn.png";
import { useLocation, useNavigate } from "react-router-dom";
import "./RFQs.css";
import SearchRange from "../../../SearchRangePicker/SearchRange";
import RFQsTable from "../requestAsset/Table/RFQsTable";
import RFQsWidgetCard from "../requestAsset/widgetCard/RFQsWidgetCard";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const RFQs = () => {
  const [rfqsData, setRFQsData] = useState([]);
  const [paginationRFQs, setPaginationRFQs] = useState([]);
  //   console.log("rfq data", rfqsData);
  const [rfqsCardData, setRFQsCardData] = useState([]);
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
    setRFQsData([]);
    axios({
      method: "Post",
      url: "https://api-customer-dev.b2bprice.store/api/RFQ/GetAll",
      headers: {
        Authorization: `Bearer ${localStorage.AuthToken}`,
        "Content-Type": "application/json",
      },
      data,
    }).then(
      (res) => {
        setRFQsData(res.data.data);
        // console.log("pagination=>>>", res.data);
        setPaginationRFQs(res.data);
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
      url: `https://api-customer-dev.b2bprice.store/api/RFQ/GetAll`,
      headers: {
        Authorization: `Bearer ${localStorage.AuthToken}`,
        "Content-Type": "application/json",
      },
      data: data,
    }).then(
      (res) => {
        setRFQsData(res.data.data);
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
      url: `https://api-customer-dev.b2bprice.store/api/RFQ/GetRFQCards`,
      headers: {
        Authorization: `Bearer ${localStorage.AuthToken}`,
        "Content-Type": "application/json",
      },
      data: data,
    }).then(
      (res) => {
        setRFQsCardData(res.data.data);
      },
      (err) => {
        console.log("err===>", err);
      }
    );
  }, []);
  const location = useLocation();
  const label = location.state.label;
  const navigate = useNavigate();
  const navigatorNewRFQs = () => {
    navigate("/main/createRFQs");
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
    <div className="rfqs-container">
      <div className="rfqs-add-btn-div">
        <span className="rfqs-span">Request for Quotations</span>
        <button className="add-rfqs-btn" onClick={() => navigatorNewRFQs()}>
          <img
            src={addProductBtn}
            alt="add-sign-box"
            style={{ width: 24, marginRight: 10 }}
          />
          Create RFQ
        </button>
      </div>
      <div className="rfqs-widgets-card-div" style={{ display: "flex" }}>
        {rfqsCardData?.map((x, i) => {
          return (
            <RFQsWidgetCard
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
      <div className="rfqs-table-div ">
        <RFQsTable
          rfqsData={rfqsData}
          setPaginationRFQs={setPaginationRFQs}
          paginationRFQs={paginationRFQs}
          setRFQsData={setRFQsData}
        />
      </div>
    </div>
  );
};

export default RFQs;
