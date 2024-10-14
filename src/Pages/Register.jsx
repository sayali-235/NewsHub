import { useDispatch, useSelector } from "react-redux";
import { setFormData } from "../redux/actions";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const dispatch = useDispatch();
  const { formData } = useSelector((state) => state.newsSlice);

  const navigate = useNavigate();

  const handleChange = (e) => {
    dispatch(setFormData({ ...formData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.phone || !formData.password) {
      alert("Kindly Fill the all details");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.some(
      (user) => user.username === formData.username.trim()
    );
    if (userExists) {
      alert("User  with this username is already exists");
      return;
    } else {
      users.push(formData);
    }

    localStorage.setItem("users", JSON.stringify(users));

     

    dispatch(
      setFormData({
        username: "",
        email: "",
        phone: "",
        password :"",
      })
    );

    navigate("/login");
  };

  
  return (
    
    <div className="register_page">
      <div className="register_content">
      <h2 className="details">Register</h2>
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
        <label>
          Phone No:{" "}
          <input
            type="text"
            name="phone"
            autoComplete="off"
            value={formData.phone}
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
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account ? <Link to="/login">Login here</Link>
      </p>
      </div>
    </div>
  );
};

export default Register;
