import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Components.css";
import "./photoAlbumCard.scss";

export default class PhotoAlbumCard extends Component {
  render() {
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    return (
      <div>
        <Link
          style={{ textDecoration: "none" }}
          to={`/photo-sessions/photo-album/${this.props.name}`}
          state={{ photos: this.props.photoAlbumPhotos, name: this.props.name }}
        >
          <div className="albumCard">
            <img
              alt="icon"
              src={`${BASE_URL}/photos/first-image/photo-album/${this.props.albumId}`}
              className="cardImg"
            />
            <div className="title">{this.props.name}</div>
          </div>
        </Link>
      </div>
    );
  }
}
