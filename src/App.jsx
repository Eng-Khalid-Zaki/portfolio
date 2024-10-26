import React from "react";
import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact-us/Contact";
import Footer from "./components/footer/Footer";
function App() {
  const [theme, setTheme] = useState("dark");
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div className="container">
      <Header theme={theme} toggleTheme={toggleTheme} screenWidth={width} />
      <Hero theme={theme} screenWidth={width} />
      <Projects theme={theme} screenWidth={width} />
      <Contact theme={theme} screenWidth={width} />
      <Footer theme={theme} screenWidth={width} />
    </div>
  );
}

export default App;
