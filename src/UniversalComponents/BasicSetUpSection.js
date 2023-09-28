import React from "react";
import ChecklistItem from "./ChecklistItem";
import { useState, useEffect } from "react";
import axios from "axios";

const BasicSetUpSection = ({ basicSetUpTasks }) => {
  // return (
  //   <div className="basicSetUp">
  //     <h3 className="FirstWeekSectionHeader" id="basicSetUpHeader">
  //       Basic Set up
  //     </h3>
  //     <div className="basicSetUpTaskList">
  //       {basicSetUpTasks.map((task, index) => (
  //         <ChecklistItem key={index} task={task} />
  //       ))}
  //     </div>
  //   </div>
  // );

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from your API when the component mounts
    axios
      .get("http://127.0.0.1:3001/api/tasks")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); // Empty dependency array to run the effect once

  return (
    <div className="basicSetUp">
      <h3 className="FirstWeekSectionHeader" id="basicSetUpHeader">
        Basic Set up
      </h3>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>{task.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default BasicSetUpSection;
