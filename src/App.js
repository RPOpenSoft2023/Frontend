import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/DashBoard";
import SignupPage from "./Pages/Signup";
import BeforeSignUpPage from "./Pages/BeforeSignUp";
import LoginPage from "./Pages/Login";
import Navbar from "./Components/Navbar/navbar";
import BankingDetails from "./Pages/BankingDetails";
import Analyser from "./Pages/Analyser";
import Private_Signup from "./Components/Private_Signup"
import Join from "./Components/join";
import ForgotPassword from "./Pages/ForgotPassword";
function App() {

  return (
    <div className="App mx-0 my-0 bg-gray-200 min-h-screen font-['Lora']">
      <Navbar />
      <Routes>
        <Route path='/' element={<LoginPage />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/signup' element={<BeforeSignUpPage />}></Route>
        <Route path='/signup/profile' element={<Private_Signup><SignupPage /></Private_Signup>}></Route>
        <Route path='/analyser' element={<Analyser />}></Route>
        <Route path='/banking' element={<BankingDetails />}></Route>
        <Route path='/join' element={<Join />}></Route>
        <Route path='/forgotpassword' element={<ForgotPassword/>}></Route>
      </ Routes>
    </div>
  );
}
export default App;
