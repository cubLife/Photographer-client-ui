import React, { Component } from "react";
import "./photoSessionCard.scss";

export default class PhotoSessionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleClick() {
    this.setState({ isOpen: true });
  }

  onClose() {
    this.setState({ isOpen: false });
  }

  render() {
    const photoSession = this.props.photoSession;
    return (
      <div>
        <div className="sessionCard">
          <img
            alt="icon"
            src={photoSession._links.icon.href}
            className="cardImg"
          />
          <div className="title">{photoSession.name}</div>
        </div>
      </div>
    );
  }
}
