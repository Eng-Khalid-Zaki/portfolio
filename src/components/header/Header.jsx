import "./header.css";
import { useState, useEffect } from "react";
import Modal from "../modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

let headerClasses = "";
export default function Header({ theme, toggleTheme, screenWidth }) {
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
              <a>About</a>
            </li>
            <li>
              <a>Articles</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Speaking</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </Modal>
      )}
      {screenWidth > 700 && (
        <ul>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Articles</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>Speaking</a>
          </li>
          <li>
            <a>Contact</a>
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
