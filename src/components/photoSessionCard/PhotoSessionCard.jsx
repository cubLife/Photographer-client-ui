import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import PhotoSessionOrder from "../PhotoSessionOrder";
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
          <img src={photoSession._links.icon.href} className="cardImg" />
          <div className="title">{photoSession.name}</div>
          {/* <div className="bottom">
            <span>{photoSession.name}</span>
            <Button
              variant="btn btn-outline-success"
              onClick={() => this.handleClick()}
            >
              Zamowic
            </Button>
          </div> */}
        </div>
        {/* <PhotoSessionOrder
          sessionPackages={this.props.sessionPackages}
          photoSessionId={photoSession.id}
          isOpen={this.state.isOpen}
          onClose={() => this.onClose()}
        /> */}
      </div>
    );
  }
}
