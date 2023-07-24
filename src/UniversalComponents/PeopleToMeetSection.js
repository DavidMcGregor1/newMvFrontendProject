import React from "react";
import CheckListItem from "./ChecklistItem";

const PeopleToMeetSection = ({ chosenArray }) => {
  return (
    <div>
      <div className="devWeek1PeopleToMeet">
        <h3 className="FirstWeekSectionHeader" id="devWeek1PeopleToMeetHeader">
          People to meet
        </h3>
        <div className="peopleToMeetList">
          {chosenArray.map((task, index) => (
            <div key={index} className="devWeek1PeopleToMeetItem">
              <input type="checkbox" id={`task-${index}`}></input>
              <label htmlFor={`task-${index}`}>{task}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PeopleToMeetSection;
