
// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SelectionPage from './pages/SelectionPage';
import AreasPage from './pages/AreasPage';
import ChecklistPage from './pages/ChecklistPage';
import './App.css';

function App() {
  const [selectedSite, setSelectedSite] = useState(null);
  const [selectedArea, setSelectedArea] = useState(null);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            element={<SelectionPage setSelectedSite={setSelectedSite} />} 
          />
          <Route 
            path="/areas" 
            element={
              selectedSite ? 
              <AreasPage selectedSite={selectedSite} setSelectedArea={setSelectedArea} /> : 
              <Navigate to="/" />
            } 
          />
          <Route 
            path="/checklist" 
            element={
              selectedArea ? 
              <ChecklistPage selectedArea={selectedArea} selectedSite={selectedSite} /> : 
              <Navigate to="/areas" />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;