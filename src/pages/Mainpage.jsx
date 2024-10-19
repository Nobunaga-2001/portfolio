import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook

const Mainpage = () => {
    const navigate = useNavigate();  // Initialize the navigate function

    const goToAdmin = () => {
        navigate('/admin');  // This will navigate to the /admin page
    };

    return (
        <div>
            <h1>Main Page</h1>
            <p>Welcome to the main page of the app!</p>
            <button onClick={goToAdmin}>Go to Admin Page</button>  {/* Button that triggers navigation */}
        </div>
    );
};

export default Mainpage;
