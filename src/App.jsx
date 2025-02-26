import React, { useEffect, useRef } from 'react';
import './App.css';
import NavBar from './comps/NavBar';
import Intro from './comps/Intro';
import Button from './comps/frags/Button';
import About from './comps/About';
import TechStack from './comps/TechStack';
import Projects from './comps/Projects';
import { Connect } from 'vite';

const App = () => {
  

  return (
    // Mark this div as the scroll container and attach the ref
    <div id='intro' className="!p-3">
      <NavBar />
      <Intro />
      <About/>
      <TechStack/>
      <Projects/>
      <Connect/>
      {/* You can add Button or other components as needed */}
    </div>
  );
};

export default App;
