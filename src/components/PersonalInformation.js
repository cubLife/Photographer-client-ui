import axios from "axios";
import React, { Component } from "react";

export default class PersonalInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photographer: [],
    };
  }

  componentDidMount() {
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    axios
      .get(`${BASE_URL}/photographers/1`)
      .then((response) => response.data)
      .then((data) => this.setState({ photographer: data }));
  }

  render() {
    return (
      <div>
        <h1
          className="font-weight-bolder"
          style={{ color: "#3f4b5b", fontSize: "50px", marginBottom: "20px" }}
        >
          O Mnie
        </h1>
        <p className="lead" style={{ fontSize: "30px" }}>
          {this.state.photographer.aboutMyself}
        </p>
      </div>
    );
  }
}
