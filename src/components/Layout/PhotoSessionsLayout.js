import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import PhotoSessionCard from "../photoSessionCard/PhotoSessionCard";
import { getPlaceholders } from "../../getPlaceholders";

export default class PhotoSessionsLayout extends Component {
  render() {
    const placeholders = getPlaceholders(8, 300, 350);
    return (
      <div>
        <Container className="my-4">
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
            {this.props.loading
              ? placeholders.map((placeholder) => placeholder)
              : this.props.photoSessions.map((photoSession) => (
                  <Link
                    key={photoSession.id}
                    to={`/photo-sessions/${photoSession.id}`}
                    state={{
                      photoAlbumsUrl: photoSession._links.photoAlbums.href,
                    }}
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
