import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify, faItunesNote } from "@fortawesome/free-brands-svg-icons";
function Header() {
  return (
    <header>
      <h1>
        <FontAwesomeIcon icon={faItunesNote} color="#1DB954" /> Relaxify
      </h1>
    </header>
  );
}

export default Header;
