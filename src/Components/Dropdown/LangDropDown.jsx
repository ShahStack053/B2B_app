import React, { useState } from "react";
// import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Menu } from "antd";
import lang from "../../Assets/Images/lang.png";
import dropIcon from "../../Assets/Images/dropIcon.png";

const items = [
  {
    label: "English (UK)",
    key: "0",
  },
  {
    label: "Arabic (KSA)",
    key: "1",
  },
];

const LangDropDown = () => {
  const [selectedLang, setSelectedLang] = useState(items[0].label);

  const handleMenuClick = (e) => {
    const selectedItem = items.find((item) => item.key === e.key);
    setSelectedLang(selectedItem.label);
  };

  const langIconStyle = { width: "25px", marginLeft: 10 };
  const dropIconStyle = { width: "10px" };

  return (
    <Dropdown
      overlay={
        <Menu onClick={handleMenuClick}>
          {items.map((item) => (
            <Menu.Item key={item.key}>
              <Space>
                <img src={lang} alt="Language" style={langIconStyle} />
                {item.label}
              </Space>
            </Menu.Item>
          ))}
        </Menu>
      }
      trigger={["click"]}
    >
      <Space
        style={{
          fontFamily: "Poppins",
          fontSize: "14px",
          color: "#000000",
          background: "#F3F3F3",
          height: 35,
          width: 170,
          borderRadius: 7,
          // marginTop: 14,
        }}
      >
        <img src={lang} alt="Language" style={langIconStyle} /> {selectedLang}{" "}
        <img src={dropIcon} alt="Language" style={dropIconStyle} />
      </Space>
    </Dropdown>
  );
};

export default LangDropDown;
