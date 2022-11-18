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
          <Row md={1} lg={2} className="row row--35 align-items-center">
            <Col>
              <AvatarImage />
            </Col>
            <Col>
              <PersonalInformation />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
