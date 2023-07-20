import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaLaptopCode } from "react-icons/fa";
import { BsFillClipboardCheckFill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { AiOutlineStock, AiOutlineDeliveredProcedure } from "react-icons/ai";
import { GrUserManager } from "react-icons/gr";
import DeveloperPage from "./Pages/DeveloperPage";
import TesterPage from "./Pages/TesterPage";
import OperationsPage from "./Pages/OperationsPage";
import MarketingPage from "./Pages/MarketingPage";
import ProductManagerPage from "./Pages/ProductManagerPage";
import DeliveryManagerPage from "./Pages/DeliveryManagerPage";
// ...

function HomePage() {
  const roleNames = [
    "Developer",
    "Tester",
    "Operations",
    "Marketing",
    "Product Manager",
    "Delivery Manager",
  ];

  const roleIcons = {
    Developer: <FaLaptopCode className="icon laptop" />,
    Tester: <BsFillClipboardCheckFill className="icon clipboard" />,
    Operations: <IoSettingsSharp className="icon settings" />,
    Marketing: <AiOutlineStock className="icon stock" />,
    "Product Manager": <GrUserManager className="icon user" />,
    "Delivery Manager": (
      <AiOutlineDeliveredProcedure className="icon procedure" />
    ),
  };

  return (
    <div>
      <div className="headerContainer">
        <header>
          <h1 id="selectHeader">Please select your new role</h1>
        </header>
      </div>
      <div className="cardColumnsContainer">
        <div className="cardColumns" data-testid="card-columns-div">
          {roleNames.map((role, index) => (
            <Link
              key={index}
              to={`/welcome/${role.toLowerCase().replace(/\s+/g, "-")}`}
              className="cardContainer">
              <h2 id="iconContainer">{roleIcons[role]}</h2>
              <p id="roleNameContainer">{role}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function WelcomePage() {
  const { role } = useParams();

  const roleComponents = {
    developer: <DeveloperPage />,
    tester: <TesterPage />,
    operations: <OperationsPage />,
    marketing: <MarketingPage />,
    "product-manager": <ProductManagerPage />,
    "delivery-manager": <DeliveryManagerPage />,
  };

  return roleComponents[role] || null;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/welcome/:role" element={<WelcomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
