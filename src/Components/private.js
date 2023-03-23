import React from "react";
import { Navigate } from "react-router";


const Private = ({ children }) => {
    return ((localStorage.getItem("logstat") === "true") ? children : (<Navigate to='/' />))
};

export default Private;