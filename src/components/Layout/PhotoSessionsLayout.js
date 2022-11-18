import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import PhotoSessionCard from "../photoSessionCard/PhotoSessionCard";
import Placeholder from "../placeholder/Placeholder";

export default class PhotoSessionsLayout extends Component {
  render() {
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
            {this.props.loading ? (
              <Placeholder />
            ) : (
              this.props.photoSessions.map((photoSession) => (
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
              ))
            )}
          </Row>
        </Container>
      </div>
    );
  }
}
