// Blog/components/Icons.js
import React from 'react';
import '../Styles/My_Computer.css';
import MyComputerIcon from '../IconFolder/35my_computer.png';


const Icons = () => {
  return (
    <div className="icon-wrapper">
    <img src={MyComputerIcon} alt="My Computer Icon" />
    <span>My Computer</span>
    </div>
  );
};

export default Icons;
