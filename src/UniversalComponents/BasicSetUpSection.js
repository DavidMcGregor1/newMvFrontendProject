import React from "react";
import ChecklistItem from "./ChecklistItem";

const BasicSetUpSection = ({ basicSetUpTasks }) => {
  return (
    <div className="basicSetUp">
      <h3 className="FirstWeekSectionHeader" id="basicSetUpHeader">
        Basic Set up
      </h3>
      <div className="basicSetUpTaskList">
        {basicSetUpTasks.map((task, index) => (
          <ChecklistItem key={index} task={task} />
        ))}
      </div>
    </div>
  );
};

export default BasicSetUpSection;
