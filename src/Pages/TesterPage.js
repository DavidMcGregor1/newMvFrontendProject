import React from "react";
import "./TesterPage.css";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import TesterWeek1 from "../TesterPageComponents/TesterWeek1";
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

  const goBackward = () => {
    const currentDiv = divRefs.current.find(
      (ref) => ref.style.display !== "none"
    );
    const currentIndex = divRefs.current.indexOf(currentDiv);
    const previousIndex =
      currentIndex === 0 ? divRefs.current.length - 1 : currentIndex - 1;

    currentDiv.style.display = "none";
    divRefs.current[previousIndex].style.display = "block";

    setActiveDiv(`div${previousIndex + 1}`);
  };

  return (
    <div className="mainDiv">
      <div id="header">
        <p className="arrow" onClick={goBackward}>
          &lt;
        </p>
        <h1 id="mainHeaderTester">Week 1</h1>

        <p className="arrow" onClick={goForward}>
          &gt;
        </p>
      </div>

      <div className="flexDiv">
        <div ref={(el) => (divRefs.current[0] = el)}>
          <TesterWeek1 />
        </div>

        <div
          ref={(el) => (divRefs.current[1] = el)}
          style={{ display: "none" }}>
          <FirstTwoWeeks />
        </div>

        <div
          ref={(el) => (divRefs.current[2] = el)}
          style={{ display: "none" }}>
          <FirstMonth />
        </div>
      </div>
    </div>
  );
}

export default TesterPage;
