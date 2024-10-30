import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import image from "../../../public/React.jpeg";
import projects from "../../util";
import "./projects.css";
export default function Projects({ theme }) {
  const [showableProjects, setshowableProjects] = useState({
    activeButton: "All Projects",
    projects: projects,
  });
  const handleSetShowableProjects = (e) => {
    const category = e.target.innerText;
    if (category === "All Projects") {
      setshowableProjects({
        activeButton: category,
        projects: projects,
      });
    } else {
      setshowableProjects({
        activeButton: category,
        projects: projects.filter((project) => project.category === category),
      });
    }

    console.log(showableProjects);
  };
  return (
    <section className="devider projects">
      <div className="projects-type">
        <button
          className={
            (theme === "light" ? "light " : "") +
            (showableProjects.activeButton === "All Projects" ? "active" : "")
          }
          onClick={handleSetShowableProjects}
        >
          all projects
        </button>
        <button
          className={
            (theme === "light" ? "light " : "") +
            (showableProjects.activeButton === "HTML & CSS" ? "active" : "")
          }
          onClick={handleSetShowableProjects}
        >
          HTML & CSS
        </button>
        <button
          className={
            (theme === "light" ? "light " : "") +
            (showableProjects.activeButton === "React & MUI" ? "active" : "")
          }
          onClick={handleSetShowableProjects}
        >
          react & MUI
        </button>
        <button
          className={
            (theme === "light" ? "light " : "") +
            (showableProjects.activeButton === "Next" ? "active" : "")
          }
          onClick={handleSetShowableProjects}
        >
          next
        </button>
        <button
          className={
            (theme === "light" ? "light " : "") +
            (showableProjects.activeButton === "Node & Express" ? "active" : "")
          }
          onClick={handleSetShowableProjects}
        >
          node & express
        </button>
      </div>

      <div className="projects-content">
        {showableProjects.projects.map((project, index) => (
          <div className="project" key={index}>
            <img src={project.image} alt="" />
            <div className="project-info">
              <p className="project-title">{project.title}</p>
              <p className="project-description">{project.description}</p>
            </div>
            <div className="project-links">
              <a href={project.codeURL} target="_blank">
                <button className={theme === "light" ? "light " : ""}>
                  Source Code
                </button>
              </a>

              <a href={project.liveURL} target="_blank">
                <button className={theme === "light" ? "light " : ""}>
                  Visit <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
