import React from "react";
import "./OperationsPage.css";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import OpsWeek1 from "../OperationsPageComponents/OpsWeek1";
import OpsFirstTwoWeeks from "../OperationsPageComponents/OpsFirstTwoWeeks";
import OpsFirstMonth from "../OperationsPageComponents/OpsFirstMonth";

function OperationsPage() {
  const [activeDiv, setActiveDiv] = useState("div1");
  const divRefs = useRef([]);

  useEffect(() => {
    if (activeDiv === "div1") {
      document.getElementById("mainHeader").textContent = "Week 1";
    } else if (activeDiv === "div2") {
      document.getElementById("mainHeader").textContent = "First two weeks";
    } else if (activeDiv === "div3") {
      document.getElementById("mainHeader").textContent = "First month";
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
        <h1 id="mainHeader">Week 1</h1>

        <p className="arrow" onClick={goForward}>
          &gt;
        </p>
      </div>

      <div className="flexDiv">
        {/* <div className="arrowDivColumn">
          <div className="leftArrowContainer">
            <p className="arrow" onClick={goBackward}>
              &lt;
            </p>
          </div>
        </div> */}

        <div ref={(el) => (divRefs.current[0] = el)}>
          <OpsWeek1 />
        </div>

        <div
          ref={(el) => (divRefs.current[1] = el)}
          style={{ display: "none" }}>
          <OpsFirstTwoWeeks />
        </div>

        <div
          ref={(el) => (divRefs.current[2] = el)}
          style={{ display: "none" }}>
          <OpsFirstMonth />
        </div>

        <div className="arrowDivColumnR">
          {/* <div className="rightArrowContainer">
            <p className="arrow" onClick={goForward}>
              &gt;
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default OperationsPage;
