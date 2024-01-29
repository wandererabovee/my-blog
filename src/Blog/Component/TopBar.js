// Blog/components/TopBar.js
import React, { useState, useEffect } from 'react';
import '../Styles/TopBar.css';
import battery from '../IconFolder/35battery.png';

const TopBar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures useEffect runs only once

  const formatTime = (date) => {
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    return date.toLocaleTimeString([], options);
  };

  return (
    <div className="top-bar">
      <div className="left-content">
        <span className="text">Web Dev</span>
        <span className="text">Linux Distros</span>
        <span className="text">Game Dev</span>
        <span className="text">Help</span>
      </div>
      <div className="right-content">
        <span className="time">{formatTime(currentTime)}</span>
        <img src={battery} alt="Battery Icon" className="battery-icon" />
        <span className="battery-level">99%</span>
      </div>
    </div>
  );
};

export default TopBar;
