import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import { useState } from "react";

function NavBar({ onCategorySelect }) {
  const [activeCategory, setactiveCategory] = useState("sports");

  const handleCategoryClick = (category) => {
    setactiveCategory(category);
    onCategorySelect(category);
  };

  return (
    <nav className="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          News Hub
        </a>
        <div className="navbar-nav-container">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeCategory === "sports" ? "active" : ""
                }`}
                href="#"
                onClick={() => handleCategoryClick("sports")}
              >
                Sports
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeCategory === "politics" ? "active" : ""
                }`}
                href="#"
                onClick={() => handleCategoryClick("politics")}
              >
                Politics
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeCategory === "health" ? "active" : ""
                }`}
                href="#"
                onClick={() => handleCategoryClick("health")}
              >
                Health
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeCategory === "entertainment" ? "active" : ""
                }`}
                href="#"
                onClick={() => handleCategoryClick("entertainment")}
              >
                Entertainment
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeCategory === "technology" ? "active" : ""
                }`}
                href="#"
                onClick={() => handleCategoryClick("technology")}
              >
                Technology
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
