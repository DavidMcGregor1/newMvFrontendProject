import React from "react";
import "./Week1Div.css";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import Button from "../UniversalComponents/Button";
import ResourcesComponent from "../UniversalComponents/ResourcesComponent";
import BasicSetUpSection from "../UniversalComponents/BasicSetUpSection";
import GetCompliantSection from "../UniversalComponents/GetCompliantSection";

const Week1Div = () => {
  const zeusSquatPeopleToMeet = [
    "Zeus Squad Member 1",
    "Zeus Squad Member 2",
    "Zeus Squad Member 3",
    "Zeus Squad Member 4",
    "Zeus Squad Member 5",
    "Zeus Squad Member 6",
  ];

  const prosperitySquatPeopleToMeet = [
    "Prosperity Squad Member 1",
    "Prosperity Squad Member 2",
    "Prosperity Squad Member 3",
    "Prosperity Squad Member 4",
    "Prosperity Squad Member 5",
    "Prosperity Squad Member 6",
  ];

  const automatesSquadPeopleToMeet = [
    "Automates Squad Member 1",
    "Automates Squad Member 2",
    "Automates Squad Member 3",
    "Automates Squad Member 4",
    "Automates Squad Member 5",
    "Automates Squad Member 6",
  ];

  const developmentSquad = "Zeus";

  const [chosenArray, setChosenArray] = useState(
    developmentSquad === "Zeus"
      ? zeusSquatPeopleToMeet
      : developmentSquad === "Prosperity"
      ? prosperitySquatPeopleToMeet
      : automatesSquadPeopleToMeet
  );

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

  const [devAllResources, setDevAllResources] = useState([
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
      text: "Jenkins",
      link: "fakeLink",
    },

    {
      text: "Quick Start Guide",
      link: "fakeLink",
    },
    {
      text: "Development Setup Guide",
      link: "fakeLink",
    },
    {
      text: "GitLab Access Guide",
      link: "fakeLink",
    },
    {
      text: "Introduction and Useful Info",
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
          updatedGetCompliantTasks.push(newTask);
          setGetCompliantTasks(updatedGetCompliantTasks);
          break;
        case "Resources":
          updatedPeopleToMeet.push(newTask);
          setChosenArray(updatedPeopleToMeet);
        default:
          break;
      }

      setNewTask("");

      switch (selectedSection) {
        case "People to meet":
          console.log("inside case People to meet");
          console.log("Current value of chsoe array => " + chosenArray);
          chosenArray.push(newTask);
          console.log("Current value of chsoe array => " + chosenArray);
          break;
        default:
          break;
      }
    }
  };

  return (
    <div id="week1MainContainer">
      {/* ---------- BASIC SET UP ---------- */}

      <BasicSetUpSection basicSetUpTasks={basicSetUpTasks} />

      {/* ---------- RESOURCES ---------- */}

      <ResourcesComponent
        resources={devAllResources}
        varient="devWeek1Resources"
        mainDiv="devWeek1MainResourceDiv"
        resourceItem="devWeek1ResourceItem"
      />

      {/* ---------- GET COMPLIANT ---------- */}

      <GetCompliantSection getCompliantTasks={getCompliantTasks} />

      {/* ---------- PEOPLE TO MEET ---------- */}

      <div className="devWeek1PeopleToMeet">
        <h3 className="FirstWeekSectionHeader" id="devWeek1PeopleToMeetHeader">
          People to meet
        </h3>
        <div className="peopleToMeetList">
          {chosenArray.map((task, index) => (
            <div key={index} className="devWeek1PeopleToMeetItem">
              <input type="checkbox" id={`task-${index}`}></input>
              <label htmlFor={`task-${index}`}>{task}</label>
            </div>
          ))}
        </div>
      </div>

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
