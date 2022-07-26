import React from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import home from "./components/pages/home";
import projects from "./components/pages/projects";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          
          <Route path="/home" exact element={home()}/>
          <Route path="/projects" exact element={projects}/>
          <Route path="" element={<Navigate replace to="/home"/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
