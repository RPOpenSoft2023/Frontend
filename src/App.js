import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/DashBoard";
import SignupPage from "./Pages/Signup";
import LoginPage from "./Pages/Login";
import Navbar from "./Components/Navbar/navbar";
import BankingDetails from "./Pages/BankingDetails";
import Analyser from "./Pages/Analyser";
import Join from "./Components/join";
import Add from "./Components/add";


function App() {
  return (
    <div className="App mx-0 my-0 bg-gray-200 min-h-screen font-['Lora']">
      <Navbar />
      <Routes>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/signup' element={<SignupPage />}></Route>
        <Route path='/analyser' element={<Analyser />}></Route>
        <Route path='/banking' element={<BankingDetails />}></Route>
        
        <Route path='/join' element={<Join />}></Route>
        <Route path='/add' element={<Add />}></Route>
      </ Routes>
    </div>
  );
}

export default App;
