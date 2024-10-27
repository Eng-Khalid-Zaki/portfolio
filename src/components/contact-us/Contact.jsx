import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "./contact.css";
export default function Contact({ theme, screenWidth }) {
  return (
    <section className="devider contact">
      <div className="contact-header">
        <h3>
          <span>
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          Contact Us
        </h3>
        <p>
          Contact Us for more information and get notified when I publish
          something new
        </p>
      </div>
      <div className="contact-content">
        <form action="">
          <div>
            <label htmlFor="">Email Address</label>
            <input type="email" />
          </div>
          <div>
            <label htmlFor="">Your Message</label>
            <textarea type="text" />
          </div>
          <button>Submit</button>
        </form>
        {screenWidth > 768 && <div className="animation">ANIMATION</div>}
      </div>
    </section>
  );
}
