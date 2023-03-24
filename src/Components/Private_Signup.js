import React from "react";
import { Navigate } from "react-router";


const Private = ({ children }) => {
    return ((localStorage.getItem("phone_verified") === "true") ? children : (<Navigate to='/signup' />))
};

export default Private;