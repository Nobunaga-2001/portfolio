import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Mainpage from './pages/Mainpage'; // Your main page component
import Admin from './pages/AdminAdmin'; // Your admin page component

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Mainpage />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </Router>
    );
};

export default App;
