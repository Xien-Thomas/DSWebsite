import React from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import home from "./components/pages/home";
import projectPage from "./components/pages/projectPage";

import './App.css';
import Footer from "./components/Footer/Footer";
import blogpage from "./components/pages/blogpage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          
          <Route path="/home" exact element={home()}/>
          <Route path="/projects" exact element={projectPage()}/>
          <Route path="/blog" exact element={blogpage()}/>
          <Route path="" element={<Navigate replace to="/home"/>}/>
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
