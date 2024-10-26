import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "./hero.css";
export default function Hero({ theme, screenWidth }) {
  return (
    <section className="devider hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <img src="./public/me.jpg" alt="" />
          <FontAwesomeIcon icon={faCircleCheck} />
        </div>
        <div className="hero-info">
          <p className="hero-title">Software MERN stack developer</p>
          <p className="hero-description">
            I am Khalid Zaki, a MERN stack developer, who graduated from
            AL-Azhar University in Egypt, Faculty of engineering, department of
            computers and systems engineering.
          </p>
        </div>
        <div className="hero-social">
          <FontAwesomeIcon icon={faGithubAlt} />
          <FontAwesomeIcon icon={faLinkedinIn} />
        </div>
      </div>
      <div className="hero-animation">ANIMATION</div>
    </section>
  );
}
