import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/DashBoard";
import Navbar from './Components/Navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/login' element={<Login />}/>
      </ Routes>
    </div>
  );
}

export default App;
