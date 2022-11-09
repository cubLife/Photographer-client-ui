import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AvatarImage from "./AvatarImage";
import PersonalInformation from "./PersonalInformation";

export default class PhotographerInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Container className="mt-5">
          <Row className="row row--35 align-items-center">
            <Col lg={4}>
              <AvatarImage />
            </Col>
            <Col lg={7}>
              <PersonalInformation />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
