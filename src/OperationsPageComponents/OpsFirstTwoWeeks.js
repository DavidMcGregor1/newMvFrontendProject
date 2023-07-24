import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import "./OpsFirstTwoWeeks.css";
import SavingsSpecificTasksSections from "../UniversalComponents/SavingsSpecificTasksSections";
import GetUpToSpeedSection from "../UniversalComponents/GetUpToSpeedSection";

function OpsFirstTwoWeeks() {
  const [reflectionPointsCollection, setReflectionPointsCollection] = useState([
    "",
  ]);

  const [opsGetUpToSpeedList, setOpsGetUpToSpeedList] = useState(["", "", ""]);

  const [opsSavingsSpecificTasksList, setOpsSavingsSpecificTasksList] =
    useState(["Bookmark the confluence area for Active Savings", "", ""]);

  const [opsTwoWeeksAllResources, setopsTwoWeeksAllResources] = useState([
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
      link: "https://sonarqube.hargreaveslansdown.co.uk/projects",
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

  const sections = ["Get Up To Speed", "Savings Specific Tasks"];
  const [newTask, setNewTask] = React.useState("");

  const handleAddTask = () => {
    const selectedSection = document.querySelector(
      'input[name="section"]:checked'
    ).value;

    if (newTask.trim() !== "") {
      console.log("Inside if statement");
      let updatedOpsGetUpToSpeedList = [...opsGetUpToSpeedList];
      let updatedOpsSavingsSpecificTaskList = [...opsSavingsSpecificTasksList];

      if (selectedSection === "Get Up To Speed") {
        console.log("Selected get up to speed");
        updatedOpsGetUpToSpeedList.push(newTask);
        setOpsGetUpToSpeedList(updatedOpsGetUpToSpeedList);
      } else if (selectedSection === "Savings Specific Tasks") {
        console.log("Selected savings specific tasks");
        updatedOpsSavingsSpecificTaskList.push(newTask);
        setOpsSavingsSpecificTasksList(updatedOpsSavingsSpecificTaskList);
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
      {/* ---------- GET UP TO SPEED ----------  */}

      <GetUpToSpeedSection getUpToSpeedList={opsGetUpToSpeedList} />

      {/* ---------- RESOURCES ----------  */}

      <div className="devTwoWeeksResources">
        <h3 className="sectionHeader" id="FirstTwoWeeksResourcesHeader">
          Resources
        </h3>
        <div className="devTwoWeeksMainResourceDiv">
          <div className="resourcesList">
            {opsTwoWeeksAllResources.map((object) => (
              <div className="devFirstTwoWeeksResourceItem">
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

      {/* ---------- SAVINGS SPECIFIC TASKS ----------  */}

      <SavingsSpecificTasksSections
        savingsSpecificTasksList={opsSavingsSpecificTasksList}
      />

      {/* ---------- REFLECTION POINTS ----------  */}

      <div className="devTwoWeeksReflectionPoints">
        <h3 className="sectionHeader" id="devTwoWeeksReflectionPointsHeader">
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
          <button
            id="FirstTwoWeeksSubmitReflectionButton"
            onClick={handleAddReflectionPoint}>
            Sumbit
          </button>
        </div>
      </div>

      {/* ---------- ADD TASKS ----------  */}

      <div className="DevTwoWeeksAddTask">
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
          <button id="FirstTwoWeeksAddTaskButton" onClick={handleAddTask}>
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default OpsFirstTwoWeeks;
