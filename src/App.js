import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css';
import { Company, Contact, Enterprise, Home, Services } from './pages';
import CapabilitiesPage from './pages/capabilities/capabilities';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/company" element={<Company />} /> 
        <Route path="/enterprise" element={<Enterprise />} /> 
        <Route path="/capabilities" element={<CapabilitiesPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
