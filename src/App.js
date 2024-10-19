// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

import Admin from './pages/Admin';
import Mainpage from './pages/Mainpage';



function App() {
  return (
    <Router>
      <Routes>  
      <Route path="/" element={<Mainpage />} />
      <Route path="/admin" element={<Admin />} />
     
      </Routes>
    </Router>
  );
} 

export default App;
