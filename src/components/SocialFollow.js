import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./Components.css";

export default class SocialFollow extends Component {
  render() {
    const FACEBOOK = "https://www.facebook.com/natalia.aleksandrova.7146";
    const INSTAGRAM =
      "https://www.instagram.com/na_photo_pl/?fbclid=IwAR0w6yG3z-mDIsd-whSOgsjU0SdnroJx-fyjPMou2t-LGBExnPrSUuAceLY";

    return (
      <div>
        <Container>
          <a target="blank" href={FACEBOOK} className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="3x" />
          </a>
          <a target="blank" href={INSTAGRAM} className="instagram social">
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </a>
        </Container>
      </div>
    );
  }
}
