import React from "react";
import "./FirstMonth.css";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import Button from "../UniversalComponents/Button";

const FirstMonth = () => {
  const [
    firstMonthReflectionPointsCollection,
    setfirstMonthReflectionPointsCollection,
  ] = useState([""]);

  const [generalTasks, setGeneralTasks] = useState([
    "Keep getting involved in group discussions",
    "Complete a ticket independently",
    "Fill out reflection points on any areas that could be improved.",
    "Set up regular catch ups with your manager and buddy",
    "Have a think about what you want to spend your training budget on",
    "Attend a social event!",
  ]);

  const [firstResourcesList, setFirstResourcelist] = useState([
    {
      text: "Active Savings Confluence Space",
      link: "https://confluence.hargreaveslansdown.co.uk/display/AS/Active+Savings",
    },
    {
      text: "Contextual Org Chart",
      link: "https://miro.com/app/board/uXjVOQHpSz8=/?share_link_id=903609960752",
    },
    {
      text: "Village Halls",
      link: "https://hlam-collab.atlassian.net/wiki/spaces/ID/pages/530057952/Village+halls",
    },

    {
      text: "HL Savings Digital Library",
      link: "https://tinyurl.com/2c8xw43j",
    },
    {
      text: "DSApp Code Layers",
      link: "https://tinyurl.com/5a3db2uu",
    },
  ]);

  const [secondResourcesList, setSecondResourcesList] = useState([
    {
      text: "Coding Standards Miro",
      link: "https://miro.com/app/board/uXjVPOIesoM=/",
    },
    {
      text: "SonarQube",
      link: "https://sonarqube.hargreaveslansdown.co.uk/sessions/new?return_to=%2Flogin",
    },
    {
      text: "Savings Cheat Sheet",
      link: "https://hlam-collab.atlassian.net/wiki/spaces/AS/pages/494518362/Savings+Cheat+Sheet",
    },
  ]);

  const [newTask, setNewTask] = React.useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      console.log("Inside if statement");
      let updatedGeneralTasksList = [...generalTasks];
      updatedGeneralTasksList.push(newTask);
      setGeneralTasks(updatedGeneralTasksList);
    }

    setNewTask("");
    console.log("Working");
  };

  const [newReflectionPoint, setNewReflectionPoint] = React.useState("");

  const handleAddReflectionPoint = () => {
    if (newReflectionPoint.trim() !== "") {
      let updatedfirstMonthReflectionPointsCollection = [
        ...firstMonthReflectionPointsCollection,
      ];
      updatedfirstMonthReflectionPointsCollection.push(newReflectionPoint);
      console.log(
        "First Month Reflection Collection:  -> " +
          updatedfirstMonthReflectionPointsCollection
      );
      setfirstMonthReflectionPointsCollection(
        updatedfirstMonthReflectionPointsCollection
      );
    }

    setNewReflectionPoint("");
  };

  return (
    <div id="FirstMonthMainContainer">
      <div className="generalTasks">
        <h3 className="sectionHeader" id="generalTasksHeader">
          General Tasks
        </h3>
        <div className="generalTasksList">
          {generalTasks.map((task, index) => (
            <div key={index} className="generalTasksItem">
              <input type="checkbox" id={`task-${index}`} />
              <label htmlFor={`task-${index}`}>{task}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="resources">
        <h3 className="sectionHeader" id="resourcesHeader">
          Resources
        </h3>
        <div className="mainResourceDiv">
          <div className="resourcesList">
            {firstResourcesList.map((object) => (
              <div className="resourceItem">
                <a
                  className="resourceAnchor"
                  href={object.link}
                  target="_blank">
                  {object.text}
                </a>
              </div>
            ))}
          </div>
          <div className="secondResourcesList">
            {secondResourcesList.map((object) => (
              <div className="resourceItem">
                <a
                  className="resourceAnchor"
                  href={object.link}
                  target="_blank">
                  {object.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="FirstMonthReflectionPoints">
        <h3 className="sectionHeader" id="reflectionPointsHeader">
          Reflection Points
        </h3>

        <div className="addReflectionPointInputDiv">
          <textarea
            id="FirstMonthAddReflectionPointInputBox"
            type="text"
            value={newReflectionPoint}
            onChange={(e) => setNewReflectionPoint(e.target.value)}
          />
        </div>

        <div className="FirstMonthSubmitReflectionButtonDiv">
          <button
            id="FirstMonthSubmitReflectionButton"
            onClick={handleAddReflectionPoint}>
            Sumbit
          </button>
        </div>
      </div>

      <div className="addTask">
        <h3 className="sectionHeader" id="addTaskHeader">
          Add Task
        </h3>

        <div className="addTaskInputDiv">
          <input
            id="addTaskInputBox"
            type="input"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </div>

        <div className="FirstMonthAddTaskButtonDiv">
          {/* <button id="FirstMonthAddTaskButton" onClick={handleAddTask}>
            Add Task
          </button> */}
          <Button label="Add Task" />
        </div>
      </div>
    </div>
  );
};

export default FirstMonth;
