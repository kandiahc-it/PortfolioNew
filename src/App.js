import React, { useEffect, useRef, useState } from "react";
import Intro from "./components/intro/intro.js";
import Navbar from "./components/NavBar/navbar.js";
import Skills from "./components/skills/skills.js";
import Works from "./components/works/works.js";
import Contact from "./components/contacts/contacts.js";
import Footer from "./components/footer/footer.js";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import MoreProjects from "./components/MoreProjects/MoreProjects.jsx";
import Eduskills from "./components/Eduskills/Eduskills.jsx";
function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      const position = sessionStorage.getItem("lastviewed");
      if (position) {
        window.scrollTo(0, parseInt(position, 10));
        console.log("Scrolled to:", position);
      }
    }
  }, [pathname]);
  const navigate = useNavigate();
  const handleNavigate = (dest) => {
    sessionStorage.setItem("lastviewed", window.scrollY);
    navigate(dest);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="neon-balls"></div>

              <Navbar />
              <Intro />
              <Skills />
              <Works handleNavigate={handleNavigate} />
              <Eduskills />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/projects" element={<MoreProjects />} />
      </Routes>
    </div>
  );
}

export default App;
