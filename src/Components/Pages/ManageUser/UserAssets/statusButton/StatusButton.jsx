import React, { useState } from "react";
import { Switch } from "antd";

const StatusButton = ({ userData }) => {
  const [isChecked, setIsChecked] = useState(true);
  console.log("active status=>>>>>", userData);
  const onChange = (checked) => {
    // setIsChecked({
    //   ...(userData.activeStatus === true ? isChecked : !isChecked),
    // });
    setIsChecked(checked);
    console.log(`switch to ${checked}`);
  };

  return (
    <Switch
      style={{
        background: isChecked ? "rgba(0, 207, 21, 1)" : "rgba(0, 0, 0, 0.25)",
      }}
      // defaultChecked
      onChange={onChange}
    />
  );
};

export default StatusButton;
