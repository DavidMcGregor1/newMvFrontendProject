import React from "react";
import { useState } from "react";
import Button from "../UniversalComponents/Button";
import ResourcesComponent from "../UniversalComponents/ResourcesComponent";
import "./OpsWeek1.css";
import BasicSetUpSection from "../UniversalComponents/BasicSetUpSection";
import GetCompliantSection from "../UniversalComponents/GetCompliantSection";
import PeopleToMeetSection from "../UniversalComponents/PeopleToMeetSection";

function OpsWeek1() {
  const [opsPeopleToMeet, setOpsPeopleToMeet] = useState([
    "Ops Person To Meet 1",
    "Ops Person To Meet 2",
    "Ops Person To Meet 3",
    "Ops Person To Meet 4",
    "Ops Person To Meet 5",
    "Ops Person To Meet 6",
  ]);

  const [opsBasicSetUpTasks, setOpsBasicSetUpTasks] = useState([
    "Check access to systems",
    "Go through the Overview of Savings Architecture confluence page",
    "Check permissions are set up correctly within core systems - you're in the right channels, meetings, able to access spaces etc",
    "Download any required software - you can do this either via the Software center (Windows 10) or Company Portal (Windows11)",
    "(Contractors and Consultants only) Agree lines of communication / points of escalation from your manager / sponsor. If you are an MVP laptop user only (so no ServiceNow) agree who will work as the admin to raise issues on your behalf",
  ]);

  const [opsGetCompliantTasks, setOpsGetCompliantTasks] = useState([
    "(Perm and Contractors) Workday Learning modules",
    "(Perm and Contractors) Attend Essentials induction (including Infosec training) - running at 14:30 on your first day",
    "(All personas) Review policies in meta-compliance",
    "Complete personal details in Workday - Found in your inbox",
    "Complete emergency contacts in Workday - Found in your inbox",
    "Complete pay details in Workday - found in pay > payment elections",
    "Complete payroll form (sent via email) and send to (replace with real email)",
  ]);

  const [opsAllResources, setOpsAllResources] = useState([
    {
      text: "Active Savings Confluence Page",
      link: "https://tinyurl.com/bdebdtfv",
    },
    {
      text: "Overview of Savings Architecture",
      link: "https://tinyurl.com/2c8xw43j",
    },
    {
      text: "Operations Confluence Page",
      link: "https://hlam-collab.atlassian.net/wiki/spaces/AS/pages/494512486/Savings+Operations",
    },
    {
      text: "Request K drive access",
      link: "https://hlprod.service-now.com/sp?id=sc_cat_item&sys_id=9b77a1a81ba93c1099a58594e34bcb11&referrer=popular_items",
    },
    {
      text: "Introduction and Useful Info",
      link: "https://tinyurl.com/3m292v48",
    },
    {
      text: "Atlas",
      link: "https://atlas/client_search/client_search",
    },
    {
      text: "Stripe",
      link: "https://dashboard.stripe.com/login",
    },
    {
      text: "SAFE",
      link: "https://dsadminportal/admin/",
    },

    {
      text: "JIRA",
      link: "https://hlam-collab.atlassian.net/jira/software/c/projects/AS/boards/199",
    },
    {
      text: "Workday",
      link: "https://wd3.myworkday.com/hargreaveslansdown/",
    },
  ]);

  const sections = ["Basic Set Up", "Get Compliant", "People to meet"];
  const [newTask, setNewTask] = React.useState("");

  const handleAddTask = () => {
    const selectedSection = document.querySelector(
      'input[name="section"]:checked'
    ).value;

    if (newTask.trim() !== "") {
      let updatedOpsBasicSetUpTasks = [...opsBasicSetUpTasks];
      let updatedOpsGetCompliantTasks = [...opsGetCompliantTasks];
      let updatedOpsPeopleToMeet = [...opsPeopleToMeet];

      switch (selectedSection) {
        case "Basic Set Up":
          updatedOpsBasicSetUpTasks.push(newTask);
          setOpsBasicSetUpTasks(updatedOpsBasicSetUpTasks);
          break;
        case "Get Compliant":
          updatedOpsGetCompliantTasks.push(newTask);
          setOpsGetCompliantTasks(updatedOpsGetCompliantTasks);
          break;
        case "Resources":
          updatedOpsPeopleToMeet.push(newTask);
          setOpsPeopleToMeet(updatedOpsPeopleToMeet);
        default:
          break;
      }

      setNewTask("");

      switch (selectedSection) {
        case "People to meet":
          console.log("inside case People to meet");
          opsPeopleToMeet.push(newTask);
          break;
        default:
          break;
      }
    }
  };

  return (
    <div id="week1MainContainer">
      {/* ---------- BASIC SET UP ----------  */}

      <BasicSetUpSection basicSetUpTasks={opsBasicSetUpTasks} />

      {/* ---------- RESOURCES ----------  */}

      <ResourcesComponent
        resources={opsAllResources}
        varient="opsWeek1Resources"
        mainDiv="opsWeek1MainResourceDiv"
        resourceItem="opsWeek1ResourceItem"
      />

      {/* ---------- GET COMPLIANT ----------  */}

      <GetCompliantSection getCompliantTasks={opsGetCompliantTasks} />

      {/* ---------- PEOPLE TO MEET ----------  */}

      <PeopleToMeetSection chosenArray={opsPeopleToMeet} />

      {/* ---------- ADD TASK ----------  */}

      <div className="DevWeek1AddTask">
        <h3 className="FirstWeekSectionHeader" id="addTaskHeader">
          Add Task
        </h3>
        <div className="addTaskInputDiv">
          <input
            id="opsWeek1AddTaskInputBox"
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
}

export default OpsWeek1;
