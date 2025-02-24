import React, { useEffect, useRef } from 'react';
import './App.css';
import NavBar from './comps/NavBar';
import Intro from './comps/Intro';
import Button from './comps/Button';

const App = () => {
  

  return (
    // Mark this div as the scroll container and attach the ref
    <div className="!p-5 !m-5l">
      <NavBar />
      <Intro />
      <Intro />
      <Intro />
      {/* You can add Button or other components as needed */}
    </div>
  );
};

export default App;
