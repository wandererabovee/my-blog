// Blog/components/Icons.js
import React from 'react';
import '../Styles/My_Computer.css';
import EmailMeIcon from '../IconFolder/35My_Email.png';


const Icons = () => {
  return (
    <div className="icon-wrapper">
    <img src={EmailMeIcon} alt="My Computer Icon" />
    <span>Email Me</span>
    </div>
  );
};

export default Icons;
