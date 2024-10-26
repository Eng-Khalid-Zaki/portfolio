import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import image from "../../../public/React.jpeg";
import "./projects.css";
export default function Projects() {
  return (
    <section className="devider projects">
      <div className="projects-type">
        <button className="active">all projects</button>
        <button>HTML & CSS</button>
        <button>react & MUI</button>
        <button>next</button>
        <button>node & express</button>
      </div>

      <div className="projects-content">
        <div className="project">
          <img src={image} alt="" />
          <div className="project-info">
            <p className="project-title">Project 1</p>
            <p className="project-description">
              this is the first project! please take a tour in it!
            </p>
          </div>
          <div className="project-links">
            <div>
              <FontAwesomeIcon icon={faLink} />
              <FontAwesomeIcon icon={faGithubAlt} />
            </div>
            <span>
              More <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </div>
        </div>
        <div className="project">
          <img src={image} alt="" />
          <div className="project-info">
            <p className="project-title">Project 1</p>
            <p className="project-description">
              this is the first project! please take a tour in it!
            </p>
          </div>
          <div className="project-links">
            <div>
              <FontAwesomeIcon icon={faLink} />
              <FontAwesomeIcon icon={faGithubAlt} />
            </div>
            <span>
              More <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </div>
        </div>
        <div className="project">
          <img src={image} alt="" />
          <div className="project-info">
            <p className="project-title">Project 1</p>
            <p className="project-description">
              this is the first project! please take a tour in it!
            </p>
          </div>
          <div className="project-links">
            <div>
              <FontAwesomeIcon icon={faLink} />
              <FontAwesomeIcon icon={faGithubAlt} />
            </div>
            <span>
              More <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </div>
        </div>
        <div className="project">
          <img src={image} alt="" />
          <div className="project-info">
            <p className="project-title">Project 1</p>
            <p className="project-description">
              this is the first project! please take a tour in it! this is the
              first project! please take a tour in it! this is the first
              project! please take a tour in it!
            </p>
          </div>
          <div className="project-links">
            <div>
              <FontAwesomeIcon icon={faLink} />
              <FontAwesomeIcon icon={faGithubAlt} />
            </div>
            <span>
              More <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
