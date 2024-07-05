import React from 'react';
import './vb.css';
import assets from '../../assets/assets'

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop id="bg-video">
        <source src={assets.backgrond} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
