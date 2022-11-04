import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AvatarImage from "../AvatarImage";
import ContactCard from "../ContactCard";
import ContactMessageForm from "../ContactMessageForm";
import PersonalInformation from "../PersonalInformation";
import SocialFollow from "../SocialFollow";

export default class ContactLayout extends Component {
  render() {
    return (
      <div>
        <Container className="mt-5">
          <Row className="row row--35 ">
            <Col lg={5}>
              <h4 style={{ color: "#3f4b5b" }}>Napisz do mnie wiadomość</h4>
              <ContactMessageForm />
            </Col>
            <Col lg={7}>
              <h4 style={{ color: "#3f4b5b" }}>Kontact</h4>
              <h5 style={{ color: "#3f4b5b" }}>
                {" "}
                Nataly Aleksandrowa. Fotograf Bydgoszcz, Torun
              </h5>
              <ContactCard />
              <SocialFollow />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
