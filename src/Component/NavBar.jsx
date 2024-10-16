import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/actions";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

import { useNavigate, NavLink } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const activeCategory = useSelector((state) => state.category);

  const handleLogOut = () => {
    // alert("Are sure to Log Out");
    const logOutConfirm = window.confirm("Are you sure to logout");
    if (logOutConfirm) {

      localStorage.removeItem("user");
     window.location.reload();

      navigate("/login");
    }
  };

  const categories = [
    { name: "Sports", key: "sports" },
    { name: "Politics", key: "politics" },
    { name: "Health", key: "health" },
    { name: "Entertainment", key: "entertainment" },
    { name: "Technology", key: "technology" },
  ];

  const handleCategoryClick = (category) => {
    dispatch(setCategory(category));
    navigate(`/home/${category}`);
  };

  return (
    <nav className="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          News Hub
        </a>
        <div className="navbar-nav-container">
          <ul className="navbar-nav">
            {categories.map((category) => (
              <li
                key={category.key}
                className={`nav-item ${
                  activeCategory === category.key ? "active" : ""
                }`}
              >
                <NavLink
                  className="nav-link"
                  to={`/home/${category.key}`}
                  onClick={() => handleCategoryClick(category.key)}
                  activeClassName="active"
                >
                  {category.name}
                </NavLink>
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
