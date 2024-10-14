import React from "react";
import { BrowserRouter as Router, Routes, Route , Navigate} from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import PrivateRoute from "./Pages/PrivateRoute";


function App() {
     
    const token=localStorage.getItem("token");
    localStorage.removeItem("token");
     

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Register />} />
        <Route path="/register" element={token ? <Navigate to="/home"replace  />:<Register />} />
        <Route path="/login" element={token ? <Navigate to="/home" replace />:<Login />} />
        <Route path="/home" element={
          <PrivateRoute>
            <Home />
            </PrivateRoute>
            
        } 
        
       />
       <Route path="/home/:category" element={<PrivateRoute><Home /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
