import React from "react";
import CheckListItem from "./ChecklistItem";

const GetCompliantSection = ({ getCompliantTasks }) => {
  return (
    <div className="getCompliant">
      <h3 className="FirstWeekSectionHeader" id="getCompliantHeader">
        Get Compliant
      </h3>
      <div className="getCompliantTaskList">
        {getCompliantTasks.map((task, index) => (
          <div key={index} className="getCompliantTaskItem">
            <input type="checkbox" id={`task-${index}`}></input>
            <label htmlFor={`task-${index}`}>{task}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetCompliantSection;
