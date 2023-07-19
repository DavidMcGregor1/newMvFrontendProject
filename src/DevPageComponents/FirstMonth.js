import React from "react";
import "./FirstMonth.css";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const FirstMonth = () => {
  const [
    firstMonthReflectionPointsCollection,
    setfirstMonthReflectionPointsCollection,
  ] = useState([""]);

  const [generalTasks, setGeneralTasks] = useState([
    "General task 1",
    "General task 2",
    "General task 3",
    "General task 4",
    "General task 5",
  ]);

  const [firstResourcesList, setFirstResourcelist] = useState([
    {
      text: "New Starter Knowledge Base",
      link: "https://hlam-collab.atlassian.net/wiki/spaces/ID/pages/551256793/New+Starter+Knowledge+Base",
    },
    {
      text: "Get Started In Digital",
      link: "https://hlam-collab.atlassian.net/wiki/spaces/ID/pages/564134589/Getting+started+in+Digital",
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
      text: "Active Savings Confluence Space",
      link: "https://confluence.hargreaveslansdown.co.uk/display/AS/Active+Savings",
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
      text: "Quick Start Guide",
      link: "https://tinyurl.com/mr4c6s6p",
    },
    {
      text: "GitLab Access Guide",
      link: "https://tinyurl.com/y4ebnwsc",
    },
    {
      text: "Jenkins",
      link: "https://jenkins-savings.hargreaveslansdown.co.uk/",
    },
    {
      text: "Coding Standards Miro",
      link: "https://miro.com/app/board/uXjVPOIesoM=/",
    },
    {
      text: "SonarQube",
      link: "https://sonarqube.hargreaveslansdown.co.uk/sessions/new?return_to=%2Flogin",
    },
    {
      text: "Workday",
      link: "https://wd3.myworkday.com/hargreaveslansdown/",
    },
    {
      text: "Savings Cheat Sheet",
      link: "https://hlam-collab.atlassian.net/wiki/spaces/AS/pages/494518362/Savings+Cheat+Sheet",
    },
  ]);

  const sections = ["General Tasks"];

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
      setfirstMonthReflectionPointsCollection(
        updatedfirstMonthReflectionPointsCollection
      );
      console.log(
        "Current Reflection Collection:  -> " +
          firstMonthReflectionPointsCollection
      );
    }

    setNewReflectionPoint("");
  };

  return (
    <div id="FirstMonthMainContainer">
      <div className="generalTasks">
        <h3 className="sectionHeader" id="getUpToSpeedHeader">
          Get up to Speed
        </h3>
        <div className="getUpToSpeedTasksList">
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
                <a className="resourceAnchor" href={object.link}>
                  {object.text}
                </a>
              </div>
            ))}
          </div>
          <div className="secondResourcesList">
            {secondResourcesList.map((object) => (
              <div className="resourceItem">
                <a className="resourceAnchor" href={object.link}>
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

        <div className="addTaskButtonDiv">
          <button id="addTaskButton" onClick={handleAddReflectionPoint}>
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

        <div className="sectionOptions">
          {sections.map((section, index) => (
            <div key={index} className="sectionItems">
              <input
                type="radio"
                id={`section-${index}`}
                name="section"
                value={section}
              />
              <label htmlFor={`section-${index}`}>{section}</label>
            </div>
          ))}
        </div>

        <div className="addTaskButtonDiv">
          <button id="addTaskButton" onClick={handleAddTask}>
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstMonth;
