import React from "react";
import "./FirstTwoWeeks.css";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import Button from "../UniversalComponents/Button";
import ResourcesComponent from "../UniversalComponents/ResourcesComponent";
import SavingsSpecificTasksSections from "../UniversalComponents/SavingsSpecificTasksSections";
import GetUpToSpeedSection from "../UniversalComponents/GetUpToSpeedSection";

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
      link: "Fake Link",
    },
    {
      text: "Get Started In Digital",
      link: "Fake Link",
    },
    {
      text: "Contextual Org Chart",
      link: "Fake Link",
    },
    {
      text: "Village Halls",
      link: "Fake Link",
    },
    {
      text: "Quick Start Guide",
      link: "Fake Link",
    },
    {
      text: "GitLab Access Guide",
      link: "Fake Link",
    },
    {
      text: "Coding Standards Miro",
      link: "Fake Link",
    },
    {
      text: "Active Savings Confluence Space",
      link: "Fake Link",
    },
    {
      text: "HL Savings Digital Library",
      link: "Fake Link",
    },
    {
      text: "DSApp Code Layers",
      link: "Fake Link",
    },
  ]);

  const sections = ["Get Up To Speed", "Savings Specific Tasks"];

  const [newTask, setNewTask] = React.useState("");

  const handleAddTask = () => {
    console.log("Called handleADdTask");

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
        setSavingsSpecificTasksList(updatedSavingsSpecificTaskList);
        console.log("Array --> " + updatedSavingsSpecificTaskList);
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
      {/* ---------- BASIC SET UP ---------- */}

      <GetUpToSpeedSection getUpToSpeedList={getUpToSpeedList} />

      {/* ---------- RESOURCES ---------- */}

      <ResourcesComponent
        resources={testerTwoWeeksAllResources}
        varient="testerFirstTwoWeeksResources"
        mainDiv="testerTwoWeeksMainResourceDiv"
        resourceItem="testerFirstTwoWeeksResourceItem"
      />

      {/* ---------- SAVINGS SPECIFIC TASKS ---------- */}

      <SavingsSpecificTasksSections
        savingsSpecificTasksList={savingsSpecificTasksList}
      />

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

        <div className="TesterFirstTwoWeeksSubmitReflectionButtonDiv">
          <Button label="Submit" onClick={handleAddReflectionPoint} />
        </div>
      </div>

      {/* ---------- ADD TASK ---------- */}

      <div className="TesterTwoWeeksAddTask">
        <h3 className="sectionHeader" id="addTaskHeader">
          Add Task
        </h3>

        <div className="addTaskInputDiv">
          <input
            id="testerTwoWeeksAddTaskInputBox"
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
