import React from "react";
import ChecklistItem from "./ChecklistItem";
import { useState, useEffect } from "react";
import axios from "axios";
import CheckListItem from "./ChecklistItem";

const BasicSetUpSection = ({ basicSetUpTasks }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:3001/api/tasks")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="basicSetUp">
      <h3 className="FirstWeekSectionHeader" id="basicSetUpHeader">
        Basic Set up
      </h3>
      <div className="basicSetUpTaskList">
        {tasks.map((task, index) => (
          <CheckListItem key={index} task={task.description} />
        ))}
      </div>
    </div>
  );
};

export default BasicSetUpSection;
