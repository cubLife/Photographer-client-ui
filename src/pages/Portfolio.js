import React, { Component } from "react";
import axios from "axios";
import PhotoSessionsLayout from "../components/Layout/PhotoSessionsLayout";

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoSessions: [],
      loading: true,
    };
  }
  componentDidMount() {
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    this.setState({ loading: true });
    axios
      .get(`${BASE_URL}/photo-sessions/list`)
      .then((response) => response.data)
      .then((data) =>
        this.setState({
          photoSessions: data._embedded.photoSessionDtoList,
        })
      )
      .then(this.setState({ loading: false }));
  }

  render() {
    return (
      <div>
        <h1
          style={{
            textAlign: "center",
            color: "#3f4b5b",
            marginTop: "30px",
            fontSize: "40px",
          }}
        >
          Portfolio
        </h1>
        <PhotoSessionsLayout
          photoSessions={this.state.photoSessions}
          loading={this.state.loading}
        />
      </div>
    );
  }
}
