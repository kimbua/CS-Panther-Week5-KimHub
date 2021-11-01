import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container className="d-flex space-between">
        <div className="icons">
          <FontAwesomeIcon className="icon" icon={faTwitterSquare} />
          <FontAwesomeIcon className="icon" icon={faFacebookSquare} />
          <FontAwesomeIcon className="icon" icon={faYoutubeSquare} />
          <FontAwesomeIcon className="icon" icon={faInstagramSquare} />
        </div>
        <p style={{ color: "#808080" }}>© Kimhub.com, 2021</p>
      </Container>
    </footer>
  );
};

export default Footer;
