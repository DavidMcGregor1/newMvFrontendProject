import React from "react";
import "./DeliveryManagerFirstMonth.css";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import BigNames from "../UniversalComponents/BigNames";
import Button from "../UniversalComponents/Button";
import ResourcesComponent from "../UniversalComponents/ResourcesComponent";
import GeneralTasksSection from "../UniversalComponents/GeneralTasksSection";

const FirstMonth = () => {
  const [
    firstMonthReflectionPointsCollection,
    setfirstMonthReflectionPointsCollection,
  ] = useState([""]);

  const [generalTasks, setGeneralTasks] = useState([
    "Keep getting involved in group discussions",
    "Complete a ticket independently",
    "Fill out reflection points on any areas that could be improved.",
    "Set up regular catch ups with your manager and buddy",
    "Have a think about what you want to spend your training budget on",
    "Attend a social event!",
  ]);

  const [
    deliveryManagerFirstMonthAllResources,
    setDeliveryManagerFirstMonthAllResources,
  ] = useState([
    {
      text: "Contextual Org Chart",
      link: "Fake Link",
    },
    {
      text: "Village Halls",
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
      text: "Coding Standards Miro",
      link: "Fake Link",
    },
    {
      text: "Savings Cheat Sheet",
      link: "Fake Link",
    },
  ]);

  const [newTask, setNewTask] = React.useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      console.log("Inside if statement");
      let updatedGeneralTasksList = [...generalTasks];
      updatedGeneralTasksList.push(newTask);
      setGeneralTasks(updatedGeneralTasksList);
    }

    setNewTask("");
    console.log("Working");
  };

  const [newReflectionPoint, setNewReflectionPoint] = React.useState("");

  const handleAddReflectionPoint = () => {
    if (newReflectionPoint.trim() !== "") {
      let updatedfirstMonthReflectionPointsCollection = [
        ...firstMonthReflectionPointsCollection,
      ];
      updatedfirstMonthReflectionPointsCollection.push(newReflectionPoint);
      console.log(
        "First Month Reflection Collection:  -> " +
          updatedfirstMonthReflectionPointsCollection
      );
      setfirstMonthReflectionPointsCollection(
        updatedfirstMonthReflectionPointsCollection
      );
    }

    setNewReflectionPoint("");
    alert("Submitted Reflection Point");
  };

  return (
    <div id="TesterFirstMonthMainContainer">
      {/* ---------- GENERAL TASKS ----------  */}

      <GeneralTasksSection generalTasks={generalTasks} />

      {/* ---------- RESOURCES ----------  */}

      <ResourcesComponent
        resources={deliveryManagerFirstMonthAllResources}
        varient="DeliveryManagerWeek1Resources"
        mainDiv="DeliveryManagerFirstMonthMainResourceDiv"
        resourceItem="DeliveryManagerFirstMonthResourceItem"
      />

      {/* ---------- REFLECTION POINTS ----------  */}

      <div className="TesterFirstMonthReflectionPoints">
        <h3 className="sectionHeader" id="reflectionPointsHeader">
          Reflection Points
        </h3>

        <div className="addReflectionPointInputDiv">
          <textarea
            id="FirstMonthAddReflectionPointInputBox"
            type="text"
            value={newReflectionPoint}
            onChange={(e) => setNewReflectionPoint(e.target.value)}
          />
        </div>

        <div className="FirstMonthSubmitReflectionButtonDiv">
          <Button label="Submit" onClick={handleAddReflectionPoint} />
        </div>
      </div>

      {/* ---------- ADD TASK ----------  */}

      <div className="TesterFirstMonthAddTask">
        <h3 className="sectionHeader" id="addTaskHeader">
          Add Task
        </h3>

        <div className="addTaskInputDiv">
          <input
            id="devFirstMonthAddTaskInputBox"
            type="input"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </div>

        <div className="FirstMonthAddTaskButtonDiv">
          <Button
            id="FirstMonthAddTaskButton"
            label="Add Task"
            onClick={handleAddTask}
          />
        </div>
      </div>
    </div>
  );
};

export default FirstMonth;
