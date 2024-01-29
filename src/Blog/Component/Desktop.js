// Blog/components/Desktop.js
import React from 'react';
import TopBar from './TopBar';
import My_Computer from './My_Computer';
import Icons from './Icons';
import '../Styles/Desktop.css';

const Desktop = () => {
  return (
    <div>
      <TopBar />
      <Icons />
      <div className="desktop-container">
      </div>
    </div>
  );
};

export default Desktop;
