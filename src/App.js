import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/DashBoard";
import SignupPage from './Pages/Signup';
import LoginPage from './Pages/Login';
import Navbar from './Components/Navbar/navbar';
import BankingDetails from './Pages/BankingDetails';
import Analyser from './Pages/Analyser';

function App() {
  return (
    <div className="App mx-0 my-0 min-h-screen">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/signup' element={<SignupPage />}></Route>
        <Route path='/banking' element={<BankingDetails />}></Route>
        <Route path='/Analyser' element={<Analyser />}></Route>
      </ Routes>
    </div>
  );
}

export default App;
