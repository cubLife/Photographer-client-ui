import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Components.css";
import "./photoAlbumCard.scss";

export default class PhotoAlbumCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("photos " + this.props.photoAlbumPhotos);
    return (
      <div>
        <Link
          style={{ textDecoration: "none" }}
          to={`/photo-sessions/photo-album/${this.props.name}`}
          state={{ photos: this.props.photoAlbumPhotos, name: this.props.name }}
        >
          <div className="albumCard">
            <img
              src={`http://localhost:8081/api/photos/first-image/photo-album/${this.props.albumId}`}
              className="cardImg"
            />
            <div className="title">{this.props.name}</div>
          </div>
        </Link>
      </div>
    );
  }
}

{
  /* <Card className="text-white mx-auto border-0 ">
<Card.Img
  className="Border-radius"
  src={
    "http://localhost:8081/api/photos/first-image/photo-album/" +
    this.props.albumId
  }
  alt="Card image"
/>
<Card.ImgOverlay>
  <div className="Text-position">
    <Card.Title className="Text-stile">
      {this.props.name}
    </Card.Title>
  </div>
</Card.ImgOverlay>
</Card> */
}
