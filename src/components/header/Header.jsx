import "./header.css";
import { useState, useEffect } from "react";
import Modal from "../modal/Modal";
import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

let headerClasses = "";

export default function Header({ theme, toggleTheme, screenWidth, names }) {
  const [open, setOpen] = useState(false);

  const openHandler = () => setOpen(true);
  const closeHandler = () => setOpen(false);

  useEffect(() => {
    if (screenWidth > 700) {
      headerClasses = "";
      open && closeHandler();
    } else {
      headerClasses = "small-screen";
    }
  });

  return (
    <header className={headerClasses}>
      {screenWidth <= 700 && (
        <FontAwesomeIcon icon={faBars} onClick={openHandler} />
      )}
      {open && screenWidth < 700 && (
        <Modal isOpen={open}>
          <ul>
            <li>
              <FontAwesomeIcon icon={faXmark} onClick={closeHandler} />
            </li>
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
              <ScrollLink to="speaking" smooth={true} duration={500}>
                Speaking
              </ScrollLink>
            </li>
          </ul>
        </Modal>
      )}
      {screenWidth > 700 && (
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
        </ul>
      )}
      {theme === "dark" ? (
        <FontAwesomeIcon icon={faMoon} onClick={toggleTheme} />
      ) : (
        <FontAwesomeIcon icon={faSun} onClick={toggleTheme} />
      )}
    </header>
  );
}
