import React from "react";
import "./ResourcesComponent.css";

const ResourcesComponent = ({ resources, varient, mainDiv, resourceItem }) => {
  return (
    <div className={`universal-${varient}`}>
      <h3 className="FirstWeekSectionHeader" id="resourcesHeader">
        Resources
      </h3>
      <div className={`universal-${mainDiv}`}>
        <div className="resourcesList">
          {resources.map((object) => (
            <div className={`universal-${resourceItem}`}>
              <a className="resourceAnchor" href={object.link} target="_blank">
                {object.text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesComponent;
