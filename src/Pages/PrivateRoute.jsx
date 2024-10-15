import React  from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute =({ children}) =>  {
    const userToken = localStorage.getItem("user");

    if(!userToken)
    {
        return <Navigate to="/login"/>
    }

     
    return   children;;
};

export default PrivateRoute;