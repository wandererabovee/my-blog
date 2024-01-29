// Blog/components/Icons.js
import React from 'react';
import '../Styles/My_Computer.css';
import MyWebsiteIcon from '../IconFolder/35My_Websites.png';


const Icons = () => {
  return (
    <div className="icon-wrapper">
    <img src={MyWebsiteIcon} alt="My Website Icon" />
    <span>My Website</span>
    </div>
  );
};

export default Icons;
