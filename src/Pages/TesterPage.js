import React from "react";
import "./TesterPage.css";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import Week1Div from "../TesterPageComponents/Week1";
import FirstTwoWeeks from "../TesterPageComponents/FirstTwoWeeks";
import FirstMonth from "../TesterPageComponents/FirstMonth";

function TesterPage() {
  const [activeDiv, setActiveDiv] = useState("div1");
  const divRefs = useRef([]);

  useEffect(() => {
    if (activeDiv === "div1") {
      document.getElementById("mainHeaderTester").textContent = "Week 1";
    } else if (activeDiv === "div2") {
      document.getElementById("mainHeaderTester").textContent =
        "First two weeks";
    } else if (activeDiv === "div3") {
      document.getElementById("mainHeaderTester").textContent = "First month";
    }
  }, [activeDiv]);

  const goForward = () => {
    const currentDiv = divRefs.current.find(
      (ref) => ref.style.display !== "none"
    );
    const currentIndex = divRefs.current.indexOf(currentDiv);
    const nextIndex = (currentIndex + 1) % divRefs.current.length;

    console.log("CurrentIndex  ->  " + currentIndex);
    console.log("nextIndex  ->  " + nextIndex);

    currentDiv.style.display = "none";
    divRefs.current[nextIndex].style.display = "block";

    setActiveDiv(`div${nextIndex + 1}`);
  };

  return (
    <div className="TesterPage">
      <h1 id="mainHeaderTester">Tester Page</h1>
    </div>
  );
}

export default TesterPage;
