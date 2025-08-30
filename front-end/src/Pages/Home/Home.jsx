import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import VideoBackground from '../../Components/Videobackground/VideoBackground'

const Home = () => {
  return (
    <div className='Home'>
      <VideoBackground />
      <Navbar />
      <div className="content">
        <h1>Welcome to Doyse Educational Consult</h1>
        <p>This is a sample text over the video background.</p>
      </div>
    </div>
  )
}

export default Home
