import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "./hero.css";
export default function Hero() {
  return (
    <section className="devider hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <img src="./public/me.jpg" alt="" />
          <FontAwesomeIcon icon={faCircleCheck} />
        </div>
        <div className="hero-info">
          <p className="hero-title">Software frontend React developer</p>
          <p className="hero-description">
            I am Khalid Zaki, a dedicated and innovative frontend developer
            specializing in React. With a strong foundation in HTML, CSS, and
            JavaScript, I craft seamless and dynamic user interfaces that
            enhance user experience and drive engagement. My passion for coding
            and keen eye for design enable me to turn complex problems into
            intuitive and responsive web applications. Let us bring your ideas
            to life.
          </p>
        </div>
        <div className="hero-social">
          <FontAwesomeIcon icon={faGithubAlt} />
          <FontAwesomeIcon icon={faLinkedinIn} />
        </div>
      </div>
    </section>
  );
}
