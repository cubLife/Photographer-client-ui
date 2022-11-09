import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Rating from "@mui/material/Rating";

export default class FeedbackCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      costumer: {},
    };
  }

  getDate(milliseconds) {
    return new Date(milliseconds).toLocaleString();
  }

  render() {
    const feedback = this.props.feedback;
    return (
      <div>
        <Card key={feedback.id} className="mt-3">
          <Card.Header>
            {`${feedback.firstName} ${feedback.lastName}`}
            <br />
            <Rating
              name="simple-controlled"
              value={feedback.grade}
              size="small"
              readOnly={true}
            />
            <br />
            {this.getDate(feedback.creationDate)}
          </Card.Header>
          <Card.Body>
            <Card.Title>{feedback.feedback}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
