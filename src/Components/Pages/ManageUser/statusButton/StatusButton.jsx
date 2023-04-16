import React, { useState } from "react";
import { Switch } from "antd";

const StatusButton = () => {
  const [isChecked, setIsChecked] = useState(true);

  const onChange = (checked) => {
    setIsChecked(checked);
    console.log(`switch to ${checked}`);
  };

  return (
    <Switch
      style={{
        background: isChecked ? "rgba(0, 207, 21, 1)" : "rgba(0, 0, 0, 0.25)",
      }}
      defaultChecked
      onChange={onChange}
    />
  );
};

export default StatusButton;
