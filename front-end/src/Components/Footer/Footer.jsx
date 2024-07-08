import React from 'react'
import './Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear();
      
  return (
    <div className='Footer'>
        <div className="logo">
                <h1>Doyse Edu</h1>
                
            </div>
        <div className="footer-contain">
            <div className="menuu">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="contact">
                <ul>
                    <li>Instagram</li>
                    <li>Whatsapp</li>
                    <li>Email</li>
                    <li></li>
                </ul>
            </div>
            <div className="form">
                <form action="get" method="get">
                    <input type="text" placeholder='Name'/>
                    <input type="email" name="" id="" />
                    <input type="text" name="" id="content" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
        <div className="footered">
        <p>&copy; {currentYear} Doyse Edu. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
