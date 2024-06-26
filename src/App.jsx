import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';

import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import Projects from './components/Project/Projects';
import Contact from './components/Contact/Contact';
import Cursor from './components/Cursor/Cursor';
import './App.css';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';
import useScrollToTop from './Hooks/useScrollTo';
import GitHub from './components/Github/GitHub';

function App() {
  useScrollToTop();
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 400,
      offset: 120,
      delay: 70,
    });

    window.addEventListener('scroll', AOS.refresh);

    return () => {
      window.removeEventListener('scroll', AOS.refresh);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Routes>

        <Route path="/*" element={<Main />} />
        <Route path="/form" element={<Form />} />
        <Route path="/project/:projectId" element={<ProjectDetails />} />
        
      </Routes>
    </>
  );
}

const Main = () => {
  return (
    <>
      
      <section className='hidden lg:block'>
        <Cursor />
      </section>

      <section id='Hero'>
        <Hero />
      </section>

      <section id='About'>
        <About />
      </section>

      <section id='Project'>
        <Projects />
      </section>

      <section id='Contact'>
        <Contact />
      </section>
      
    </>
  );
};

export default App;
