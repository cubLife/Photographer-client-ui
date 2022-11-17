import axios from "axios";
import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import FeedbackCard from "../FeedbackCard";

export default class FeedbackLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedbacks: [],
    };
  }

  componentDidMount() {
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    axios
      .get(`${BASE_URL}/feedbacks/list`)
      .then((response) => response.data)
      .then((data) =>
        this.setState({ feedbacks: data._embedded.costumerFeedbackDtoList })
      );
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col className="col-lg-6 mx-auto mt-4">
              {this.state.feedbacks.map((feedback) => (
                <FeedbackCard key={feedback.id} feedback={feedback} />
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
