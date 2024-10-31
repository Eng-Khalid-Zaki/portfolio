import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "./hero.css";
import heroImg from "/public/me.jpg";
export default function Hero() {
  return (
    <section className="devider hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <img src={heroImg} alt="" />
          <FontAwesomeIcon icon={faCircleCheck} />
        </div>
        <div className="hero-info">
          <p className="hero-title">Software frontend React developer</p>
          <p className="hero-description">
            I am Khalid Zaki, a dedicated and innovative frontend developer
            specializing in React. With a strong foundation in HTML, CSS,
            JavaScript, and React JS. I craft seamless and dynamic user
            interfaces that enhance user experience and drive engagement. My
            passion for coding and keen eye for design enable me to turn complex
            problems into intuitive and responsive web applications. Let us
            bring your ideas to life.
          </p>
        </div>
        <div className="hero-social">
          <a href="https://github.com/Eng-Khalid-Zaki" target="_blank">
            <FontAwesomeIcon icon={faGithubAlt} />
          </a>
          <a
            href="https://www.linkedin.com/in/khalid-zaki-0293832a4"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>
    </section>
  );
}
