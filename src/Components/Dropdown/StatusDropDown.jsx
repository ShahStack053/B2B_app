import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Menu } from "antd";
import statusOrder from "../../Assets/Images/statusOrder.png";

const items = [
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
  // {
  //   label: "Submitted",
  //   key: "1",
  // },
  // {
  //   label: "In Transit",
  //   key: "2",
  // },
  // {
  //   label: "Cancelled",
  //   key: "3",
  // },
  // {
  //   label: "Delivered",
  //   key: "4",
  // },
];

const StatusDropDown = ({ onChangeStatus }) => {
  const [selectedStatus, setSelectedStatus] = useState(items[0].label);

  const handleMenuClick = (e) => {
    const selectedItem = items.find((item) => item.key === e.key);
    setSelectedStatus(selectedItem.label);
    onChangeStatus = { handleMenuClick };
  };
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
        {selectedStatus}
        <DownOutlined style={{ marginLeft: "15%", position: "sticky" }} />
      </Space>
    </Dropdown>
  );
};

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
