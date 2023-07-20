import React from "react";
import { useState } from "react";
import "./BigNames.css";

const BigNames = () => {
  const [names, setNames] = useState([
    "John Smith - Head of Savings",
    "Mark Doe",
    "David Moggs",
    "Mike G",
    "James Oscar",
    "Angela Migt",
  ]);

  return (
    <div className="bigNames">
      <h3 className="sectionHeader" id="bigNamesHeader">
        Big names to meet
      </h3>
      <div className="bigNamesList">
        {names.map((name, index) => (
          <div key={index} className="bigNameItem">
            <input type="checkbox" id={`name-${index}`} />
            <label htmlFor={`name-${index}`}>{name}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BigNames;
