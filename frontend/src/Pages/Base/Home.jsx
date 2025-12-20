import React from 'react';
import { Link } from 'react-router-dom';
import { HiHandRaised,  HiOutlineLightBulb } from 'react-icons/hi2';

import '../../Styles/Home.css';
import Dashboard from '../Other/Dashboard';

function Home() {
  return (
      <div className="main-container">
             <Dashboard/>
    </div>
  );
}

export default Home;
