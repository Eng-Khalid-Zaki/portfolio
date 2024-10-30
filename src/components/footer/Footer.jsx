import { Link as ScrollLink } from "react-scroll";
import "./footer.css";
export default function Footer({ names }) {
  return (
    <footer>
      <div>
        <ul>
          <li>
            <ScrollLink to={names[0]} smooth={true} duration={500}>
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to={names[1]} smooth={true} duration={500}>
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to={names[2]} smooth={true} duration={500}>
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>
      <p>© 2024 Spencer Sharp, All rights reserved</p>
    </footer>
  );
}
