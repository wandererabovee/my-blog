// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <Link to="/blog">Go to Blog</Link>
    </div>
  );
};

export default Home;
