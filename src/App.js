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
import Loading from "./components/LoadingPage/Loading.jsx";
function App() {
  const [isLoading,setIsLoading]=useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    },5000);
  },[]);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Restore scroll position when the pathname is "/"
  useEffect(() => {
    if (pathname === "/") {
      const position = sessionStorage.getItem("lastviewed");
      if (position) {
        window.scrollTo(0, parseInt(position, 10));
        console.log("Scrolled to:", position);
      }
    }
  }, [pathname]);

  // Save the scroll position whenever the user scrolls
  useEffect(() => {
    const saveScrollPosition = () => {
      if (pathname === "/") {
        sessionStorage.setItem("lastviewed", window.scrollY);
      }
    };

    window.addEventListener("scroll", saveScrollPosition);

    return () => {
      window.removeEventListener("scroll", saveScrollPosition);
    };
  }, [pathname]);

  // Handle navigation and save scroll position before navigating
  const handleNavigate = (dest) => {
    sessionStorage.setItem("lastviewed", window.scrollY);
    navigate(dest);
  };


  return (
    <div className="App">
      {isLoading?
      <Loading/> :(
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
        <Route
          path="/projects"
          element={
            <>
              <MoreProjects /> 
              <Footer />
            </>
          }
        />
      </Routes>
      )  
    }
    </div>
  );
}

export default App;
