import React, { Component } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import axios from "axios";

export default class FeedbackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grade: 3,
      feedback: {},
      errorResponse: {},
    };
  }

  onChange = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    this.setState({ feedback: { ...this.state.feedback, [id]: value } });
  };

  handleSubmit = async () => {
    this.setState({
      feedback: { ...this.state.feedback, grade: this.state.grade },
    });
    try {
      await axios.post(
        "http://localhost:8081/api/feedbacks",
        this.state.feedback
      );
      this.setState({ errorResponse: {} });
      window.location.reload(false);
    } catch (error) {
      this.setState({ errorResponse: error.response.data });
    }
  };

  render() {
    return (
      <div className="mt-3">
        <Container>
          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    id="firstName"
                    type="text"
                    required={true}
                    placeholder="Imie"
                    onChange={this.onChange}
                  />
                  <p className="text-danger">
                    {this.state.errorResponse.firstName}
                  </p>
                  <Form.Control
                    id="lastName"
                    type="text"
                    required={true}
                    placeholder="Nazwisko"
                    onChange={this.onChange}
                  />
                  <p className="text-danger">
                    {this.state.errorResponse.lastName}
                  </p>
                  <Form.Control
                    id="email"
                    type="email"
                    required={true}
                    placeholder="Email"
                    onChange={this.onChange}
                  />
                  <p className="text-danger">
                    {this.state.errorResponse.email}
                  </p>
                </Form.Group>

                <Typography component="legend">Twoja ocena</Typography>
                <Rating
                  value={this.state.grade}
                  onChange={(event, newValue) => {
                    this.setState({ grade: newValue });
                  }}
                  size="large"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    id="feedback"
                    as="textarea"
                    placeholder="Opinie"
                    required={true}
                    rows={3}
                    onChange={this.onChange}
                  />
                  <p className="text-danger">
                    {this.state.errorResponse.feedback}
                  </p>
                </Form.Group>
                <div className="d-grid gap-3">
                  <Button
                    onClick={() => this.handleSubmit()}
                    variant="outline-success"
                    size="lg"
                  >
                    Wysłać
                  </Button>
                  <br />
                </div>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    );
  }
}
