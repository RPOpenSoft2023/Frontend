import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/DashBoard";
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/login' element={<Login />}/>
      </ Routes>
    </div>
  );
}

export default App;
