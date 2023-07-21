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

  const [opsSavingsSpecificTasksList, opsSetSavingsSpecificTasksList] =
    useState(["", "", ""]);

  return (
    <div className="OpsFirstTwoWeeks">
      <h1>OpsFirstTwoWeeks</h1>
    </div>
  );
}

export default OpsFirstTwoWeeks;
