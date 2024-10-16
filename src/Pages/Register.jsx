import { useDispatch, useSelector } from "react-redux";
import { setFormData, setErrors} from "../redux/actions";
import { useNavigate, Link } from "react-router-dom";  
import "./Register.css";

const Register = () => {
  const dispatch = useDispatch();
  const { formData, errors } = useSelector((state) => state.newsSlice);
  const navigate = useNavigate();
 

  const handleChange = (e) => {
    dispatch(setFormData({ ...formData, [e.target.name]: e.target.value }));
  };

  const validateForm = () => {

    let isValid = true;
    let tempErrors = { username: "", email: "", phone: "", password: "" };

    if (!formData.username.trim()) {
      tempErrors.username = "Username is required";
      isValid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email.trim() || !emailPattern.test(formData.email)) {
      tempErrors.email = "Valid email is required";
      isValid = false;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!formData.phone.trim() || !phonePattern.test(formData.phone)) {
      tempErrors.phone = "Phone number must be 10 digits";
      isValid = false;
    }
  
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!formData.password.trim() || !passwordPattern.test(formData.password)) {
      tempErrors.password = "Password must be at least 8 characters long, with at least one uppercase letter, one number and one special character";
      isValid = false;
    }

    dispatch (setErrors(tempErrors));
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;   
    }

    const users = JSON.parse(localStorage.getItem("users")) ||[] ;
    const userExists = users.some(
      (user) => user.username === formData.username.trim()
    );

    if (userExists) {
      alert("User with this username already exists");
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
        password: "",
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
          <span className="error">{errors.username}</span>
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
          <span className="error">{errors.email}</span>
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
          <span className="error">{errors.phone}</span>
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
          <span className="error">{errors.password}</span>
          <br />
          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
