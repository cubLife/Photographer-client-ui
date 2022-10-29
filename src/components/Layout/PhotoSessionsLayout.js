import axios from "axios";
import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import PhotoSessionCard from "../photoSessionCard/PhotoSessionCard";

export default class PhotoSessionsLayout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.photoSessions);
    return (
      <div>
        <Container className="my-5 center">
          <Row
            xs={1}
            md={2}
            lg={4}
            className="g-3"
            style={{
              margin: "auto",
              justifyContent: "center",
            }}
          >
            {this.props.photoSessions.map((photoSession) => (
              <Link
                key={photoSession.id}
                to={`/photo-sessions/${photoSession.id}`}
                state={{ photoAlbumsUrl: photoSession._links.photoAlbums.href }}
              >
                <PhotoSessionCard
                  key={photoSession.id}
                  photoSession={photoSession}
                />
              </Link>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
