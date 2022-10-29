import axios from "axios";
import React, { Component } from "react";
import { Button, Form, FormGroup, FormLabel, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: { photoSessionPackageId: this.props.sessionPackageId },
      isChanged: [false, false],
      isOpen: false,
      errorResponse: "",
    };
  }

  orderButtonHandler(index) {
    const newState = [...this.state.isChanged];
    newState[index] = !newState[index];
    this.setState({ isChanged: newState });
  }

  handleClose() {
    this.setState({ isOpen: false });
  }

  handleClick() {
    axios
      .post("http://localhost:8081/api/orders", this.state.formData)
      .then((response) => {
        this.setState({ errorResponse: {} });
        this.setState({ isOpen: true });
      })
      .catch((error) => {
        this.setState({ errorResponse: error.response.data });
      });
  }

  onChange = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    this.setState({ formData: { ...this.state.formData, [id]: value } });
    console.log(this.state.formData);
  };

  render() {
    return (
      <div>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Imie</Form.Label>
            <Form.Control
              id="costumerFirstName"
              type="text"
              rows={3}
              name="costumerFirstName"
              onChange={this.onChange}
            />
            <p className="text-danger">
              {this.state.errorResponse.costumerFirstName}
            </p>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Nazwisko</Form.Label>
            <Form.Control
              id="costumerLastName"
              type="text"
              rows={3}
              name="costumerLastName"
              onChange={this.onChange}
            />
            <p className="text-danger">
              {this.state.errorResponse.costumerLastName}
            </p>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              id="costumerEmail"
              type="text"
              name="costumerEmail"
              placeholder="name@example.com"
              onChange={this.onChange}
            />
            <p className="text-danger">
              {this.state.errorResponse.costumerEmail}
            </p>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Telefon</Form.Label>
            <Form.Control
              id="costumerPhone"
              type="text"
              rows={3}
              name="costumerPhone"
              placeholder="+481234567890"
              onChange={this.onChange}
            />
            <p className="text-danger">
              {this.state.errorResponse.costumerPhone}
            </p>
          </Form.Group>
          <FormGroup>
            <Form.Label>Sesja zdjęciowa</Form.Label>
            <Form.Control
              id="photoSessionName"
              type="text"
              rows={3}
              name="photoSession"
              placeholder="Sesja rodzinna"
              onChange={this.onChange}
            />
            <p className="text-danger"></p>
          </FormGroup>
          <p className="text-danger">
            {this.state.errorResponse.photoSessionName}
          </p>
          <FormGroup>
            <Form.Check
              inline
              id="checkRules"
              type="checkbox"
              onChange={() => this.orderButtonHandler(0)}
            />
            <FormLabel>
              Zapoznalem sie z{" "}
              <Link to="/regulations" target="_blank">
                regulaminem
              </Link>
            </FormLabel>
          </FormGroup>
          <FormGroup>
            <Form.Check
              onChange={() => this.orderButtonHandler(1)}
              inline
              id="checkConsent"
              type="checkbox"
            />
            <FormLabel>
              Daje zgodę na przetwarzanie moich danych osobowych
            </FormLabel>
          </FormGroup>
          <Modal.Footer>
            <Button
              name="order"
              disabled={!this.state.isChanged[0] || !this.state.isChanged[1]}
              variant="success"
              onClick={() => this.handleClick()}
            >
              Zamowic
            </Button>
            <Button variant="danger" onClick={this.props.handleClose}>
              Zamknij
            </Button>
          </Modal.Footer>
        </Form>
        <Modal
          show={this.state.isOpen}
          onHide={() => this.handleClose}
          backdrop="static"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          keyboard
        >
          <Modal.Header>
            <Modal.Title>Witam</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            " Zamówienie zostało wysłane, wkrótce skontaktujemy się z Tobą!"
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={() => this.handleClose()}>
              Zamknij
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
