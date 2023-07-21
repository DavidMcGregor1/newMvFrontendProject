import React from "react";
import "./FirstTwoWeeks.css";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import Button from "../UniversalComponents/Button";
import ResourcesComponent from "../UniversalComponents/ResourcesComponent";

function FirstTwoWeeks() {
  const [reflectionPointsCollection, setReflectionPointsCollection] = useState([
    "",
  ]);

  const [getUpToSpeedList, setGetUpToSpeedList] = useState([
    "Take a look at the New Starter Knowledge base",
    "Take a look at Getting Started In Digital",
    "Familiarise yourself with the digital ordanisation and roles responsibilities of different functions by reviewing the Contextual Org Chart",
    "Get a feel of what's going on in digital by watching the most recent Village Halls.",
    "Familiarise yourself with key 'need to know/be aware of' concepts such as: IT Development Framework, Software pipeline and SDLC, Architecture decision records (ADRs) - You will receive mandatory workday learning modules on each of these",
  ]);

  const [savingsSpecificTasksList, setSavingsSpecificTasksList] = useState([
    "Bookmark the confluence area for Active Savings",
    "Take a look at the digital library - an index page into the active savings confluence space",
    "Take part in a squat retro meeting. If you don't have an invite, contact your product manager.",
    "Take part in a squad planning meeting. If you don't have an invite, contact your product manager",
    "Review squad code in a merge request",
    "Get a feel for how we review code and what our code looks like. Make any comments you like on the code review",
    "Pick up your first ticket",
    "Pair with another developer - work on a ticket with another developer in the squad to learn more about how we work",
  ]);

  const [testerTwoWeeksAllResources, setTesterTwoWeeksAllResources] = useState([
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
      text: "Quick Start Guide",
      link: "https://tinyurl.com/mr4c6s6p",
    },
    {
      text: "GitLab Access Guide",
      link: "https://tinyurl.com/y4ebnwsc",
    },
    {
      text: "Coding Standards Miro",
      link: "https://miro.com/app/board/uXjVPOIesoM=/",
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

  const sections = ["Get Up To Speed", "Savings Specific Tasks"];

  const [newTask, setNewTask] = React.useState("");

  const handleAddTask = () => {
    const selectedSection = document.querySelector(
      'input[name="section"]:checked'
    ).value;

    if (newTask.trim() !== "") {
      console.log("Inside if statement");
      let updatedGetUpToSpeedList = [...getUpToSpeedList];
      let updatedSavingsSpecificTaskList = [...savingsSpecificTasksList];

      if (selectedSection === "Get Up To Speed") {
        console.log("Selected get up to speed");
        updatedGetUpToSpeedList.push(newTask);
        setGetUpToSpeedList(updatedGetUpToSpeedList);
      } else if (selectedSection === "Savings Specific Tasks") {
        console.log("Selected savings specific tasks");
        updatedSavingsSpecificTaskList.push(newTask);
        setSavingsSpecificTasksList(updatedGetUpToSpeedList);
      }
    }

    setNewTask("");
    console.log("Working");
  };

  const [newReflectionPoint, setNewReflectionPoint] = React.useState("");

  const handleAddReflectionPoint = () => {
    if (newReflectionPoint.trim() !== "") {
      let updatedReflectionPointsCollection = [...reflectionPointsCollection];
      updatedReflectionPointsCollection.push(newReflectionPoint);
      console.log(
        "First Two Weeks Reflection Collection  ->  " +
          updatedReflectionPointsCollection
      );
      setReflectionPointsCollection(updatedReflectionPointsCollection);
    }

    setNewReflectionPoint("");
  };

  return (
    <div id="week1MainContainer">
      {/* ---------- BASIC SET UP ---------- */}

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

      {/* ---------- RESOURCES ---------- */}

      <ResourcesComponent
        resources={testerTwoWeeksAllResources}
        varient="testerFirstTwoWeeksResources"
        mainDiv="testerTwoWeeksMainResourceDiv"
        resourceItem="testerFirstTwoWeeksResourceItem"
      />

      {/* ---------- SAVINGS SPECIFIC TASKS ---------- */}

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

      {/* ---------- REFLECTION POINTS ---------- */}

      <div className="TesterTwoWeeksReflectionPoints">
        <h3 className="sectionHeader" id="reflectionPointsHeader">
          Reflection Points
        </h3>

        <div className="addReflectionPointInputDiv">
          <textarea
            id="addReflectionPointInputBox"
            type="text"
            value={newReflectionPoint}
            onChange={(e) => setNewReflectionPoint(e.target.value)}
          />
        </div>

        <div className="FirstTwoWeeksSubmitReflectionButtonDiv">
          <Button label="Submit" onClick={handleAddTask} />
        </div>
      </div>

      {/* ---------- ADD TASK ---------- */}

      <div className="TesterTwoWeeksAddTask">
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

        <div className="FirstTwoWeeksAddTaskButtonDiv">
          <Button label="Add Task" onClick={handleAddTask} />
        </div>
      </div>
    </div>
  );
}

export default FirstTwoWeeks;
