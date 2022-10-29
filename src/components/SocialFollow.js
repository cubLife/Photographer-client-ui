import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Components.css";

export default class SocialFollow extends Component {
  render() {
    return (
      <div>
        <Container>
          <a target="blank" href="#" className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="3x" />
          </a>
          <a href="#" className="instagram social">
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </a>
        </Container>
      </div>
    );
  }
}
