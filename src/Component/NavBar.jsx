import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/actions";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

import { useNavigate } from "react-router-dom";
 

function NavBar() {

  const navigate = useNavigate();
  const handleLogOut = () => {
    alert("Are sure to Log Out");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const categories = [
    { name: 'Sports', key: 'sports' },
    { name: 'Politics', key: 'politics' },
    { name: 'Health', key: 'health' },
    { name: 'Entertainment', key: 'entertainment' },
    { name: 'Technology', key: 'technology' },
  ];

  const dispatch = useDispatch();
  const activeCategory = useSelector((state) => state.category);

  const handleCategoryClick = (category) => {
    dispatch(setCategory(category));
  };

  return (
    <nav className="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          News Hub
        </a>
        <div className="navbar-nav-container">
          <ul className="navbar-nav">
             {categories.map((category) =>(
              <li
                key={category.key}
                className={`nav-item ${activeCategory === category.key ? "active" : ""}`}
              >
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => handleCategoryClick(category.key)}
                >
                  {category.name}
                </a>
              </li>
            ))}
            <li className="nav-item">
              <button onClick={handleLogOut}>LogOut</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
