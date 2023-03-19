import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";
import Analyser from "./Pages/Analyser";

function App() {
  return (
    <div className="App bg-gray-200">
      <Routes>
        <Route path='Analyser' element={<Analyser />}></Route>
      </ Routes>
    </div>
  );
}

export default App;
