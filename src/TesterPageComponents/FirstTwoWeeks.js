import React from "react";
import "./FirstTwoWeeks.css";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

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

  return (
    <div className="FirstTwoWeeks">
      <h1>FirstTwoWeeks</h1>
    </div>
  );
}

export default FirstTwoWeeks;
