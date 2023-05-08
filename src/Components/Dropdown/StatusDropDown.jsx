import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Menu } from "antd";
import statusOrder from "../../Assets/Images/statusOrder.png";

const StatusDropDown = ({ searchValues, setSearchValues, label }) => {
  const [selectedStatus, setSelectedStatus] = useState("");
  const handleMenuClick = (e) => {
    const selectedItem = items.find((item) => item.key === e.key);
    setSelectedStatus(selectedItem.label);

    if (label === "Order") {
      if (selectedItem.label === "All") {
        console.log("order label", selectedItem.label);
        setSearchValues({ ...searchValues, status: null });
      } else {
        setSearchValues({ ...searchValues, status: selectedItem.label });
      }
      // setSearchValues({ ...searchValues, status: selectedItem.label });
    } else if (label === "User") {
      const selectedItem = items.find((item) => item.key === e.key);
      setSelectedStatus(selectedItem.label);
      if (selectedItem.label === "Active") {
        setSearchValues({ ...searchValues, status: true });
      } else if (selectedItem.label === "In Active") {
        setSearchValues({ ...searchValues, status: false });
      } else {
        setSearchValues({ ...searchValues, status: null });
      }
      // setSearchValues({ ...searchValues, status: selectedItem.label });
    } else if (label === "RFQs") {
      if (selectedItem.label === "All") {
        setSearchValues({ ...searchValues, status: null });
      } else {
        setSearchValues({ ...searchValues, status: selectedItem.label });
      }
    }
  };
  // const handleMenuClick = (e) => {
  //   const selectedItem = items.find((item) => item.key === e.key);
  //   setSelectedStatus(selectedItem.label);
  //   if (selectedItem.label === "Active") {
  //     setSearchValues({ ...searchValues, status: true });
  //   } else if (selectedItem.label === "In Active") {
  //     setSearchValues({ ...searchValues, status: false });
  //   } else {
  //     setSearchValues({ ...searchValues, status: null });
  //   }
  // };
  const items =
    label === "Order"
      ? itemsOrder
      : label === "User"
      ? itemsUser
      : label === "RFQs"
      ? itemsRFQs
      : [];

  // let items;
  // if (label === "Order") {
  //   items = itemsOrder;
  // } else if (label === "User") {
  //   items = itemsUser;
  // } else if (label === "RFQS") {
  //   items = itemsRFQs;
  // }

  const statusIconStyle = {
    marginLeft: 10,
    width: 20,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  };

  return (
    <Dropdown
      overlay={
        <Menu onClick={handleMenuClick}>
          {items.map((item) => (
            <Menu.Item key={item.key}>{item.label}</Menu.Item>
          ))}
        </Menu>
      }
      trigger={["click"]}
    >
      <Space
        style={{
          fontFamily: "Poppins",
          fontSize: "12.2195px",
          color: "#000000",
          background: "#FFFFFF",
          height: 40,
          width: "35%",
          borderRadius: 12,
          border: "1px solid #EFEEEB",
          marginLeft: 20,
        }}
      >
        <img src={statusOrder} alt="Language" style={statusIconStyle} />
        {selectedStatus || items[0].label}
        <DownOutlined style={{ marginLeft: "15%", position: "sticky" }} />
      </Space>
    </Dropdown>
  );
};
const itemsUser = [
  {
    label: "All",
    key: "0",
  },
  {
    label: "Active",
    key: "1",
  },
  {
    label: "In Active",
    key: "2",
  },
];
const itemsOrder = [
  {
    label: "All",
    key: "0",
  },
  {
    label: "Opened",
    key: "1",
  },
  {
    label: "Submitted",
    key: "2",
  },
  {
    label: "Confirmed",
    key: "3",
  },
  {
    label: "Cancelled",
    key: "4",
  },
  {
    label: "In-Transit",
    key: "5",
  },
  {
    label: "Delivered",
    key: "6",
  },
  {
    label: "Completed",
    key: "7",
  },
];
const itemsRFQs = [
  {
    label: "All",
    key: "0",
  },
  {
    label: "Quote Submitted",
    key: "1",
  },
  {
    label: "Submitted",
    key: "2",
  },
  {
    label: "Pending Submission",
    key: "3",
  },
  {
    label: "Approved",
    key: "4",
  },
  {
    label: "Rejected",
    key: "5",
  },
];
export default StatusDropDown;

// import { Select, Space } from "antd";
// const handleChange = (value) => {
//   console.log(`selected ${value}`);
// };
// const StatusDropDown = () => (
//   <Space wrap>
//     <Select
//       defaultValue="In Active"
//       style={{
//         fontFamily: "Poppins",
//         fontSize: "12.2195px",
//         color: "#000000",
//         background: "#FFFFFF",
//         height: 40,
//         width: "100%",
//         borderRadius: 12,
//         border: "1px solid #EFEEEB",
//         marginLeft: 20,
//       }}
//       onChange={handleChange}
//       options={[
//         {
//           value: "All",
//           label: "All",
//         },
//         {
//           value: "Active",
//           label: "Active",
//         },
//         {
//           value: "In Active",
//           label: "In Active",
//         },
//       ]}
//     />
//   </Space>
// );
// export default StatusDropDown;
