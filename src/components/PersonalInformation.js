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
    axios
      .get("http://localhost:8081/api/photographers/1")
      .then((response) => response.data)
      .then((data) => this.setState({ photographer: data }));
  }
  render() {
    return (
      <div>
        <h1 className="font-weight-bolder x-large" style={{ color: "#3f4b5b" }}>
          O Mnie
        </h1>
        <p className="lead">{this.state.photographer.aboutMyself}</p>
      </div>
    );
  }
}
