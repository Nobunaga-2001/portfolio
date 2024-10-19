import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to My React App</h1>
        </header>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
