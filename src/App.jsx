import { useState } from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import TechSkills from "./sections/TechSkills";
import Projects from "./sections/Projects";
import Background from "./sections/Background";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/project1" element={<Project1/>} />
        <Route path="/project2" element={<Project2/>} />
      </Routes>
    </Router>
  );
}

export default App;
