import React from "react";
import CheckListItem from "./ChecklistItem";

const SavingsSpecificTasksSections = ({ savingsSpecificTasksList }) => {
  return (
    <div className="savingsSpecificTasks">
      <h3 className="sectionHeader" id="savingsSpecificTasksHeader">
        Savings Specific Tasks
      </h3>
      <div className="savingsSpecificTasksList">
        {savingsSpecificTasksList.map((task, index) => (
          <div key={index} className="savingsSpecificTaskListItem">
            <input type="checkbox" id={`task-${index}`} />
            <label htmlFor={`task-${index}`}>{task}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavingsSpecificTasksSections;
