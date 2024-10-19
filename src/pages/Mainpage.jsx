import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainpage from './Mainpage'; // Your main page component
import Admin from './Admin'; // Your admin page component

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
