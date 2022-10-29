import axios from "axios";
import React, { Component } from "react";

export default class AvatarImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8081/api/avatar-images/photographer-id/1")
      .then((response) => response.data)
      .then((data) => this.setState({ image: data._links }));
  }

  getImageLink() {
    const self = Object.values(this.state.image);
    const href = Object.values(self).map((self) => self.href);
    return href;
  }

  render() {
    return (
      <div>
        <img
          className="w-100 shadow-lg p-1 mb-5 bg-white rounded"
          src={this.getImageLink()}
          alt="About Images"
        />
      </div>
    );
  }
}
