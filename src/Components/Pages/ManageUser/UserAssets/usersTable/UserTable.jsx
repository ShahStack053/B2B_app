import React from "react";
import { Modal, Switch, Table } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";
// import Swal from "sweetalert2";
import { useState } from "react";
import "./UserTable.css";
import { Dropdown, Space } from "antd";
import axios from "axios";
import Dashes from "../../../../../Assets/Images/Dashes.png";
import { useNavigate } from "react-router-dom";
import confirm from "antd/es/modal/confirm";
import Delete from "../../../../../Assets/Images/Action/Delete.png";
import Edit from "../../../../../Assets/Images/Action/Edit.png";
import View from "../../../../../Assets/Images/Action/View.png";

const UserTable = ({ userData, setUserData, pagination, setPagination }) => {
  // console.log("userData===>", userData);
  const [currentPage, setCurrentPage] = useState();
  const navigate = useNavigate();
  const [id, setRowID] = useState();

  const viewClickHandler = (label) => {
    navigate("/main/newUser", { state: { label, id } });
  };

  const editClickHandler = (label) => {
    navigate("/main/newUser", { state: { label, id } });
  };

  const deleteClickHandler = () => {
    confirm({
      title: "Delete User",
      icon: <ExclamationCircleFilled style={{ color: " #faad14" }} />,
      content: "Do you want to delete User?",
      okText: "Yes",
      cancelText: "Cancel",
      okCancel: true,
      okButtonProps: { style: { float: "right", marginRight: 10 } },
      cancelButtonProps: { style: { float: "right" } },
      onOk() {
        axios({
          method: "Delete",
          url: `https://api-customer-dev.b2bprice.store/api/BCUser/DeleteById?Id=${id}&BCId=2`,
          headers: {
            Authorization: `Bearer ${localStorage.AuthToken}`,
            "Content-Type": "application/json",
          },
        }).then(
          (res) => {
            Modal.success({
              title: "Success",
              content: "User Deleted Successfully",
            });
            console.log("User Deleted successful");
            paginationHandler();
          },
          (err) => {
            console.log(err);
            Modal.error({
              title: "Failed",
              content: "User Deletion Failed",
            });
          }
        );
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const paginationHandler = (page) => {
    // console.log("page===>", page);
    setCurrentPage(page);
    setUserData([]);
    var data = JSON.stringify({});
    axios({
      method: "Post",
      url: "https://api-customer-dev.b2bprice.store/api/BCUser/GetAll",
      headers: {
        Authorization: `Bearer ${localStorage.AuthToken}`,
        "Content-Type": "application/json",
      },
      data,
    }).then(
      (res) => {
        setUserData(res.data.data);
        setPagination(res.data);
      },
      (err) => {
        console.log("err===>", err);
      }
    );
  };

  const onChangeStatus = (id, status) => {
    const obj = {
      id,
      status,
    };
    // console.log("status============>", status);
    // console.log("row id===>", id);
    const data = JSON.stringify(obj);

    axios({
      method: "post",
      url: "https://api-customer-dev.b2bprice.store/api/BCUser/ChangeUserStatus",
      headers: {
        Authorization: `Bearer ${localStorage.AuthToken}`,
        "Content-Type": "application/json",
      },
      data,
    }).then(
      (res) => {
        Modal.success({
          title: "Success",
          content: "Status Changed Successfully",
        });

        console.log("Status Changed successful");
      },
      (err) => {
        console.log(err);
        Modal.error({
          title: "Failed",
          content: "Status Changed Failed",
        });
      }
    );
  };

  const columns = [
    {
      title: (
        <div
          style={{
            color: "#606060",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontSize: "12.2195px",
            fontWeight: 400,
            textAlign: "center",
          }}
        >
          ID
        </div>
      ),
      dataIndex: "id",
      key: "id",
      ellipsis: true,
      render: (text) => (
        <div
          style={{
            color: "#000000",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "13px",
            textAlign: "center",
          }}
        >
          {text}
        </div>
      ),
      // width: "7%",
    },
    {
      title: (
        <div
          style={{
            color: "#606060",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "12.2195px",
            // textAlign: "center",
          }}
        >
          Manager Name
        </div>
      ),
      dataIndex: "enFullName",
      key: "enFullName",
      ellipsis: true,
      render: (text) => (
        <div
          style={{
            color: "#000000",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "13px",
          }}
        >
          {text}
        </div>
      ),
      // width: "15%",
    },
    {
      title: (
        <div
          style={{
            color: "#606060",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontSize: "12.2195px",
            fontWeight: 400,
            // textAlign: "center",
          }}
        >
          Mobile Number
        </div>
      ),
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      ellipsis: true,
      render: (text) => (
        <div
          style={{
            color: "#000000",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "13px",
            // textAlign: "center",
          }}
        >
          {text}
        </div>
      ),
      // width: "13%",
    },
    {
      title: (
        <div
          style={{
            color: "#606060",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "12.2195px",
          }}
        >
          Email Address
        </div>
      ),
      dataIndex: "email",
      key: "email",
      ellipsis: true,
      render: (text) => (
        <div
          style={{
            color: "#000000",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "13px",
          }}
        >
          {text}
        </div>
      ),
      width: "17%",
    },
    {
      title: (
        <div
          style={{
            color: "#606060",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontSize: "12.2195px",
            fontWeight: 400,
            // textAlign: "center",
          }}
        >
          Created Date
        </div>
      ),
      dataIndex: "createdOn",
      key: "createdOn",
      ellipsis: true,
      render: (text) => {
        const date = new Date(text);
        const month = new Intl.DateTimeFormat("en-US", {
          month: "short",
        }).format(date);
        const day = date.getDate();
        const year = date.getFullYear();
        const formattedDate = `${month} ${day}, ${year}`;

        return (
          <div
            style={{
              color: "#000000",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "13px",
              // textAlign: "center",
            }}
          >
            {formattedDate}
          </div>
        );
      },
    },
    {
      title: (
        <div
          style={{
            color: "#606060",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "12.2195px",
            textAlign: "center",
          }}
        >
          Role
        </div>
      ),
      dataIndex: "role",
      key: "role",
      ellipsis: true,
      render: (text) => (
        <div
          style={{
            color: "#000000",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "13px",
            textAlign: "center",
          }}
        >
          {text}
        </div>
      ),
      // width: "13%",
    },
    {
      title: (
        <div
          style={{
            color: "#606060",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontSize: "12.2195px",
            fontWeight: 400,
            textAlign: "center",
          }}
        >
          Status
        </div>
      ),
      dataIndex: "activeStatus",
      key: "activeStatus",
      ellipsis: true,
      render: (props, row) => (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Switch
            defaultChecked={props}
            // defaultChecked
            onChange={() => onChangeStatus(row.id, !props)}
          />
        </div>
      ),
      // width: "7%",
    },

    {
      title: (
        <div
          style={{
            color: "#606060",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "12.2195px",
            textAlign: "center",
          }}
        >
          Action
        </div>
      ),
      dataIndex: "action",
      key: "action",
      ellipsis: true,
      render: (props, row) => (
        <div
          style={{
            color: "#000000",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "13px",
            textAlign: "center",
          }}
        >
          <Space>
            <Dropdown menu={menuProps} onClick={() => setRowID(row.id)}>
              {/* <Space>{<DashOutlined />}</Space> */}
              <Space>
                <img
                  src={Dashes}
                  alt="Dashes"
                  style={{
                    width: 20,
                    height: 5,
                    opacity: "0.7",
                    // color: "grey",
                  }}
                />
              </Space>
            </Dropdown>
          </Space>
        </div>
      ),
      // width: "10%",
    },
  ];

  const items = [
    {
      label: (
        <button
          style={{
            border: "none",
            background: "none",
            color: "#252733",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => viewClickHandler("View")}
        >
          <img src={View} alt="view" style={{ width: 18 }} />
          &nbsp;&nbsp; View
        </button>
      ),
      key: "1",
    },
    {
      label: (
        <button
          style={{
            border: "none",
            background: "none",
            color: "#252733",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => editClickHandler("Edit")}
        >
          <img src={Edit} alt="view" style={{ width: 18 }} />
          &nbsp;&nbsp; Edit
        </button>
      ),
      key: "2",
    },
    {
      label: (
        <button
          style={{
            border: "none",
            background: "none",
            color: "#252733",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={deleteClickHandler}
        >
          <img src={Delete} alt="view" style={{ width: 14, height: 18 }} />
          &nbsp;&nbsp;&nbsp; Delete
        </button>
      ),
      key: "3",
    },
  ];

  const menuProps = {
    items,
  };
  return (
    <div>
      <Table
        columns={columns}
        dataSource={userData}
        rowClassName={() => "table-row"}
        pagination={{
          current: currentPage,
          pageSize: 10,
          totalPages: pagination.totalPages,
          total: pagination.totalRecords,
          onChange: (page) => {
            paginationHandler(page);
          },
          // setCurrentPage(page)
          showTotal: (total, range) =>
            ` ${range[0]}-${range[1]} of ${total} items`,
        }}
      />
    </div>
  );
};

export default UserTable;
