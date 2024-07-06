import React from 'react';
import './vb.css';
import assets from '../../assets/assets'

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop id="bg-video">
        <source src={assets.backgrond} type="video/mp4" />
       WELCOME 
      </video>
    </div>
  );
};

export default VideoBackground;
