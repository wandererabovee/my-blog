// Blog/components/About me.js
import React from 'react';
//import '../Styles/About_Me.css';
import AboutMeIcon from '../IconFolder/35newpaper.png';


const Icons = () => {
  return (
    <div className="icon-wrapper">
    <img src={AboutMeIcon} alt="About Me Icon" />
    <span>About Me</span>
    </div>
  );
};

export default Icons;
