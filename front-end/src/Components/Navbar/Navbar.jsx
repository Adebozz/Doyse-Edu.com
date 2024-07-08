import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  // Initialize state for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Define the toggle function
  const toggleBackground = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="logo">
        <h1>Doyse Edu</h1>
      </div>
      <div className="menu">
        <ul>
          <li className='home'>Home</li>
          <li className='About'>About</li>
          <li className='Services'>Services</li>
          <li className='Contact'>Contact</li>
        </ul>
      </div>
        <button className='toggle' onClick={toggleBackground}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    </div>
  );
}

export default Navbar;
