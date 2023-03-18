import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/DashBoard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
      </ Routes>
    </div>
  );
}

export default App;
