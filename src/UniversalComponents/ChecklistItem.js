import React, { useState } from "react";

const CheckListItem = ({ task }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const itemStyle = {
    textDecoration: isChecked ? "line-through" : "none",
  };

  return (
    <div style={itemStyle} className="basicSetUpTaskItem">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label>{task}</label>
    </div>
  );
};

export default CheckListItem;
