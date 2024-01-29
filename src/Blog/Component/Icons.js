
import React from 'react';
import '../Styles/Icons.css'

import MyComputer from './My_Computer';
import MyWebsite from './My_Website';
import AboutMe from './About_Me'
import MyNotes from './My_Notes'
import EmailMe from './Email_Me'
import RecycleBin from './Recycle_Bin'


const Icons = () => {
  return (
    <div className="icons-container">
      <MyComputer />
      <MyWebsite />
      <AboutMe />
      <MyNotes />
      <EmailMe />
      <RecycleBin />
    </div>
  );
};

export default Icons;
