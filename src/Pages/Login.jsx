import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { setFormData } from "../redux/actions";

const Login = () => {
  const dispatch = useDispatch();
  const { formData } = useSelector((state) => state.newsSlice);

  const navigate = useNavigate();

  const handleChange = (e) => {
    dispatch(setFormData({ ...formData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      alert("Kindly fill the credentials");
      return;
    }

    const users= JSON.parse(localStorage.getItem("users") ) || [];

    const user = users.find(
      (u) =>
        u.username === formData.username && u.password === formData.password
    );

    if (user) {
      console.log("users:",user)
      localStorage.setItem("user", formData.username);
      navigate("/home");
      window.location.reload();
    } 
    else {
      alert("Invalid Credentials");
    }

    dispatch(
      setFormData({
        username: "",
        password: "",
      })
    );

 
  };

  return (
    <div className="login_page">
      <div className="login_content">
        <h2 className="details">Login</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Username:{" "}
            <input
              type="text"
              name="username"
              autoComplete="off"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Password:{" "}
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
        <p>
          Create new account:- <Link to="/register">Register Here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
