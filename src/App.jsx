import React from "react";
import { useState, useEffect } from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact-us/Contact";
import Footer from "./components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [theme, setTheme] = useState("dark");
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="container">
      <Element name="top">
        <Header theme={theme} toggleTheme={toggleTheme} screenWidth={width} />
      </Element>
      <Hero theme={theme} screenWidth={width} />

      <Projects theme={theme} screenWidth={width} />
      <Contact theme={theme} screenWidth={width} />
      <Footer theme={theme} screenWidth={width} />
      <ScrollLink to="top" smooth={true} duration={500}>
        <button className="to-top">
          <FontAwesomeIcon icon={faCaretUp} />
        </button>
      </ScrollLink>
    </div>
  );
}

export default App;
