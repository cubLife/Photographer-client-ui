import React, { Component } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const FeedbackForm = () => {
  const [grade, setGrade] = useState(3);
  const [feedback, setFeedback] = useState({});
  const [errorResponse, setError] = useState({});

  const onChange = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    setFeedback({ ...feedback, [id]: value });
  };

  useEffect(() => {
    setFeedback({ ...feedback, grade: grade });
  }, [grade]);

  const handleSubmit = async () => {
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    try {
      await axios.post(`${BASE_URL}/feedbacks`, feedback);
      setError({});
      window.location.reload(false);
    } catch (error) {
      setError(error.response.data);
    }
  };

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
                  onChange={onChange}
                />
                <p className="text-danger">{errorResponse.firstName}</p>
                <Form.Control
                  id="lastName"
                  type="text"
                  required={true}
                  placeholder="Nazwisko"
                  onChange={onChange}
                />
                <p className="text-danger">{errorResponse.lastName}</p>
                <Form.Control
                  id="email"
                  type="email"
                  required={true}
                  placeholder="Email"
                  onChange={onChange}
                />
                <p className="text-danger">{errorResponse.email}</p>
              </Form.Group>

              <Typography component="legend">Twoja ocena</Typography>
              <Rating
                value={grade}
                onChange={(event, newValue) => {
                  setGrade(newValue);
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
                  onChange={onChange}
                />
                <p className="text-danger">{errorResponse.feedback}</p>
              </Form.Group>
              <div className="d-grid gap-3">
                <Button
                  onClick={handleSubmit}
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
};
export default FeedbackForm;
