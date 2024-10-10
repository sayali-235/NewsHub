import React from "react";
import { useNavigate , Link} from "react-router-dom";
import "./Login.css"
import { useDispatch, useSelector } from "react-redux";
import { setFormData } from "../redux/actions";
 
 
const Login = () => {
  const dispatch =useDispatch();
  const {formData}=useSelector((state)=>state.newsSlice)
  
  const navigate = useNavigate();
 
  const handleChange = (e) => {
    dispatch (setFormData({ ...formData, [e.target.name]: e.target.value })) ;
  };

  const handleSubmit =  (e) =>{
    if(!formData.username ||  !formData.email)
    {
      alert("Kindly fill the credentials");
      return;
    }
    e.preventDefault();
    const users= JSON.parse(localStorage.getItem("users") ) || [];
    const user=users.find(
      (u) => u.username ===formData.username && u.email === formData.email
    );
     
    if(user)
    {
      localStorage.setItem("token","123456789");
      navigate("/home");
    }
    else{
      alert("Invalid Credentials");
    }
  };
    return  (
      <div className="login_page">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Username:{" "}
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Email:{" "}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
  


export default Login;
