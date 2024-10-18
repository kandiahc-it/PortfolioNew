import React from 'react';
import Intro from './components/intro/intro.js';
import Navbar from "./components/NavBar/navbar.js"
import Skills from './components/skills/skills.js';
import Works from './components/works/works.js';
import Contact from './components/contacts/contacts.js';
import Footer from './components/footer/footer.js';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
      </div>
  );
}

export default App;
