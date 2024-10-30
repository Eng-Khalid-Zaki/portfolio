import { useState, useEffect } from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact-us/Contact";
import Footer from "./components/footer/Footer";
import ToTopButton from "./components/to-top-button/ToTopButton";

function App() {
  let currentTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(currentTheme ?? "dark");
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    if (theme === "dark") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <div className="container">
      <Element name="top">
        <Header
          theme={theme}
          toggleTheme={toggleTheme}
          screenWidth={width}
          names={["hero", "projects", "contact"]}
        />
      </Element>
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="projects">
        <Projects theme={theme} />
      </Element>
      <Element name="contact">
        <Contact theme={theme} />
      </Element>
      <Footer names={["hero", "projects", "contact"]} />
      <ScrollLink to="top" smooth={true} duration={500}>
        <ToTopButton />
      </ScrollLink>
    </div>
  );
}

export default App;
