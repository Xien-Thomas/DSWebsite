import React from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import home from "./components/pages/home";
import projectPage from "./components/pages/projectPage";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          
          <Route path="/home" exact element={home()}/>
          <Route path="/projects" exact element={projectPage()}/>
          <Route path="" element={<Navigate replace to="/home"/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
