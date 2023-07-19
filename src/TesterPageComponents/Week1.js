import React from "react";
import "./Week1.css";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

function Week1() {
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

  const [firstTesterTasksSection, setFirstTesterTasksSection] = useState([
    "tester task here",
    "tester task here",
    "tester task here",
    "tester task here",
    "tester task here",
    "tester task here",
    "tester task here",
  ]);

  const [secondTesterTasksSection, setSecondTesterTasksSection] = useState([
    "tester task here",
    "tester task here",
    "tester task here",
    "tester task here",
    "tester task here",
    "tester task here",
    "tester task here",
  ]);

  const [firstTesterResoucesList, setFirstTesterResoucesList] = useState([
    {
      text: "Active Savings Confluence Page",
      link: "https://tinyurl.com/bdebdtfv",
    },
    {
      text: "Software to install",
      link: "https://tinyurl.com/bdh8wntf",
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

  const [secondTesterResoucesList, setSecondTesterResoucesList] = useState([
    {
      text: "Active Savings Confluence Page",
      link: "https://tinyurl.com/bdebdtfv",
    },
    {
      text: "Software to install",
      link: "https://tinyurl.com/bdh8wntf",
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

  const sections = [
    "First Tester Tasks",
    "Second Tester Tasks",
    "People to meet",
  ];

  const [newTask, setNewTask] = React.useState("");

  const handleAddTask = () => {
    const selectedSection = document.querySelector(
      'input[name="section"]:checked'
    ).value;

    if (newTask.trim() !== "") {
      let updatedFirstTesterTasks = [...firstTesterTasksSection];
      let updatedSecondTesterTasks = [...secondTesterTasksSection];
      let updatedPeopleToMeet = [...chosenArray];

      switch (selectedSection) {
        case "First Tester Tasks":
          updatedFirstTesterTasks.push(newTask);
          setFirstTesterTasksSection(updatedFirstTesterTasks);
          break;
        case "Second Tester Tasks":
          console.log("Hit second tester tasks");
          updatedSecondTesterTasks.push(newTask);
          setSecondTesterTasksSection(updatedSecondTesterTasks);
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
      <div className="basicSetUp">
        <h3 className="FirstWeekSectionHeader" id="basicSetUpHeader">
          Tester First Section
        </h3>
        <div className="basicSetUpTaskList">
          {firstTesterTasksSection.map((task, index) => (
            <div key={index} className="firstTesterTasksSectionItem">
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
            {firstTesterResoucesList.map((object) => (
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
            {secondTesterResoucesList.map((object) => (
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
          Tester Second Section
        </h3>
        <div className="getCompliantTaskList">
          {secondTesterTasksSection.map((task, index) => (
            <div key={index} className="firstTesterTasksSectionItem">
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
      <div className="addTask">
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
}

export default Week1;
