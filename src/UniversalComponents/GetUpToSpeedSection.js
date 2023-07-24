import React from "react";
import CheckListItem from "./ChecklistItem";

const GetUpToSpeedSection = ({ getUpToSpeedList }) => {
  return (
    <div className="basicSetUp">
      <h3 className="sectionHeader" id="getUpToSpeedHeader">
        Get up to Speed
      </h3>
      <div className="getUpToSpeedTasksList">
        {getUpToSpeedList.map((task, index) => (
          <div key={index} className="getUpToSpeedTaskItem">
            <input type="checkbox" id={`task-${index}`} />
            <label htmlFor={`task-${index}`}>{task}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetUpToSpeedSection;
