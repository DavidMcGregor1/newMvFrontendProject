import React from "react";
import CheckListItem from "./ChecklistItem";

const GeneralTasksSection = ({ generalTasks }) => {
  return (
    <div className="testerGeneralTasks">
      <h3 className="sectionHeader" id="generalTasksHeader">
        General Tasks
      </h3>
      <div className="generalTasksList">
        {generalTasks.map((task, index) => (
          <div key={index} className="devGeneralTasksItem">
            <input type="checkbox" id={`task-${index}`} />
            <label htmlFor={`task-${index}`}>{task}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeneralTasksSection;
