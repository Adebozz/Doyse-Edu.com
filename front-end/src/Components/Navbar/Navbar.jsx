import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
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
      <button className='Admin'>Admin</button>
    </div>
  )
}

export default Navbar
