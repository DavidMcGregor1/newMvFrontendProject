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

  return (
    <div className="Week1">
      <h1>Week1</h1>
    </div>
  );
}

export default Week1;
