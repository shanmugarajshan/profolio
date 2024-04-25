import React from 'react';
import './App.css';
import Home from './component/home/Home';
import Header from './component/header/Header';
import About from './component/about/About';
import Skills from './component/skills/Skills';
import Services from './component/services/Services';

function App() {

  return (
    <>
      <Header />
      
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
      </main>
    </>
  );
}

export default App;
