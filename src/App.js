import React from 'react';
import About from './components/About';
import BackToTop from './components/BackToTop';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import Skills from './components/Skills';
import Work from './components/Work';

function App() {

  return (
    <>
        <ScrollProgress />
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
        <Footer />
        <BackToTop />
    </>
  );
}

export default App;
