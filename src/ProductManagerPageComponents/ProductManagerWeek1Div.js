import React from "react";
import "./ProductManagerWeek1Div.css";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import Button from "../UniversalComponents/Button";
import ResourcesComponent from "../UniversalComponents/ResourcesComponent";
import BasicSetUpSection from "../UniversalComponents/BasicSetUpSection";
import GetCompliantSection from "../UniversalComponents/GetCompliantSection";
import PeopleToMeetSection from "../UniversalComponents/PeopleToMeetSection";

const Week1Div = () => {
  const [chosenArray, setChosenArray] = useState([
    "Product Manager Person 1",
    "Product Manager Person 2",
    "Product Manager Person 3",
    "Product Manager Person 4",
    "Product Manager Person 5",
    "Product Manager Person 6",
  ]);

  const [basicSetUpTasks, setBasicSetUpTasks] = useState([
    "Check access to systems",
    "Go through the Development Setup guide",
    "Check permissions are set up correctly within core systems - you're in the right channels, meetings, able to access spaces etc",
    "Download any required software - you can do this either via the Software center (Windows 10) or Company Portal (Windows11)",
    "(Contractors and Consultants only) Agree lines of communication / points of escalation from your manager / sponsor. If you are an MVP laptop user only (so no ServiceNow) agree who will work as the admin to raise issues on your behalf",
  ]);

  const [getCompliantTasks, setGetCompliantTasks] = useState([
    "(Perm and Contractors) Workday Learning modules",
    "(Perm and Contractors) Attend Essentials induction (including Infosec training) - running at 14:30 on your first day",
    "(All personas) Review policies in meta-compliance",
    "Complete personal details in Workday - Found in your inbox",
    "Complete emergency contacts in Workday - Found in your inbox",
    "Complete pay details in Workday - found in pay > payment elections",
    "Complete payroll form (sent via email) and send to (replace with real email)",
  ]);
  const [productManagerAllResources, setProductManagerAllResources] = useState([
    {
      text: "Active Savings Confluence Page",
      link: "fakeLink",
    },
    {
      text: "Software install request",
      link: "fakeLink",
    },
    {
      text: "Overview of Savings Architecture",
      link: "fakeLink",
    },
    {
      text: "Workday",
      link: "fakeLink",
    },
    {
      text: "Savings Cheat Sheet",
      link: "fakeLink",
    },
    {
      text: "All about the code",
      link: "fakeLink",
    },
  ]);

  const sections = ["Basic Set Up", "Get Compliant", "People to meet"];
  const [newTask, setNewTask] = React.useState("");

  const handleAddTask = () => {
    const selectedSection = document.querySelector(
      'input[name="section"]:checked'
    ).value;

    if (newTask.trim() !== "") {
      let updatedBasicSetUpTasks = [...basicSetUpTasks];
      let updatedGetCompliantTasks = [...getCompliantTasks];
      let updatedPeopleToMeet = [...chosenArray];

      switch (selectedSection) {
        case "Basic Set Up":
          updatedBasicSetUpTasks.push(newTask);
          setBasicSetUpTasks(updatedBasicSetUpTasks);
          break;
        case "Get Compliant":
          console.log("GET COMPLIANT CLICKED");
          updatedGetCompliantTasks.push(newTask);
          setGetCompliantTasks(updatedGetCompliantTasks);
          break;
        case "People to meet":
          console.log("PEOPLE CLICKED");
          updatedPeopleToMeet.push(newTask);
          setChosenArray(updatedPeopleToMeet);
        default:
          break;
      }

      setNewTask("");
    }
  };

  return (
    <div id="week1MainContainer">
      {/* ---------- BASIC SET UP ---------- */}

      <BasicSetUpSection basicSetUpTasks={basicSetUpTasks} />

      {/* ---------- RESOURCES ---------- */}

      <ResourcesComponent
        resources={productManagerAllResources}
        varient="productManagerWeek1Resources"
        mainDiv="productManagerWeek1MainResourceDiv"
        resourceItem="productManagerWeek1ResourceItem"
      />

      {/* ---------- GET COMPLIANT ---------- */}

      <GetCompliantSection getCompliantTasks={getCompliantTasks} />

      {/* ---------- PEOPLE TO MEET ---------- */}

      <PeopleToMeetSection chosenArray={chosenArray} />

      {/* ---------- ADD TASK ---------- */}

      <div className="DevWeek1AddTask">
        <h3 className="FirstWeekSectionHeader" id="addTaskHeader">
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
        <div className="FirstWeekAddTaskButtonDiv">
          <div className="FirstWeekAddTaskButtonDiv">
            <Button label="Add Task" onClick={handleAddTask} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Week1Div;
