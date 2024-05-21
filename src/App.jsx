import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import Projects from './components/Project/Projects';
import Contact from './components/Contact/Contact';
import Cursor from './components/Cursor/Cursor';
import './App.css';

function App() {


  

  return (
    <>
      
      <Navbar/>
      <Cursor/>
      <section id='Hero'>
        <Hero/>
      </section>

      <section id='About'>
        <About/>
      </section>

      <section id='Project'>
        <Projects/>
      </section>

      <section id='Contact'>
        <Contact/>
      </section>
        
       

    
      
      {/* <About/> */}
    </>
  );
};

export default App
