import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/DashBoard";
import SignupPage from './Pages/Signup';
import LoginPage from './Pages/Login';
import Navbar from './Components/Navbar/navbar';
import Analyser from './Pages/Analyser';
import ForgotPasswordPage from './Pages/ForgotPassword';
import ResetPasswordPage from './Pages/ResetPassword';
import BeforeSignUpPage from './Pages/BeforeSignUp';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Dashboard />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/signup' element={<BeforeSignUpPage />}></Route>
        <Route path='/signup/profile' element={<SignupPage />}></Route>
        <Route path='/forgotpassword' element={<ForgotPasswordPage />}></Route>
        <Route path='/resetpassword' element={<ResetPasswordPage />}></Route>
        <Route path='/Analyser' element={<Analyser />}></Route>
      </ Routes>
    </div>
  );
}

export default App;
