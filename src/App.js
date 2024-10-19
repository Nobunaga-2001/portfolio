import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mainpage from './pages/Mainpage'; // Import Mainpage
import Admin from './pages/Admin';       // Import Admin


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to My React App</h1>
        </header>
        <Routes>
          {/* Route for Mainpage */}
          <Route path="/" element={<Mainpage />} />
          {/* Route for Admin */}
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
