import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import OfferCard from "../offerCard/OfferCard";

export default class SessionPackageLayout extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row xs={1} md={1} lg={3}>
            {this.props.sessionPackages.map((sessionPackage) => (
              <Col key={sessionPackage.id}>
                <OfferCard sessionPackage={sessionPackage} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
