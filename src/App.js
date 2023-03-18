import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/DashBoard";
import Navbar from './Components/Navbar/navbar';
import BankingDetails from './Pages/BankingDetails';
function App() {
  return (
    <div className="App bg-gray-200 h-screen">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/banking' element={<BankingDetails />}></Route>
      </ Routes>
    </div>
  );
}

export default App;
