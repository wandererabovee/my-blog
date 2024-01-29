// Blog/components/Icons.js
import React from 'react';
import '../Styles/My_Computer.css';
import RecycleBinIcon from '../IconFolder/35trash.png';


const Icons = () => {
  return (
    <div className="icon-wrapper">
    <img src={RecycleBinIcon} alt="My Computer Icon" />
    <span>Recycle Bin</span>
    </div>
  );
};

export default Icons;
