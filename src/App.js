import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import Admin from './pages/Admin';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Mainpage />} />
                <Route path="/admin" element={<Admin />} />
                {/* Add other routes here if needed */}
            </Routes>
        </Router>
    );
}

export default App;
