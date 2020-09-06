import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faItunesNote } from "@fortawesome/free-brands-svg-icons";
function Header() {
  return (
    <header>
      <h1>
        <FontAwesomeIcon icon={faItunesNote} color="white" />elaxify
      </h1>
    </header>
  );
}

export default Header;
