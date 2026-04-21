import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Experiences } from "./components/Experiences";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";





const App = () => {
  const [darkMode, setDarkMode] = useState(true); // default dark

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);

  // Apply dark class to html
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } transition-colors duration-500`}
    >
      {/* Navbar */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Home Section */}
      <Home darkMode={darkMode} />
      {/* About Section */}
      <About darkMode={darkMode} />
      {/* Skills Section */}
      <Skills darkMode={darkMode}/>
      {/* Education Section */}
      <Education darkMode={darkMode}/>
      {/* Experiences Section */}
      <Experiences darkMode={darkMode}/>
      {/* Projects Section */}
      <Projects darkMode={darkMode}/>
      {/* Contact Section */}
      <Contact darkMode={darkMode}/>
      {/* Footer */}
      <Footer darkMode={darkMode}/>
      

    
    </div>
  );
};

export default App;