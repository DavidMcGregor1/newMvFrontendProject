import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import "./OpsFirstTwoWeeks.css";

function OpsFirstTwoWeeks() {
  const [reflectionPointsCollection, setReflectionPointsCollection] = useState([
    "",
  ]);

  const [opsGetUpToSpeedList, setOpsGetUpToSpeedList] = useState(["", "", ""]);

  const [opsSavingsSpecificTasksList, setOpsSavingsSpecificTasksList] =
    useState(["", "", ""]);

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
    <div className="OpsFirstTwoWeeks">
      <h1>OpsFirstTwoWeeks</h1>
    </div>
  );
}

export default OpsFirstTwoWeeks;
