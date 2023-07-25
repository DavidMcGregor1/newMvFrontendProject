import React from "react";
import "./TesterWeek1.css";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import Button from "../UniversalComponents/Button";
import ResourcesComponent from "../UniversalComponents/ResourcesComponent";
import BasicSetUpSection from "../UniversalComponents/BasicSetUpSection";
import GetCompliantSection from "../UniversalComponents/GetCompliantSection";
import PeopleToMeetSection from "../UniversalComponents/PeopleToMeetSection";

function TesterWeek1() {
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

  const [testerBasicSetUp, setTesterBasicSetUp] = useState([
    "Check access to systems",
    "Go through the New Tester Guide",
    "Go throught the Quick Start Guide",
    "Check permissions are set up correctly within core systems - you're in the right channels, meetings, able to access spaces etc",
    "Download any required software - you can do this either via the Software center (Windows 10) or Company Portal (Windows11)",
    "(Contractors and Consultants only) Agree lines of communication / points of escalation from your manager / sponsor. If you are an MVP laptop user only (so no ServiceNow) agree who will work as the admin to raise issues on your behalf",
    "tester task here",
  ]);

  const [testerGetCompliant, setTesterGetCompliant] = useState([
    "(Perm and Contractors) Workday Learning modules",
    "(Perm and Contractors) Attend Essentials induction (including Infosec training) - running at 14:30 on your first day",
    "(All personas) Review policies in meta-compliance",
    "Complete personal details in Workday - Found in your inbox",
    "Complete emergency contacts in Workday - Found in your inbox",
    "Complete pay details in Workday - found in pay > payment elections",
    "Complete payroll form (sent via email) and send to (replace with real email)",
  ]);

  const [testerAllResourcesList, setTesterAllResourcesList] = useState([
    {
      text: "Active Savings Confluence Page",
      link: "https://tinyurl.com/bdebdtfv",
    },
    {
      text: "Software to install",
      link: "https://tinyurl.com/bdh8wntf",
    },
    {
      text: "Overview of Savings Architecture",
      link: "https://tinyurl.com/2c8xw43j",
    },
    {
      text: "Workday",
      link: "https://wd3.myworkday.com/hargreaveslansdown/",
    },
    {
      text: "Jenkins",
      link: "https://jenkins-savings.hargreaveslansdown.co.uk/",
    },
    {
      text: "Sonar Qube",
      link: "https://sonarqube.hargreaveslansdown.co.uk/projects",
    },
    {
      text: "New Tester Guide",
      link: "https://hlam-collab.atlassian.net/wiki/spaces/AS/pages/494511028/New+QA+Tester",
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
      text: "Introduction and Useful Info",
      link: "https://tinyurl.com/3m292v48",
    },
    {
      text: "Savings Cheat Sheet",
      link: "https://hlam-collab.atlassian.net/wiki/spaces/AS/pages/494518362/Savings+Cheat+Sheet",
    },
    {
      text: "All about the code",
      link: "https://hlam-collab.atlassian.net/wiki/spaces/AS/pages/494503134/All+about+the+code",
    },
  ]);

  const sections = ["Basic Set Up", "Get Compliant", "People to meet"];

  const [newTask, setNewTask] = React.useState("");

  const handleAddTask = () => {
    const selectedSection = document.querySelector(
      'input[name="section"]:checked'
    ).value;

    if (newTask.trim() !== "") {
      let updatedtesterBasicSetUp = [...testerBasicSetUp];
      let updatedTesterGetCompliant = [...testerGetCompliant];
      let updatedPeopleToMeet = [...chosenArray];

      switch (selectedSection) {
        case "Basic Set Up":
          updatedtesterBasicSetUp.push(newTask);
          setTesterBasicSetUp(updatedtesterBasicSetUp);
          break;
        case "Get Compliant":
          console.log("Hit second tester tasks");
          updatedTesterGetCompliant.push(newTask);
          setTesterGetCompliant(updatedTesterGetCompliant);
          break;
        case "People to meet":
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

      <BasicSetUpSection basicSetUpTasks={testerBasicSetUp} />

      {/* ---------- RESOURCES ---------- */}

      <ResourcesComponent
        resources={testerAllResourcesList}
        varient="testerWeek1Resources"
        mainDiv="testerWeek1ResourcesList"
        resourceItem="testerWeek1ResourceItem"
      />

      {/* ---------- GET COMPLIANT ---------- */}

      <GetCompliantSection getCompliantTasks={testerGetCompliant} />

      {/* ---------- PEOPLE TO MEET ---------- */}

      <PeopleToMeetSection chosenArray={chosenArray} />

      {/* ---------- ADD TASK ---------- */}

      <div className="TesterWeek1AddTask">
        <h3 className="FirstWeekSectionHeader" id="addTaskHeader">
          Add Task
        </h3>
        <div className="addTaskInputDiv">
          <input
            id="testerWeek1AddTaskInputBox"
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
          <Button label="Add Task" onClick={handleAddTask} />
        </div>
      </div>
    </div>
  );
}

export default TesterWeek1;
