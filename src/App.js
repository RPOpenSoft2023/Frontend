import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/DashBoard";
import SignupPage from './Pages/Signup';
import LoginPage from './Pages/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/signup' element={<SignupPage />}></Route>
      </ Routes>
    </div>
  );
}

export default App;
