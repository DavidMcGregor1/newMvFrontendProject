import React from "react";
import "./Week1Div.css";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

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

  const [firstResourcesList, setFirstResourcelist] = useState([
    {
      text: "Active Savings Confluence Page",
      link: "https://tinyurl.com/bdebdtfv",
    },
    {
      text: "Software install request",
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
  ]);

  const [secondResourcesList, setSecondResourcesList] = useState([
    {
      text: "Quick Start Guide",
      link: "https://tinyurl.com/mr4c6s6p",
    },
    {
      text: "Development Setup Guide",
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
      <div className="basicSetUp">
        <h3 className="FirstWeekSectionHeader" id="basicSetUpHeader">
          Basic Set up
        </h3>
        <div className="basicSetUpTaskList">
          {basicSetUpTasks.map((task, index) => (
            <div key={index} className="basicSetUpTaskItem">
              <input type="checkbox" id={`task-${index}`} />
              <label htmlFor={`task-${index}`}>{task}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="resources">
        <h3 className="FirstWeekSectionHeader" id="resourcesHeader">
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
      <div className="getCompliant">
        <h3 className="FirstWeekSectionHeader" id="getCompliantHeader">
          Get Compliant
        </h3>
        <div className="getCompliantTaskList">
          {getCompliantTasks.map((task, index) => (
            <div key={index} className="getCompliantTaskItem">
              <input type="checkbox" id={`task-${index}`}></input>
              <label htmlFor={`task-${index}`}>{task}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="peopleToMeet">
        <h3 className="FirstWeekSectionHeader" id="peopleToMeetHeader">
          People to meet
        </h3>
        <div className="peopleToMeetList">
          {chosenArray.map((task, index) => (
            <div key={index} className="peopleToMeetItem">
              <input type="checkbox" id={`task-${index}`}></input>
              <label htmlFor={`task-${index}`}>{task}</label>
            </div>
          ))}
        </div>
      </div>
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
          <button id="FirstWeekAddTaskButton" onClick={handleAddTask}>
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default Week1Div;
