// Blog/components/Icons.js
import React from 'react';
import '../Styles/My_Computer.css';
import MyNotesIcon from '../IconFolder/35My_notes.png';


const Icons = () => {
  return (
    <div className="icon-wrapper">
    <img src={MyNotesIcon} alt="My Computer Icon" />
    <span>My Notes</span>
    </div>
  );
};

export default Icons;
