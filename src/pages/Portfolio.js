import React, { Component } from "react";
import axios from "axios";
import CardGrid from "../components/Layout/PhotoAlbumLayout";
import PhotoAlbumLayout from "../components/Layout/PhotoAlbumLayout";
import PhotoSessionsLayout from "../components/Layout/PhotoSessionsLayout";

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoSessions: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:8081/api/photo-sessions/list")
      .then((response) => response.data)
      .then((data) =>
        this.setState({ photoSessions: data._embedded.photoSessionDtoList })
      );
  }

  render() {
    return (
      <div>
        <PhotoSessionsLayout photoSessions={this.state.photoSessions} />
      </div>
    );
  }
}
