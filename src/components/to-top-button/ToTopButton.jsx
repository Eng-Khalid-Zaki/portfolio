import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import "./to-top-button.css";
export default function ToTopButton() {
  const [buttonClasses, setButtonClasses] = useState("to-top");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100
        ? setButtonClasses("to-top visible")
        : setButtonClasses("to-top");
    });
  });
  return (
    <button className={buttonClasses}>
      <FontAwesomeIcon icon={faCaretUp} />
    </button>
  );
}
