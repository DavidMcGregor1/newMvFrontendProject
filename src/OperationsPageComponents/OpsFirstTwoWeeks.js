import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import "./OpsFirstTwoWeeks.css";
import SavingsSpecificTasksSections from "../UniversalComponents/SavingsSpecificTasksSections";
import GetUpToSpeedSection from "../UniversalComponents/GetUpToSpeedSection";
import ResourcesComponent from "../UniversalComponents/ResourcesComponent";
function OpsFirstTwoWeeks() {
  const [reflectionPointsCollection, setReflectionPointsCollection] = useState([
    "",
  ]);

  const [opsGetUpToSpeedList, setOpsGetUpToSpeedList] = useState([
    "Take a look at some of the confluence pages for operations",
    "Take a look at the Savings Cheat Sheet",
    "Familiarise yourself with the savings ordanisation and roles responsibilities of different functions",
    "Get a feel of what's going on in digital by watching the most recent Village Halls.",
  ]);

  const [opsSavingsSpecificTasksList, setOpsSavingsSpecificTasksList] =
    useState([
      "Bookmark the confluence area for Active Savings",
      "Take part in a Business Q&A session",
      "Come along to a Savings Day!",
    ]);

  const [opsTwoWeeksAllResources, setOpsTwoWeeksAllResources] = useState([
    {
      text: "Active Savings Confluence Space",
      link: "https://confluence.hargreaveslansdown.co.uk/display/AS/Active+Savings",
    },
    {
      text: "Savings Cheat Sheet",
      link: "https://hlam-collab.atlassian.net/wiki/spaces/AS/pages/494518362/Savings+Cheat+Sheet",
    },
    {
      text: "Savings MI Procedure Guides",
      link: "https://hlam-collab.atlassian.net/wiki/spaces/AS/pages/494507201/Savings+MI+Procedure+Guides",
    },
    {
      text: "Operational Tasks",
      link: "https://hlam-collab.atlassian.net/wiki/spaces/AS/pages/494518642/Operational+Tasks",
    },

    {
      text: "Partner Banks",
      link: "https://hlam-collab.atlassian.net/wiki/spaces/AS/pages/494515099/Partner+Banks",
    },
    {
      text: "Procedure Guides",
      link: "https://hlam-collab.atlassian.net/wiki/spaces/AS/pages/494509997/Procedure+Guides",
    },
    {
      text: "Account & Product Statuses",
      link: "https://hlam-collab.atlassian.net/wiki/spaces/AS/pages/494504464/Account+Product+Statuses",
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
    alert("Submitted Reflection Point");
  };

  return (
    <div id="week1MainContainer">
      {/* ---------- GET UP TO SPEED ----------  */}

      <GetUpToSpeedSection getUpToSpeedList={opsGetUpToSpeedList} />

      {/* ---------- RESOURCES ----------  */}

      <ResourcesComponent
        resources={opsTwoWeeksAllResources}
        varient="opsFirstTwoWeeksResources"
        mainDiv="opsFirstTwoWeeksMainResourceDiv"
        resourceItem="opsFirstTwoWeeksResourceItem"
      />

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
            id="opsFirstTwoWeeksAddReflectionPointInputBox"
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
            id="opsFirstTwoWeeksAddTaskInputBox"
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

        <div className="opsFirstTwoWeeksAddTaskButtonDiv">
          <button id="FirstTwoWeeksAddTaskButton" onClick={handleAddTask}>
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default OpsFirstTwoWeeks;
